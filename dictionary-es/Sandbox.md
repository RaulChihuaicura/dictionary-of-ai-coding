---
description: "Un entorno aislado donde corre el agente: contenedor, VM o shell restringido. Limita el radio de daño de sus acciones."
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
---

Un [entorno](./Environment.md) aislado donde corre el [agente](./Agent.md): un contenedor, una VM, un [sistema de archivos](./Filesystem.md) efímero, o un shell con permisos restringidos. Limita el radio de daño de las acciones del agente: aunque corra comandos destructivos o traiga algo malicioso, el daño queda contenido. Es el sustrato de seguridad que hace viable el trabajo [AFK](./AFK.md).

El sandbox y el [modo de permisos](./Permission%20mode.md) resuelven el mismo problema desde extremos opuestos. Los permisos preguntan antes de que una acción corra; un sandbox limita hasta dónde puede llegar esa acción si de verdad corre. Los permisos te necesitan corriendo [en el loop](./Human-in-the-loop.md) (cada prompt es una interrupción), y una sesión que pregunta todo el rato apenas es autónoma. Un sandbox gasta infraestructura en vez de atención: mientras más fuerte el aislamiento, menos preguntas hacen falta.

El aislamiento viene en grados:

| Grado             | Qué es                                                                    | Qué contiene                                      |
| ----------------- | ------------------------------------------------------------------------- | ------------------------------------------------- |
| Shell restringido | Confinamiento a nivel de sistema operativo alrededor de cada comando      | Escrituras fuera del proyecto, acceso a la red    |
| Contenedor        | Sistema de archivos nuevo, sin credenciales montadas, se descarta después | Todo lo que el agente le haga a su propia máquina |
| VM / nube         | Una máquina completamente separada, muchas veces provista por el harness  | Todo, incluyendo escapes a nivel de kernel        |

Lo que ningún sandbox contiene: las acciones que salen de él de forma legítima. Un agente con tus credenciales de git puede hacer push; uno con acceso a la red puede llamar a APIs de producción. Decide qué cruza el límite antes de decidir qué tan grueso hacerlo.

_Uso:_

"Quiero dejarlo corriendo en [bypass-permissions](./Agent%20mode.md) toda la noche, pero todavía no estoy listo para eso."

"Mételo en un sandbox: contenedor nuevo, sin credenciales montadas, sin salida a la red. En el peor caso, destruye su propio sistema de archivos y descartas el contenedor."
