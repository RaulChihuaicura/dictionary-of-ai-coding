---
description: "Un preset que empaqueta un modo de permisos con instrucciones de comportamiento inyectadas en el system prompt. Cambia en plena sesión."
aliases:
  - plan mode
  - accept-edits
  - bypass permissions
  - YOLO mode
---

Un preset que define cómo opera el [agente](./Agent.md) en tiempo de ejecución: empaqueta un [modo de permisos](./Permission%20mode.md) con instrucciones de comportamiento inyectadas en el [system prompt](./System%20prompt.md). Ejemplos: un modo por defecto que pregunta en los llamados riesgosos, un **plan mode** que bloquea las edits y encamina al agente hacia la investigación, un modo **accept-edits** que auto-aprueba las edits, un modo **bypass permissions** (coloquialmente **YOLO mode**) que auto-aprueba todo. Puede cambiar [en plena sesión](./Session.md).

El empaquetado es lo que distingue a un modo de un simple ajuste de permisos. Un modo de permisos es solo una compuerta: decide qué [tool calls](./Tool%20call.md) pasan. Una compuerta sola produce un agente que quiere editar pero no puede: propone la escritura, queda bloqueado, y prueba otro camino. Las instrucciones inyectadas eliminan las ganas: el plan mode no solo bloquea las edits, le dice al agente que está en una fase de planificación, así que lee, pregunta y propone en vez de forcejear contra la compuerta. Compuerta e instrucción apuntan en la misma dirección.

En la práctica, cambias de modo a medida que cambia tu confianza a lo largo de una tarea. La misma tarea puede pasar por varios modos: plan mode mientras el enfoque todavía se está definiendo, el modo por defecto que pregunta para las primeras edits delicadas, accept-edits una vez que el agente demostró que entiende el cambio, bypass para una corrida [AFK](./AFK.md) dentro de un [sandbox](./Sandbox.md). Cambiar de modo no te cuesta nada: la conversación sigue exactamente donde estaba, con nuevos permisos y nuevas instrucciones. Si te encuentras aprobando cada prompt sin leerlo, el modo está más apretado que tu confianza real; si sigues rechazando edits, está más suelto de lo que debería.

_Términos por proveedor:_ Claude Code los llama "modos de permisos", Codex los llama "modos de aprobación"; los dos son anteriores al empaquetado de comportamiento.

_Uso:_

"Sigue editando archivos cuando solo quiero un plan."

"Cambia a plan mode: va a bloquear las escrituras y quedarse en investigación."

"¿Y para la corrida AFK de después?"

"Bypass mode, pero solo dentro del sandbox."
