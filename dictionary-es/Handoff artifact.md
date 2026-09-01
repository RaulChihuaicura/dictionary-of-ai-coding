---
description: "Un documento que sirve de mecanismo de traslado para un handoff: lo escribe una sesión para que otra lo lea."
---

Un documento que sirve de mecanismo de traslado para un [handoff](./Handoff.md): lo escribe una sesión en el [entorno](./Environment.md) para que otra [sesión](./Session.md) lo lea. Los [specs](./Spec.md), los [tickets](./Ticket.md) y los documentos de plan son todos artefactos de handoff.

La razón para escribir uno: el [modelo](./Model.md) es [sin estado](./Stateless.md), así que nada de una sesión sobrevive a [limpiarla](./Clearing.md). Decisiones, restricciones, planes a medio terminar: todo desaparece junto con el [contexto](./Context.md) que los contenía. El entorno persiste. Escribir el estado importante en un archivo lo mueve a un lugar del que la siguiente sesión puede volver a leerlo.

El artefacto es una [fuente secundaria](./Secondary%20source.md): un relato del trabajo de la sesión, no el trabajo mismo. Eso es lo que lo hace lo bastante chico como para poner al día a una sesión nueva, y también lo que puede llevarla por mal camino: registra lo que la sesión que lo escribió creía, y lo que dejó fuera o entendió mal queda invisible para quien lo lee. Donde una afirmación importe, la siguiente sesión debería verificarla contra la [fuente primaria](./Primary%20source.md) (el código, las pruebas) en vez de heredarla.

Un buen artefacto se escribe para que lo lea una sesión con contexto cero. Rutas de archivo concretas en vez de "el archivo que comentamos". Qué se decidió y por qué, para que la siguiente sesión no vuelva a discutirlo. Qué está hecho y qué falta. Ayuda decirle a la sesión que lo escribe hacia dónde va el artefacto: "escribe un documento de handoff para una sesión nueva que no sabe nada de este trabajo".

El mecanismo de traslado alternativo es la [compactación](./Compaction.md), que resume en memoria. El artefacto tiene dos ventajas: vive en disco, donde puedes leerlo y corregirlo antes de que algo dependa de él, y se puede reutilizar (el mismo spec puede poner al día a cinco sesiones en paralelo).

_Uso:_

"¿Cómo divido esto entre el [agente](./Agent.md) que planifica y el que implementa?"

"Que el que planifica escriba un artefacto de handoff: rutas de archivo, decisiones, restricciones. La sesión del que implementa arranca con un puntero al artefacto y lo usa como su hoja de ruta."
