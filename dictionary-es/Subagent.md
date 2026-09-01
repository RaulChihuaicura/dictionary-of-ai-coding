---
description: "Agente que otro agente crea con un tool call. Corre en su propia sesión y devuelve un solo tool result; no puede crear subagentes."
---

Un [agente](./Agent.md) que otro agente crea mediante un [tool call](./Tool%20call.md). Corre en su propia [sesión](./Session.md) con su propia [ventana de contexto](./Context%20window.md), y devuelve un solo [tool result](./Tool%20result.md) al agente padre. Es distinto de un [handoff](./Handoff.md): el padre específicamente espera un retorno, mientras que un handoff no tiene vuelta. **No puede crear más subagentes**: el árbol tiene un solo nivel de profundidad. Los subagentes existen para aislar [contexto](./Context.md), no para componer jerarquías.

La idea es mantener el trabajo ruidoso fuera del contexto del padre. Una búsqueda amplia o una expedición larga de lectura de archivos produce páginas de tool results, la mayoría relevantes solo hasta encontrar la respuesta. Si corre dentro del padre, todo eso se queda en el contexto del padre por el resto de la sesión. Si corre dentro de un subagente, el ruido llena una ventana desechable en su lugar, y solo el reporte final llega al contexto del padre. Ese reporte es una [fuente secundaria](./Secondary%20source.md): el padre recibe el relato del subagente sobre lo que encontró, no los resultados en bruto, así que cualquier cosa que el reporte deje fuera queda invisible para el padre.

Los subagentes además corren en paralelo: un padre puede lanzar varios a la vez sobre piezas de trabajo independientes.

_Uso:_

"Los resultados del grep me están reventando el contexto."

"Lanza un subagente para la búsqueda: va a quemar su propia ventana de contexto con el ruido y te va a reportar de vuelta los dos paths que en realidad necesitas."
