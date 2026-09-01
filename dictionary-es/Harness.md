---
description: "Todo lo que rodea al modelo y lo convierte en agente: tools, system prompt, gestión de la ventana de contexto, permisos y hooks."
---

Todo lo que rodea al [modelo](./Model.md) y lo convierte en un [agente](./Agent.md): [tools](./Tool.md), [system prompt](./System%20prompt.md), [gestión de la ventana de contexto](./Context%20window.md), permisos y hooks. **Claude.ai** y **Claude Code** corren sobre el mismo modelo y se comportan distinto porque sus harnesses difieren.

El modelo por sí solo hace una sola cosa: recibe texto y produce texto. No puede leer un archivo, ejecutar un comando ni recordar el [turno](./Turn.md) anterior. Todo eso lo aporta el harness. Él arma el [contexto](./Context.md) de cada [petición al proveedor del modelo](./Model%20provider%20request.md), ejecuta los [tool calls](./Tool%20call.md) que el modelo pide, le devuelve los [tool results](./Tool%20result.md), guarda el historial de la [sesión](./Session.md), te pide permiso antes de acciones riesgosas y decide cuándo [compactar](./Compaction.md). El bucle del agente (el modelo propone, el harness ejecuta, y vuelta a empezar) lo corre el harness.

Esto importa para diagnosticar. Cuando el comportamiento cambia entre dos productos, o entre ayer y hoy, la variable no suele ser el modelo: es el harness. Un system prompt distinto, otro conjunto de tools, un permiso con el default cambiado o una nueva estrategia de gestión del contexto alteran el comportamiento sin que el modelo haya cambiado en nada. También significa que el harness es donde vive casi toda tu configuración: los archivos [AGENTS.md](./AGENTS.md.md), los ajustes de permisos y los hooks son instrucciones para el harness, no para el modelo.

Ejemplos: Claude Code, Cursor, Codex CLI, y también Claude.ai, que es un harness de chat y no uno de programación.

_Uso:_

"Mismo modelo, ¿por qué Claude Code edita archivos y Claude.ai solo responde preguntas?"

"Harnesses distintos. Claude Code tiene tools de [sistema de archivos](./Filesystem.md), otro system prompt y una capa de permisos. Acá el modelo no es la variable."
