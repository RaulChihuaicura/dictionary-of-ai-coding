---
description: "Hechos que el agente puede leer directo del contexto ahora mismo. Contraparte del conocimiento paramétrico."
---

Hechos que el [agente](./Agent.md) puede leer directo del [contexto](./Context.md) ahora mismo: la tarea del usuario, archivos que el agente ya leyó, [tool results](./Tool%20result.md), el contenido de [AGENTS.md](./AGENTS.md.md) cargado al inicio de la [sesión](./Session.md). Contraparte del [conocimiento paramétrico](./Parametric%20knowledge.md): lo paramétrico se _recuerda_ desde los parámetros, lo contextual se _lee_ desde la [ventana](./Context%20window.md). Las [alucinaciones](./Hallucination.md) son mucho menos frecuentes cuando el agente trabaja con conocimiento contextual: la respuesta está justo delante de él, no rescatada de una memoria borrosa.

De los dos tipos de conocimiento, solo el contextual está bajo tu control. Los parámetros están congelados, así que la única forma de darle al [modelo](./Model.md) un conocimiento que le falta (un SDK interno, una librería lanzada después de la [fecha de corte del conocimiento](./Knowledge%20cutoff.md), una decisión tomada ayer) es ponerlo en el contexto. Buena parte del trabajo práctico de [programar con IA](./AI.md) se reduce a esto: poner los hechos correctos delante del modelo justo cuando los necesita.

Cuando el conocimiento contextual y el paramétrico entran en conflicto, suele ganar el contextual. Pega la documentación actual de la API y el modelo la sigue en vez de su memoria desactualizada de la API vieja, aunque la versión antigua igual puede filtrarse, sobre todo bien entrada una sesión larga. Si el agente insiste en volver a un patrón obsoleto a pesar de tener la documentación cargada, eso es el conocimiento paramétrico filtrándose por encima del contextual; ayuda repetir la corrección o acercarla al punto donde se está trabajando.

A diferencia del conocimiento paramétrico, el contextual cuesta algo usarlo. Todo lo que se carga en la ventana gasta [tokens](./Token.md) y compite por el [attention budget](./Attention%20budget.md) del modelo, así que cargar más no es automáticamente mejor: el objetivo es tener los hechos relevantes en la ventana, no todos los hechos.

_Recurre a este término_ solo cuando lo contrastes con lo paramétrico; en cualquier otro caso di simplemente **contexto**.

_Evita:_ "memoria de trabajo". El conocimiento contextual es lo que está en la ventana _ahora_; un [sistema de memoria](./Memory%20system.md) es lo que trae contenido de otras sesiones hasta esa ventana. Son escalas distintas, no las mezcles.

_Uso:_

"¿Por qué acierta la API cuando le pego la documentación y la fabrica cuando no?"

"Con la documentación adentro, es conocimiento contextual: está leyendo directo de la página. Sin ella, es paramétrico y los endpoints poco frecuentes se desdibujan."
