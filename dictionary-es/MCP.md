---
description: "Un protocolo para conectar servidores externos de tools a un harness: así un agente consigue tools más allá de las que trae el harness."
---

**Model Context Protocol.** Un protocolo para conectar servidores externos de tools a un [harness](./Harness.md): así es como un [agente](./Agent.md) consigue [tools](./Tool.md) más allá de las que trae el harness de fábrica. El agente nunca "llama al MCP"; llama a una tool, y da la casualidad de que el harness consiguió esa tool desde un servidor MCP. También expone resources (datos de solo lectura) y prompts (plantillas reusables), pero proveer tools es el uso principal.

El protocolo resuelve un problema de integración. Sin un estándar, cada harness necesitaría su propia integración con Linear, su propia integración con Slack, su propia integración con la base de datos, escritas y mantenidas por separado para cada una. Con MCP, la integración se escribe una sola vez como servidor, y cualquier harness compatible con MCP puede usarla. El harness se conecta al servidor, el servidor anuncia qué tools ofrece, y esas tools quedan disponibles para el agente junto a las que ya traía.

El costo se paga en [contexto](./Context.md). Cada tool que anuncia un servidor llega como una definición (nombre, descripción, schema de parámetros), y el [modelo](./Model.md) solo puede llamar a las tools que conoce. El enfoque ingenuo carga todas las definiciones en la [ventana de contexto](./Context%20window.md) de entrada: instalas unos pocos servidores generosos y una [sesión](./Session.md) arranca con miles de [tokens](./Token.md) de schemas de tools antes de que hayas escrito nada, gastando [attention budget](./Attention%20budget.md) en tools que la tarea nunca va a usar.

Muchos harnesses hoy mitigan esto con búsqueda de tools: en vez de las definiciones completas, el contexto guarda un [puntero de contexto](./Context%20pointer.md) hacia las tools disponibles, y el agente busca una tool por nombre o propósito y carga su definición recién cuando la necesita. Si tu harness no hace esto, el costo de entrada sigue aplicando, y conviene habilitar solo los servidores que el proyecto realmente necesita.

_Uso:_

"El agente necesita leer tickets de Linear."

"Configura el harness para usar el servidor MCP de Linear: expone la API de Linear como tools que el agente puede llamar. Te ahorras escribir wrappers de tools a mano."
