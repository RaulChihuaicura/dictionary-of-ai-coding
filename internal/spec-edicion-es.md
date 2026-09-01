# Spec: edición en español

Diseño de `dictionary-es/` y `README-es.md`. Escrito el 31-08-2026, después de traducir las 69 entradas.

## Objetivo

Una edición en español del diccionario, con los términos técnicos en inglés y traducción adaptativa (no literal) del resto. Destinada a alguien que lee documentación en inglés y necesita el concepto explicado en su idioma.

## Las tres decisiones de fondo

1. **Vive dentro del repo**, como carpeta hermana de `dictionary/`, y no como notas sueltas ni como un único archivo traducido. Así el generador existente valida la consistencia (aborta si falta o sobra un término) y la edición queda portátil.
2. **Glosario mixto.** Se traduce lo que tiene equivalente asentado en español y se deja en inglés lo que nadie traduce en la práctica. El contrato completo está en `glosario-es.md` y manda sobre el criterio de cada entrada.
3. **Registro: tuteo neutro**, sin regionalismos, igual que el original.

## Restricción que no era decisión

**Los nombres de archivo y los títulos se quedan en inglés.** Las 69 entradas se enlazan entre sí con `./Model.md` y el generador los convierte en anclas `#model`; traducir un nombre rompe la red de referencias cruzadas. Coincide además con el uso real: al diccionario se llega desde la palabra en inglés que uno leyó.

## Archivos

| Archivo                      | Qué es                                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `dictionary-es/<Término>.md` | Las 69 entradas. Nombre en inglés, contenido en español.                                                   |
| `Curriculum-es.md`           | Mismas secciones con título traducido, misma lista de términos. Generado desde el original, no transcrito. |
| `README-es.template.md`      | Plantilla, con la nota de edición y el crédito al repo original.                                           |
| `glosario-es.md`             | Contrato terminológico. Tres cubetas más la tabla de traducciones prohibidas.                              |
| `verificar-es.py`            | Los cinco chequeos.                                                                                        |
| `README-es.md`               | Generado. No se edita a mano.                                                                              |

## Cambios al generador

`generate-readme.ts` acepta `--lang=es`, que cambia las cuatro rutas de golpe (currículum, plantilla, carpeta de entradas, salida). Sin el flag el comportamiento es idéntico al original, lo que se verificó regenerando el README en inglés después del parche y comprobando que el diff no cambió.

Además, `SECTION_RE` ahora acepta `## Sección N — Título` junto al inglés. Sin eso el script abortaba al parsear `Curriculum-es.md`, porque el regex original exige literalmente la palabra `Section`.

## Verificación

`python internal/verificar-es.py` corre cinco chequeos por entrada:

1. El frontmatter parsea como YAML de verdad, no con regex.
2. Paridad de links: mismos destinos, en el mismo orden que el original.
3. `description` de máximo 140 caracteres.
4. Ninguna traducción prohibida del glosario.
5. Mismo número de etiquetas estructurales (`_Xxx:_`) que el original.

**Cada chequeo fue probado plantándole el error que debe atrapar.** Un validador que aprueba todo no es evidencia de nada, y este ya falló una vez en silencio: la primera versión leía el `description` con una expresión regular y dio PASS sobre un archivo cuyo frontmatter no parseaba. El defecto es invisible para `npm run generate`, que solo corta strings y nunca parsea YAML, así que solo aparece al abrir el archivo en un editor.

Chequeo adicional que no vive en el script, porque se corre sobre la salida: las anclas internas del README generado deben resolver. Medido en 744 links y 0 rotas, el mismo conteo que el README en inglés.

## Mantención

Cuando el upstream agregue una entrada:

1. Traducirla a `dictionary-es/` con el mismo nombre de archivo.
2. Agregarla a `Curriculum-es.md` en la misma posición que en `Curriculum.md`.
3. Correr `python internal/verificar-es.py` y `npm run generate:es`.

Si aparece un término que el glosario no cubre, la pregunta es qué diría un dev hispanohablante en voz alta, no cuál es la traducción correcta. Se agrega a la tabla en el mismo commit que la entrada que lo motivó.

## Limitaciones conocidas

- **La tabla de traducciones prohibidas es un instrumento romo.** Veta una palabra sin mirar el contexto. Ya produjo un falso positivo con `skill` usado en sentido genérico (destreza), donde ni el inglés ni "habilidad" servían y hubo que reformular la frase.
- **La paridad de links exige el mismo orden que el original.** Es deliberado, porque detecta omisiones, pero obliga a reordenar frases que en español sonarían mejor al revés. Pasó tres veces durante la traducción.
- **`README-es.md` está en `.prettierignore`**, igual que su equivalente en inglés. Un archivo generado no debe ser reformateado por otra herramienta, porque queda desincronizado del generador y aparece sucio en cada corrida.
