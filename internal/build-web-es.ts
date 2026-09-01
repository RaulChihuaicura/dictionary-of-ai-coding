#!/usr/bin/env -S npx tsx
// Construye la web de consulta de la edicion ES desde dictionary-es/ +
// Curriculum-es.md + web-es.template.html.
//
// Emite dos archivos con el mismo contenido:
//   diccionario-es.html                     documento completo, para abrir local o desde Drive
//   internal/artifact-diccionario-es.html   fragmento sin <html>/<head>/<body>, para publicar como Artifact
//
// El markdown se renderiza ACA, en tiempo de build, no en el navegador: la
// pagina no debe depender de ningun CDN, porque tiene que funcionar offline.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { marked } from "marked";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const CURRICULUM = join(HERE, "Curriculum-es.md");
const PLANTILLA = join(HERE, "web-es.template.html");
const DICT = join(ROOT, "dictionary-es");
const SALIDA_DOC = join(ROOT, "diccionario-es.html");
const SALIDA_FRAG = join(HERE, "artifact-diccionario-es.html");

marked.setOptions({ gfm: true, breaks: false });

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}

/** Mismo slug que usa generate-readme.ts, para que los deep links coincidan. */
function slug(h: string): string {
  return h
    .toLowerCase()
    .replace(/[^\p{L}\p{N} -]/gu, "")
    .replace(/ /g, "-");
}

type Seccion = { titulo: string; terminos: string[] };

function leerCurriculum(): Seccion[] {
  const secciones: Seccion[] = [];
  let actual: Seccion | null = null;
  readFileSync(CURRICULUM, "utf8")
    .split("\n")
    .forEach((raw) => {
      const l = raw.trimEnd();
      if (!l) return;
      if (l.startsWith("## ")) {
        actual = { titulo: l.slice(3), terminos: [] };
        secciones.push(actual);
      } else if (l.startsWith("- ")) {
        if (!actual)
          fail("Curriculum-es.md: termino antes de cualquier seccion");
        actual.terminos.push(l.slice(2).trim());
      }
    });
  return secciones;
}

function frontmatter(txt: string): { descripcion: string; cuerpo: string } {
  if (!txt.startsWith("---\n")) return { descripcion: "", cuerpo: txt };
  const fin = txt.indexOf("\n---\n", 4);
  if (fin === -1) return { descripcion: "", cuerpo: txt };
  const fm = txt.slice(4, fin);
  const cuerpo = txt.slice(fin + 5).replace(/^\n+/, "");
  const m = fm.match(/^description:\s*(.*)$/m);
  let d = m ? m[1].trim() : "";
  if (
    (d.startsWith('"') && d.endsWith('"')) ||
    (d.startsWith("'") && d.endsWith("'"))
  ) {
    d = d.slice(1, -1);
  }
  return { descripcion: d, cuerpo };
}

/** ./Context%20window.md -> context-window */
function slugDeRuta(ruta: string): string {
  return slug(
    decodeURIComponent(ruta.replace(/^\.\//, "").replace(/\.md$/, ""))
  );
}

/**
 * Convierte los parrafos-etiqueta (_Uso:_, _Evita:_, _Vendor terms:_) en
 * bloques con rotulo. Hay dos formas en el corpus: la etiqueta sola en su
 * parrafo, que abre un bloque hasta la siguiente etiqueta o el final; y la
 * etiqueta seguida de texto en la misma linea, que es un bloque de uno.
 */
function bloquesDeEtiqueta(html: string): string {
  const solo = /^<p><em>([^<]+):<\/em><\/p>$/;
  const conTexto = /^<p><em>([^<]+):<\/em>\s+([\s\S]*)<\/p>$/;
  const salida: string[] = [];
  let abierto = false;

  const cerrar = () => {
    if (abierto) {
      salida.push("</div>");
      abierto = false;
    }
  };

  for (const linea of html.split("\n")) {
    const a = linea.match(solo);
    if (a) {
      cerrar();
      salida.push('<div class="block"><p class="lbl">' + a[1] + "</p>");
      abierto = true;
      continue;
    }
    const b = linea.match(conTexto);
    if (b && !linea.includes("</p><p>")) {
      cerrar();
      salida.push(
        '<div class="block avoid"><p class="lbl">' +
          b[1] +
          "</p><p>" +
          b[2] +
          "</p></div>"
      );
      continue;
    }
    salida.push(linea);
  }
  cerrar();
  return salida.join("\n");
}

function textoPlano(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function main(): void {
  const secciones = leerCurriculum();
  const entradas: any[] = [];
  const entrantes = new Map<string, number>();

  for (const sec of secciones) {
    for (const termino of sec.terminos) {
      const ruta = join(DICT, `${termino}.md`);
      let crudo: string;
      try {
        crudo = readFileSync(ruta, "utf8");
      } catch {
        fail(`Curriculum-es.md nombra "${termino}" pero no existe ${ruta}`);
      }
      const { descripcion, cuerpo } = frontmatter(crudo);
      if (!descripcion)
        fail(`${termino}.md: sin description en el frontmatter`);

      // destinos, en orden de aparicion y sin repetir
      const salientes: string[] = [];
      for (const m of cuerpo.matchAll(/\]\((\.\/[^)]+\.md)\)/g)) {
        const s = slugDeRuta(m[1]);
        if (!salientes.includes(s)) salientes.push(s);
        entrantes.set(s, (entrantes.get(s) ?? 0) + 1);
      }

      let html = marked.parse(cuerpo) as string;
      html = html.replace(/<a href="(\.\/[^"]+\.md)">/g, (_, ruta: string) => {
        const s = slugDeRuta(ruta);
        return `<a class="x" data-slug="${s}" href="?term=${s}">`;
      });
      html = html.replace(
        /<table>[\s\S]*?<\/table>/g,
        (t) => `<div class="tw">${t}</div>`
      );
      html = bloquesDeEtiqueta(html);

      entradas.push({
        termino,
        slug: slug(termino),
        seccion: sec.titulo,
        descripcion,
        html,
        texto: descripcion + " " + textoPlano(html),
        salientes,
        entrantes: 0,
      });
    }
  }

  for (const e of entradas) e.entrantes = entrantes.get(e.slug) ?? 0;

  const datos = {
    secciones: secciones.map((s) => ({
      titulo: s.titulo,
      terminos: s.terminos.map(slug),
    })),
    entradas,
  };

  // `<` escapado para que ningun "</script>" del contenido cierre el bloque.
  const json = JSON.stringify(datos).replace(/</g, "\\u003c");

  const plantilla = readFileSync(PLANTILLA, "utf8");
  if (!plantilla.includes("/*__DATOS__*/"))
    fail("la plantilla no tiene el marcador /*__DATOS__*/");
  const fragmento = plantilla.replace("/*__DATOS__*/ null", json);

  writeFileSync(SALIDA_FRAG, fragmento);
  writeFileSync(
    SALIDA_DOC,
    '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
      "</head>\n<body>\n" +
      fragmento +
      "\n</body>\n</html>\n"
  );

  const totalLinks = entradas.reduce((n, e) => n + e.salientes.length, 0);
  console.log(
    `${entradas.length} entradas · ${secciones.length} secciones · ${totalLinks} destinos unicos enlazados`
  );
  console.log(`escrito ${SALIDA_DOC}`);
  console.log(`escrito ${SALIDA_FRAG}`);
}

main();
