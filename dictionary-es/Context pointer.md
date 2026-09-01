---
description: "Una mención en un documento que apunta a otro, para que el agente lo traiga al contexto solo cuando la tarea lo requiere."
---

Una mención en un documento que apunta a otro, para que el [agente](./Agent.md) pueda traerlo a la [ventana de contexto](./Context%20window.md) solo cuando la tarea lo requiere. Es la unidad con la que se construye la [revelación progresiva](./Progressive%20disclosure.md).

La razón para usar un puntero, en vez de incluir el contenido directo, es el costo. Un puntero es una línea en la ventana de contexto. El documento detrás puede tener miles de [tokens](./Token.md), pero esos tokens no cuestan nada hasta que el agente de verdad sigue el puntero. Si incluyes un runbook de 2.000 tokens directo en [AGENTS.md](./AGENTS.md.md), cada [sesión](./Session.md) lo paga; si lo reemplazas por "proceso de despliegue: ver `internal/deploy.md`", solo las sesiones que despliegan lo cargan. El agente sigue el puntero con un [tool call](./Tool%20call.md) cuando la tarea calza.

Un puntero necesita dos partes para funcionar: una ruta estable, y suficiente descripción para que el agente sepa si vale la pena seguirlo. Una ruta pelada es un puntero que el agente no tiene motivo para seguir; "ver `internal/deploy.md`" sin ninguna pista de qué hay adentro se lo salta una sesión que sí lo necesitaba. Escribe la línea para que calce con cómo se presentan las tareas: "release, deploy o rollback: lee primero `internal/deploy.md`".

Los punteros están en todas partes una vez que los notas: líneas en AGENTS.md, descripciones de [skill](./Skill.md) (el harness carga la descripción; el cuerpo de la skill espera detrás), nombres de archivo en el listado de un directorio, links entre documentos.

Un puntero también puede conectar una [fuente secundaria](./Secondary%20source.md) de vuelta a la [fuente primaria](./Primary%20source.md) de la que salió: el resumen de compactación que nombra la transcripción original, el documento que nombra el archivo fuente que describe. Esto hace recuperable la pérdida de información de la fuente secundaria: cuando el resumen resulta insuficiente, el agente sigue el puntero y lee el original, en vez de trabajar con lo que el resumen alcanzó a conservar.

_Evita:_ "referencia" (demasiado seco, no transmite que seguirlo trae más contexto). "Portal" (demasiado rimbombante).

_Uso:_

"AGENTS.md se está poniendo enorme."

"La mayor parte debería ser punteros de contexto, no contenido. Deja las reglas siempre activas en línea; convierte el runbook de despliegue y la guía de estilo en skills, y deja un puntero de contexto en su lugar."
