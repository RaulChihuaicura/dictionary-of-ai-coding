---
description: "Lo que el harness le muestra al usuario antes de ejecutar un tool call no pre-aprobado. El mecanismo para meter a un humano en el loop."
---

Lo que el [harness](./Harness.md) le muestra al usuario antes de ejecutar un [tool call](./Tool%20call.md) que no está pre-aprobado. El [modelo](./Model.md) produce un tool call; en vez de correrlo de inmediato, el harness se detiene y pregunta. Si apruebas, corre; si rechazas, el harness le informa el rechazo al modelo como un [tool result](./Tool%20result.md). Es el mecanismo con el que un harness mete a un humano en el [loop](./Human-in-the-loop.md) para acciones riesgosas o sensibles.

El ciclo de vida de una solicitud de permiso:

| Paso | Quién   | Qué pasa                                                                                       |
| ---- | ------- | ---------------------------------------------------------------------------------------------- |
| 1    | Modelo  | Produce un tool call                                                                           |
| 2    | Harness | Lo revisa contra el [modo de permisos](./Permission%20mode.md) y cualquier aprobación guardada |
| 3    | Harness | Si está pre-aprobado: lo ejecuta de inmediato. Si no: se detiene y muestra la solicitud        |
| 4    | Usuario | Aprueba una vez, aprueba para el resto de la [sesión](./Session.md), o rechaza                 |
| 5    | Harness | Ejecuta el llamado, o devuelve el rechazo como un tool result                                  |

Rechazar una solicitud dirige al agente. El modelo lee el rechazo como cualquier otro tool result y reacciona: prueba otro enfoque, o pregunta qué prefieres. La mayoría de los harnesses te dejan agregar un mensaje al rechazo, lo que convierte la solicitud en un punto de dirección: "así no, usa el script de migración" cae justo cuando el modelo está decidiendo qué hacer después.

El costo es que cada solicitud es una espera sincrónica sobre ti. El [agente](./Agent.md) queda bloqueado hasta que respondes, lo cual está bien mientras estás mirando y es un problema cuando no lo estás: un agente que dispara solicitudes todo el rato no se puede dejar trabajando [AFK](./AFK.md). El modo de permisos es el dial: qué llamados corren libres, cuáles preguntan primero, idealmente con un [sandbox](./Sandbox.md) que haga seguro ampliar el conjunto libre.

_Uso:_

"Lleva diez minutos bloqueado en una solicitud de permiso, y yo estaba en una reunión."

"Ese es el costo del human-in-the-loop. Pre-aprueba las [tools](./Tool.md) seguras para que la solicitud solo salte en los llamados de verdad riesgosos."
