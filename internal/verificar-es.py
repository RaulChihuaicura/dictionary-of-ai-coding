#!/usr/bin/env python
"""Verifica la edicion ES contra el original en ingles.

Cinco chequeos por entrada:
  1. El frontmatter parsea como YAML de verdad (no con regex).
  2. Paridad de links: mismos destinos, en el mismo orden, que el original.
  3. Largo de `description`: maximo 140 caracteres.
  4. Traducciones prohibidas segun internal/glosario-es.md.
  5. Bloques estructurales `_Usage:_` / `_Avoid:_` presentes si el original los tiene.

El chequeo 1 existe porque un `description` sin comillas que contenga ": "
rompe el YAML sin romper `npm run generate`, que solo corta strings y nunca
parsea. El defecto solo se ve al abrir el archivo en Obsidian o VS Code.

Uso:  python internal/verificar-es.py
"""

import os
import re
import sys

import yaml

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN = os.path.join(RAIZ, "dictionary")
ES = os.path.join(RAIZ, "dictionary-es")

LINK_RE = re.compile(r"\]\((\./[^)]+\.md)\)")
DESC_RE = re.compile(r"^---\n(.*?)\n---\n", re.S)
ETIQUETA_RE = re.compile(r"^_[^\W\d_][^_\n]*:_", re.M | re.U)

# Cubeta 2 del glosario: terminos que NUNCA deben aparecer traducidos.
PROHIBIDAS = {
    "ficha": "token",
    "fichas": "tokens",
    "arnés": "harness",
    "armazón": "harness",
    "herramienta": "tool",
    "herramientas": "tools",
    "traspaso": "handoff",
    "presupuesto de atención": "attention budget",
    "zona lista": "smart zone",
    "zona tonta": "dumb zone",
    "interrogatorio": "grilling",
    "habilidad": "skill",
    "habilidades": "skills",
    "especificación": "spec",
    "boleta": "ticket",
    "tiquete": "ticket",
    "gancho": "hook",
    "ganchos": "hooks",
    "caja de arena": "sandbox",
}


def descripcion(texto):
    """Devuelve (description, error). Parsea el frontmatter como YAML real."""
    m = DESC_RE.match(texto)
    if not m:
        return None, "sin frontmatter"
    try:
        datos = yaml.safe_load(m.group(1))
    except yaml.YAMLError as e:
        detalle = str(e).splitlines()[0]
        return None, (
            f"el frontmatter no parsea como YAML ({detalle}). "
            'Casi siempre es un ": " dentro de un description sin comillas'
        )
    if not isinstance(datos, dict) or "description" not in datos:
        return None, "sin campo description en el frontmatter"
    return str(datos["description"]), None


def revisar(nombre):
    """Devuelve la lista de errores de una entrada. Vacia = pasa."""
    errores = []
    ruta_en = os.path.join(EN, nombre)
    ruta_es = os.path.join(ES, nombre)
    if not os.path.exists(ruta_en):
        return [f"no existe el original {nombre}"]

    en = open(ruta_en, encoding="utf-8").read()
    es = open(ruta_es, encoding="utf-8").read()

    # 1. paridad de links
    l_en, l_es = LINK_RE.findall(en), LINK_RE.findall(es)
    if l_en != l_es:
        faltan = [x for x in l_en if x not in l_es]
        sobran = [x for x in l_es if x not in l_en]
        if faltan:
            errores.append(f"links faltantes: {faltan}")
        if sobran:
            errores.append(f"links inventados: {sobran}")
        if not faltan and not sobran:
            errores.append("links en distinto orden que el original")

    # 2. frontmatter valido y largo de description
    d, err = descripcion(es)
    if err:
        errores.append(err)
    elif len(d) > 140:
        errores.append(f"description de {len(d)} caracteres (maximo 140)")

    # 3. traducciones prohibidas
    bajo = es.lower()
    for mala, buena in PROHIBIDAS.items():
        if re.search(r"(?<![\w])" + re.escape(mala) + r"(?![\w])", bajo):
            errores.append(f'traduccion prohibida "{mala}" (debe ser "{buena}")')

    # 4. bloques estructurales conocidos
    for en_marca, es_marca in (("_Usage:_", "_Uso:_"), ("_Avoid:_", "_Evita:_")):
        if en_marca in en and es_marca not in es:
            errores.append(f"falta el bloque {es_marca}")

    # 5. conteo de etiquetas estructurales.
    # Ademas de _Usage:_ y _Avoid:_ el corpus trae cuatro etiquetas que
    # aparecen una sola vez (_Vendor terms:_, _Surfaces as:_, _Fix:_,
    # _Diagnostic test:_). Nombrarlas una por una no escala, asi que se
    # compara cuantas hay: si el original tiene 2 y la traduccion 1, se
    # perdio un bloque, sin importar como se llame.
    n_en = len(ETIQUETA_RE.findall(en))
    n_es = len(ETIQUETA_RE.findall(es))
    if n_en != n_es:
        errores.append(
            f"el original tiene {n_en} etiquetas estructurales (_Xxx:_) "
            f"y la traduccion {n_es}"
        )

    return errores


def main():
    if not os.path.isdir(ES):
        print("no existe dictionary-es/")
        return 1
    nombres = sorted(n for n in os.listdir(ES) if n.endswith(".md"))
    if not nombres:
        print("dictionary-es/ esta vacio")
        return 1

    fallas = 0
    for n in nombres:
        errores = revisar(n)
        if errores:
            fallas += 1
            print(f"FALLA  {n}")
            for e in errores:
                print(f"       - {e}")
        else:
            print(f"ok     {n}")

    total = len(nombres)
    print()
    print(f"{total - fallas}/{total} entradas pasan  ({total} de 69 traducidas)")
    return 1 if fallas else 0


if __name__ == "__main__":
    sys.exit(main())
