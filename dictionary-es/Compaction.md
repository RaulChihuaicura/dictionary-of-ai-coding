---
description: "Un handoff hecho en memoria: se resume el historial de la sesión anterior y ese resumen siembra una sesión nueva. Hay pérdida."
---

Un [handoff](./Handoff.md) hecho en memoria: se resume el historial de la [sesión](./Session.md) anterior, y ese resumen siembra una sesión nueva. Con pérdida por diseño: la transcripción es una [fuente primaria](./Primary%20source.md), el resumen una [fuente secundaria](./Secondary%20source.md); se cambia detalle por espacio libre. Se activa a mano, cuando lo pide el usuario, o de forma automática vía [autocompactación](./Autocompact.md).

El mecanismo: la [ventana de contexto](./Context%20window.md) es finita, y una sesión larga la llena: cada [tool result](./Tool%20result.md), cada archivo leído, cada intento fallido queda en el historial. Cuando se pone pesada, el [harness](./Harness.md) le pide al [modelo](./Model.md) que resuma la sesión, descarta el historial original, y siembra una sesión nueva con el resumen. Lo que no entró en el resumen desaparece del contexto. Algunos harnesses suavizan esto guardando la transcripción vieja en disco y dejando un [puntero de contexto](./Context%20pointer.md) hacia ella dentro del resumen: la fuente secundaria enlaza de vuelta a su fuente primaria, así que un detalle que el resumen perdió se puede recuperar releyendo el original.

El resumen lo escribe el modelo, así que se le puede dar instrucciones. "Conserva las decisiones de esquema" hace que el artefacto generado sea más cuidadoso. El momento también importa: compacta en un límite de fase, después de cerrar el plan, no a mitad de tarea.

Compárala con la [limpieza](./Clearing.md), que descarta todo y arranca en frío: la compactación intenta trasladar lo esencial, la limpieza apuesta a que eso ya está escrito en otra parte mejor.

_Uso:_

"El [contexto](./Context.md) se está poniendo pesado y todavía me falta correr las pruebas."

"Compacta antes de seguir: escribe en el prompt de resumen lo que tiene que sobrevivir, para que la sesión nueva conserve las decisiones de esquema y suelte la exploración."
