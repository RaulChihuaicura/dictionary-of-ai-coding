---
description: "Patrón en que el usuario inicia una sesión y deja al agente corriendo sin supervisión (lejos del teclado)."
aliases:
  - away from keyboard
  - AFK (away from keyboard)
---

Lejos del teclado. Patrón de trabajo en que el usuario inicia una [sesión](./Session.md) y deja que el [agente](./Agent.md) corra sin supervisión. Es el multiplicador de throughput del [AI coding](./AI.md): muchas sesiones AFK pueden correr en paralelo mientras duermes, comes o trabajas en otra cosa. Para ser seguro, suele requerir un [modo de permisos](./Permission%20mode.md) permisivo más [sandboxing](./Sandbox.md).

Cuando no estás ahí, el agente maneja la ambigüedad de otra forma. Mientras miras, una decisión ambigua aparece como pregunta y tú la respondes; una vez que te fuiste, el agente elige un default y sigue adelante, y cada decisión posterior se construye sobre esa suposición. La falla característica es volver y encontrar horas de trabajo terminado y confiado, construido sobre una decisión equivocada tomada en los primeros diez minutos. El trabajo no es descuidado: es coherente, solo que coherente sobre lo que no correspondía.

Como no puedes dar input durante la corrida, dalo antes y después. Antes: resuelve la ambigüedad de entrada (una sesión de [grilling](./Grilling.md), una [spec](./Spec.md) escrita) para dejarle al agente menos vacíos que llenar solo. Durante: las [verificaciones automatizadas](./Automated%20check.md) y la [revisión automatizada](./Automated%20review.md) reemplazan la atención que no le estás dando, fallando rápido en lo que se puede detectar de forma mecánica. Después: la corrida termina en algo revisable, un PR, no cambios ya mergeados. AFK no elimina la [revisión humana](./Human%20review.md): la posterga entera hasta el final, y por eso lo que llega al final tiene que valer la pena revisarlo. Esto también explica por qué el [AX](./AX.md) importa más en las corridas AFK: sin nadie mirando, el entorno es el único apoyo que tiene el agente.

_Evita:_ "background agent" (agente en segundo plano): centra la máquina ("corriendo en segundo plano") en vez del patrón humano ("el usuario se fue"). AFK nombra el hecho que importa: que el usuario no está mirando.

_Uso:_

"Estoy corriendo esto AFK: tres agentes en sandbox sobre el refactor, reviso los PR en la mañana."

"¿[Bypass permissions](./Agent%20mode.md)?"

"Sí, [sistema de archivos](./Filesystem.md) de solo lectura, sin red."
