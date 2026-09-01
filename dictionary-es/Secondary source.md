---
description: "Un relato de una fuente primaria, un paso más allá: resúmenes, documentación, resúmenes de compactación. Barata y con pérdida por diseño."
---

Un relato de una [fuente primaria](./Primary%20source.md), un paso más allá: documentación que describe código, un resumen que describe una transcripción, un informe que describe resultados de búsqueda. Más barata de cargar en la [ventana de contexto](./Context%20window.md) que la fuente que describe, y con pérdida de información por diseño: quien la escribió decidió qué importaba, y lo que descartó queda invisible para quien solo tiene el resumen.

Buena parte de la ingeniería de [contexto](./Context.md) consiste en fabricar fuentes secundarias. La [compactación](./Compaction.md) convierte el historial de la [sesión](./Session.md) en un resumen que siembra la siguiente sesión. Un [subagente](./Subagent.md) gasta su propio contexto en una búsqueda ruidosa y devuelve un informe corto. Un [artefacto de handoff](./Handoff%20artifact.md) condensa las decisiones de una sesión en un documento que la siguiente sesión lee. Los [sistemas de memoria](./Memory%20system.md) destilan en notas lo que una sesión aprendió. Cada uno hace el mismo intercambio: fidelidad por espacio libre.

Las fuentes secundarias fallan de dos maneras. Pierden información: el resumen de compactación que perdió la decisión de esquema, el informe que no mencionó el caso límite. Y se desactualizan: la fuente primaria cambia y el relato no la sigue, así que la documentación describe la arquitectura del trimestre pasado con la confianza de este trimestre. Cuando un [agente](./Agent.md) actúa sobre una fuente secundaria que falló de cualquiera de las dos formas, trabaja con seguridad a partir de información equivocada; el arreglo es mandarlo de vuelta a la fuente primaria.

Ninguna de las dos fallas convierte a las fuentes secundarias en un error. La ventana de contexto es finita, y las fuentes primarias son caras; sin resúmenes, informes y documentos de handoff, nada grande cabe. El truco está en saber qué detalles pueden sobrevivir a la pérdida, y en verificar contra la fuente primaria cuando alguno no puede. Una fuente secundaria bien hecha lleva un [puntero de contexto](./Context%20pointer.md) de vuelta a su original: el resumen que nombra la transcripción de donde salió, la documentación que nombra el archivo que describe, así que cuando el relato no basta, el lector puede seguir el puntero en vez de trabajar con la pérdida.

_Uso:_

"El documento de handoff dice que la autenticación está lista, pero la sesión nueva sigue encontrando el refresco de tokens roto."

"El documento es una fuente secundaria: la sesión anterior escribió lo que creía, no lo que es cierto. Haz que la sesión nueva corra las pruebas de autenticación y confíe en la fuente primaria."
