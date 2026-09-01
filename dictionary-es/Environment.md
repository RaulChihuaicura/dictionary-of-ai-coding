---
description: "El mundo sobre el que actúa el agente: todo lo que está fuera del harness y que percibe con tool results y cambia con tool calls."
---

El mundo sobre el que actúa el [agente](./Agent.md): todo lo que queda fuera del [harness](./Harness.md) y que el agente percibe mediante [tool results](./Tool%20result.md) y cambia mediante [tool calls](./Tool%20call.md). El harness _corre_ al agente; el entorno es donde el agente _trabaja_. Un archivo como [`AGENTS.md`](./AGENTS.md.md) vive en el entorno; el harness es quien lo carga en la [ventana de contexto](./Context%20window.md). Un [sistema de archivos](./Filesystem.md) es el tipo de entorno más común, pero no el único (una base de datos, una API remota o una sesión de navegador también pueden ser entornos).

El agente solo ve el entorno cuando mira. Todo lo que sabe de él le llegó a través de un tool result, así que su imagen es una colección de instantáneas, cada una correcta en el momento en que se tomó. Si un archivo cambia después de que el agente lo leyó (lo editas a mano, un paso de build lo regenera), el agente sigue razonando sobre la copia vieja hasta que algo lo empuja a releerlo. Un agente que describe con seguridad un archivo que ya no es así suele ser esto: el entorno se movió, la instantánea no.

El entorno es además la capa que persiste: la única que siempre tiene [estado](./Stateful.md). El contexto de una [sesión](./Session.md) desaparece cuando la sesión termina, pero los archivos escritos en el entorno quedan ahí para que la próxima sesión los lea, que es justo de lo que dependen los [sistemas de memoria](./Memory%20system.md), los [artefactos de handoff](./Handoff%20artifact.md) y `AGENTS.md`. Todo lo que el agente deba seguir sabiendo mañana tiene que terminar en el entorno.

Tú decides qué tan grande es el entorno. Un [sandbox](./Sandbox.md) lo achica, limitando lo que el agente puede alcanzar; agregar una [tool](./Tool.md) lo extiende, poniendo a su alcance una base de datos o una API. Lo que queda dentro del límite es lo que el agente puede percibir y cambiar; todo lo que queda afuera no existe para el agente. Qué tan bien está armado el entorno para sostener el trabajo del agente es el [AX](./AX.md) del código base.

_Evita:_ usar "entorno" para el runtime o el harness mismo: el harness es el envoltorio, el entorno es el espacio de trabajo.

_Uso:_

"El agente no puede ver el schema de la base de staging."

"Conéctalo al entorno: dale una tool de `psql` acotada a solo lectura en staging. El harness está bien, simplemente no tiene nada sobre qué actuar."
