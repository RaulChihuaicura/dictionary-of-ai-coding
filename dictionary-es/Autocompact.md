---
description: "Compactación que el harness dispara solo cuando la ventana de contexto está por llenarse."
---

[Compactación](./Compaction.md) que dispara automáticamente el [harness](./Harness.md) cuando la [ventana de contexto](./Context%20window.md) está por llenarse.

El harness vigila qué tan llena está la ventana de contexto. Cuando cruza un umbral (a menudo cerca del 80%), se detiene, le pide al [modelo](./Model.md) que resuma la [sesión](./Session.md) hasta ese punto, y siembra una sesión nueva con el resumen. El trabajo sigue después como si nada hubiera pasado.

Salvo que sí pasó algo. La compactación tiene pérdida, y la autocompactación tiene pérdida en un momento que tú no elegiste. Una compactación manual ocurre en un límite de fase, cuando puedes decirle al modelo qué conservar. La autocompactación se dispara a mitad de tarea, apenas se cruza el umbral, posiblemente a mitad de un refactor, con el resumen decidiendo por su cuenta cuáles de tus decisiones valía la pena conservar. El síntoma clásico: el [agente](./Agent.md) sigue adelante con seguridad, pero olvidó en silencio una restricción que estableciste hace una hora, y recién lo notas cuando su trabajo empieza a contradecirla.

La defensa es no dejar que se dispare. Vigila el indicador de contexto y compacta a mano en un límite natural, o escribe las decisiones en un documento de plan o en un [artefacto de handoff](./Handoff%20artifact.md) en disco, donde ningún resumen pueda perderlas. La mayoría de los harnesses también te dejan ajustar el margen (mover el umbral antes o después, o apagar la autocompactación del todo) para que calibres cuánto espacio libre te queda antes de que se dispare.

_Uso:_

"Parece que no se acuerda de lo que decidimos sobre el esquema hace rato."

"Se disparó la autocompactación entre [turnos](./Turn.md); las decisiones de antes se resumieron y seguro se perdió algo. Vuelve a cargar el documento del plan, o compacta a mano la próxima vez para controlar qué se conserva."
