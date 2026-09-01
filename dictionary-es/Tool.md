---
description: "Una función que el harness expone para que el agente la llame: Read, Write, Bash, Search. Así percibe y actúa sobre el entorno."
---

Una función que el [harness](./Harness.md) expone para que el [agente](./Agent.md) la llame: Read, Write, Bash, Search. Las tools son la forma en que un agente percibe y actúa sobre el [entorno](./Environment.md): no puede ver el entorno salvo a través de [tool results](./Tool%20result.md), ni cambiarlo salvo a través de [tool calls](./Tool%20call.md). Cada tool call cuesta una [petición al proveedor del modelo](./Model%20provider%20request.md) extra, porque el resultado tiene que volver al modelo antes de que decida qué hacer después.

Tools con las que viene casi cualquier agente de código:

| Tool   | Qué hace                                                              |
| ------ | --------------------------------------------------------------------- |
| Read   | Devuelve el contenido de un archivo como tool result                  |
| Write  | Crea o edita un archivo en el [sistema de archivos](./Filesystem.md)  |
| Bash   | Corre un comando de shell y devuelve su salida                        |
| Search | Encuentra archivos o texto que calzan con un patrón en el código base |

Una tool queda definida por tres cosas: un nombre, una descripción de lo que hace y un schema para sus parámetros. El harness manda estas definiciones al [modelo](./Model.md) en cada petición, y el modelo elige una tool de la misma forma en que produce todo lo demás: escribiendo [tokens](./Token.md), en este caso un llamado estructurado con argumentos. El modelo nunca ejecuta nada él mismo; el harness lee el llamado, corre la función y devuelve el resultado.

La lista de tools define qué puede hacer el agente. Un modelo capaz con un set de tools angosto es un agente angosto: va a encauzar todo por lo que tenga a mano, que es por lo que los agentes se apoyan tanto en Bash: un shell es una sola tool que alcanza casi todo el sistema. Para darle a un agente una capacidad de forma limpia, se le agrega una tool; el [MCP](./MCP.md) es el estándar para conectar tools desde fuera del harness.

Las definiciones de tools ocupan [contexto](./Context.md) en cada petición, así que un set de tools grande tiene un costo fijo antes de que se llame a ninguna, y tener muchas tools descritas de forma parecida hace que al modelo le cueste más elegir la correcta.

_Uso:_

"¿Puede el agente consultar staging directamente?"

"Agrega una tool de `psql` al harness, acotada a solo lectura en staging. Sin una tool para eso, el agente queda ciego a todo lo que esté fuera del sistema de archivos."
