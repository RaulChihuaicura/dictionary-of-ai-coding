# Glosario ES

Contrato terminológico de la edición en español (`dictionary-es/`). Se acuerda **antes** de traducir y manda sobre el criterio de cada entrada: si una traducción contradice esta tabla, se corrige la traducción, no la tabla.

## Reglas generales

1. **Los títulos y los nombres de archivo se quedan en inglés, siempre.** Los 69 archivos se enlazan entre sí con `./Model.md` y el generador los convierte en anclas `#model`. Traducir un nombre de archivo rompe la red de referencias cruzadas.
2. **Registro: tuteo neutro.** Español sin regionalismos, hablando de tú, igual que el original.
3. **La traducción no es literal.** Se conserva el sentido, el tecnicismo y el registro llano del original (sin superlativos ni dramatismo, según el `CLAUDE.md` del repo). Se permite reordenar frases y partir oraciones largas cuando el español lo pida.
4. **`description` del frontmatter: máximo 140 caracteres.** El español corre entre 15% y 25% más largo que el inglés, así que estas líneas se **reescriben para que quepan**, no se traducen. Es el único lugar donde la restricción manda sobre la fidelidad.
5. **El `description` va SIEMPRE entre comillas dobles,** aunque no parezca necesitarlas. Un valor YAML sin comillas que contenga `: ` (dos puntos y espacio) se interpreta como un mapa anidado y rompe el frontmatter. El español cae en esto mucho más seguido que el inglés, porque los dos puntos son el reemplazo natural de la raya del original (regla 6). Si el texto necesita comillas dobles por dentro, se usan comillas simples afuera.
6. **Las rayas (—) del original se reemplazan** por dos puntos, coma o paréntesis, según lo que pida la frase. La tipografía española usa la raya mucho menos que la inglesa.
7. **Los anglicismos van sin cursiva y en redonda,** igual que en el original. Plural con `-s` (los tokens, las tools).

## Cubeta 1: se traducen

| Inglés                            | Español                              |
| --------------------------------- | ------------------------------------ |
| Model                             | modelo                               |
| Agent                             | agente                               |
| Agent mode                        | modo agente                          |
| Session                           | sesión                               |
| Context                           | contexto                             |
| Context window                    | ventana de contexto                  |
| Context pointer                   | puntero de contexto                  |
| Turn                              | turno                                |
| AI                                | IA                                   |
| Parameters                        | parámetros                           |
| Training                          | entrenamiento                        |
| Inference                         | inferencia                           |
| Environment                       | entorno                              |
| Filesystem                        | sistema de archivos                  |
| Stateless / Stateful              | sin estado / con estado              |
| Hallucination                     | alucinación                          |
| Model provider                    | proveedor del modelo                 |
| Model provider request            | petición al proveedor del modelo     |
| Next-token prediction             | predicción del siguiente token       |
| Input tokens / Output tokens      | tokens de entrada / tokens de salida |
| Cache tokens                      | tokens de caché                      |
| Prefix cache                      | caché de prefijo                     |
| Human review                      | revisión humana                      |
| Automated check                   | verificación automatizada            |
| Automated review                  | revisión automatizada                |
| Memory system                     | sistema de memoria                   |
| Knowledge cutoff                  | fecha de corte del conocimiento      |
| Parametric knowledge              | conocimiento paramétrico             |
| Contextual knowledge              | conocimiento contextual              |
| Primary source / Secondary source | fuente primaria / fuente secundaria  |
| Permission mode                   | modo de permisos                     |
| Permission request                | solicitud de permiso                 |
| Subagent                          | subagente                            |
| Prototyping                       | prototipado                          |
| Design concept                    | concepto de diseño                   |
| Non-determinism                   | no determinismo                      |
| Progressive disclosure            | revelación progresiva                |
| Effort                            | esfuerzo                             |
| Clearing                          | limpieza / limpiar el contexto       |
| Compaction                        | compactación                         |
| Autocompact                       | autocompactación                     |
| Sycophancy                        | adulación                            |

**Sobre `Clearing`, `Compaction` y `Autocompact`:** se traduce el concepto porque el diccionario define el concepto, no el comando. Cuando el texto se refiera al comando concreto se escribe literal y sin traducir: `/clear`, `/compact`.

## Cubeta 2: se quedan en inglés

