---
description: "Todo lo que el modelo ve en cada petición al proveedor. Finita, específica de cada modelo: la única superficie por la que el modelo percibe."
---

Todo lo que el [modelo](./Model.md) ve en cada [petición al proveedor del modelo](./Model%20provider%20request.md). Es finita, específica de cada modelo, y la _única_ superficie por la que el modelo percibe algo.

Es una única secuencia de [tokens](./Token.md): el [system prompt](./System%20prompt.md), la conversación hasta ese punto, y cada [tool result](./Tool%20result.md) que el [harness](./Harness.md) haya vuelto a meter. Si algo está en esa secuencia, el modelo puede usarlo; si no está, el modelo no sabe que existe: ni tu código base, ni el archivo que editaste ayer, ni la instrucción que diste hace tres sesiones. Cualquier cosa fuera de la ventana tiene que traerse, casi siempre con un [tool call](./Tool%20call.md), antes de que pueda afectar algo.

Que sea finita significa que se llena. Cada turno agrega más (tus mensajes, las respuestas del modelo, los tool results), y una [sesión](./Session.md) larga termina topando el límite, lo que obliga a [compactar](./Compaction.md) o a [limpiar](./Clearing.md). También significa que todo lo que hay en la ventana compite entre sí: cada token que cargas es uno menos disponible para el resto, y el contenido que no necesitabas igual ocupa el [attention budget](./Attention%20budget.md) del modelo. La postura práctica es tratar la ventana como un presupuesto: cargar lo que la tarea necesita y dejar el resto afuera.

_Evita:_ "memoria". La ventana de contexto es estado de trabajo y no persiste entre sesiones. La [memoria](./Memory%20system.md) es un concepto aparte que se monta encima.

_Uso:_

"¿Puedo simplemente pegar todo el monorepo en el prompt?"

"La ventana de contexto tiene 200k tokens: eso es como un quinto del repo. Elige los archivos que la tarea toca y deja el resto detrás de un tool call."
