---
description: "La parte del modo agente que controla permisos: qué tool calls disparan una solicitud de permiso y cuáles corren solas."
---

La parte del [modo agente](./Agent%20mode.md) que controla los permisos: qué [tool calls](./Tool%20call.md) disparan una [solicitud de permiso](./Permission%20request.md) y cuáles corren automáticamente. Es el propósito original de los sistemas de modos, antes de que los [harnesses](./Harness.md) empezaran a empaquetar encima instrucciones de comportamiento.

Los harnesses traen una escalera de estos modos:

| Modo                | Lecturas   | Escrituras y shell                | Uso típico                                          |
| ------------------- | ---------- | --------------------------------- | --------------------------------------------------- |
| Solo lectura / plan | Automático | Bloqueado                         | Investigar, planificar, revisar                     |
| Por defecto         | Automático | Pregunta                          | Trabajo supervisado del día a día                   |
| Auto-edit           | Automático | Edits automáticas, shell pregunta | Repos de confianza, cambios mecánicos               |
| "Yolo" / full-auto  | Automático | Automático                        | [Sandboxes](./Sandbox.md), corridas [AFK](./AFK.md) |

Elegir un peldaño es un trade-off entre seguridad e interrupción, y los dos modos de falla se sienten. Demasiado apretado, y te conviertes en el cuello de botella: el [agente](./Agent.md) se detiene cada pocos segundos por lecturas inofensivas, apruebas en piloto automático, y las aprobaciones dejan de significar algo: sellar sin mirar es lo peor de los dos mundos, toda la interrupción sin nada de la protección. Demasiado suelto, y el agente edita archivos y corre comandos que hubieras querido ver antes.

El extremo suelto se defiende mejor dentro de un sandbox, donde el radio de daño de un mal llamado a una [tool](./Tool.md) queda contenido. Fuera de uno, la mayoría se acomoda en auto-aprobar lecturas y mantener el [human-in-the-loop](./Human-in-the-loop.md) para todo lo irreversible.

_Uso:_

"Se detuvo en cada grep: mató por completo la corrida AFK."

"Afloja el modo de permisos para las tools de solo lectura, deja que siga preguntando en escrituras y shell. La mayoría de las solicitudes de permiso en una [sesión](./Session.md) de investigación son ruido."