| Término                | Género y plural                   |
| ---------------------- | --------------------------------- |
| harness                | el harness / los harness          |
| token                  | el token / los tokens             |
| prompt                 | el prompt / los prompts           |
| system prompt          | el system prompt                  |
| hook                   | el hook / los hooks               |
| sandbox                | el sandbox / los sandboxes        |
| tool                   | la tool / las tools               |
| tool call              | el tool call / los tool calls     |
| tool result            | el tool result / los tool results |
| handoff                | el handoff / los handoffs         |
| handoff artifact       | el artefacto de handoff           |
| attention budget       | el attention budget               |
| attention degradation  | la attention degradation          |
| attention relationship | la attention relationship         |
| smart zone / dumb zone | la smart zone / la dumb zone      |
| grilling               | el grilling                       |
| vibe coding            | el vibe coding                    |
| skill                  | la skill / las skills             |
| spec                   | la spec / las specs               |
| ticket                 | el ticket / los tickets           |
| human-in-the-loop      | el human-in-the-loop              |
| MCP                    | el MCP                            |
| AGENTS.md              | AGENTS.md                         |
| AFK                    | AFK                               |
| AX / DX                | el AX / el DX                     |

**Criterio de la cubeta:** ninguno tiene equivalente que alguien use de verdad en español, o es sigla, o es nombre propio de una función de producto.

**Sobre `tool`:** se deja en inglés aunque "herramienta" sea correcto, porque los devs hispanohablantes dicen "las tools" y "el tool call" al hablar de LLMs, y porque calza con el campo `tools` de las APIs.

**Sobre la familia `attention`:** las tres van juntas en inglés. `attention budget` es un término acuñado sin uso establecido, y sus dos vecinas se cruzan con él dentro de las mismas frases; traducir solo una parte produce párrafos que suenan a dos traductores distintos.

## Traducciones prohibidas

Se verifican con grep sobre `dictionary-es/`. Cualquier aparición es un error de traducción, no una variante aceptable.

| Nunca escribir                                     | Escribir              |
| -------------------------------------------------- | --------------------- |
| ficha, componente léxico                           | token                 |
| arnés, armazón                                     | harness               |
| herramienta, llamada a herramienta                 | tool, tool call       |
| traspaso, entrega                                  | handoff               |
| presupuesto de atención                            | attention budget      |
| zona lista, zona tonta                             | smart zone, dumb zone |
| interrogatorio, asado                              | grilling              |
| habilidad                                          | skill                 |
| especificación                                     | spec                  |
| boleta, tiquete                                    | ticket                |
| indicación, instrucción de sistema                 | prompt, system prompt |
| gancho, enganche                                   | hook                  |
| caja de arena                                      | sandbox               |
| codificación por vibra, programación por intuición | vibe coding           |

## Resueltos durante la traducción

Términos que no estaban en las cubetas y hubo que decidir al traducir. Se incorporan acá para que la próxima entrada que los use no vuelva a decidirlos.

| Término            | Decisión                                     | Dónde apareció   |
| ------------------ | -------------------------------------------- | ---------------- |
| trade-off          | se queda en inglés                           | Effort           |
| call sites         | se queda en inglés                           | Context          |
| briefing           | se queda en inglés                           | AGENTS.md        |
| asset              | **materiales** (no "artefacto")              | Design concept   |
| brief (sustantivo) | **hoja de ruta**                             | Handoff artifact |
| AI coding          | se queda en inglés cuando nombra la práctica | AI, AFK, DX      |

**Sobre `asset` contra `artifact`:** el original distingue los dos, `asset` como cualquier material de trabajo (la conversación, el código, los artefactos de handoff) y `artifact` como el sustantivo dentro de "handoff artifact". Traducir ambos como "artefacto" colapsa una distinción que el propio texto sostiene.

**Sobre `skill` en sentido genérico:** la tabla de prohibidas veta "habilidad" para proteger el término de producto, pero el original a veces usa "skill" como destreza corriente ("the skill is knowing which details survive"). Ahí no corresponde ni "skill" ni "habilidad": se reformula la frase ("el truco está en saber"). La prohibición es un instrumento romo y este es su falso positivo conocido.

## Cómo se resuelve una duda nueva

Si al traducir aparece un término que no está en ninguna cubeta, la pregunta es **qué diría un dev hispanohablante en voz alta**, no cuál es la traducción correcta. Si la respuesta es el término en inglés, va a la cubeta 2 y se agrega a esta tabla en el mismo commit que la entrada que lo motivó. El glosario crece con la traducción, no después.
