---
description: "El usuario lee el código que produjo el agente y forma un juicio sobre él. Leer el diff cuenta; leer el resumen no."
---

El usuario lee el código que produjo el [agente](./Agent.md) y forma un juicio sobre él. Leer el diff o los archivos cambiados cuenta; leer la _descripción_ que el agente da de lo que hizo, no: la narración no es el artefacto. La descripción es una [fuente secundaria](./Secondary%20source.md), escrita por la parte que está siendo revisada; el diff es la [fuente primaria](./Primary%20source.md), y revisar significa leerlo.

Los agentes suben el volumen de código producido, así que la revisión se vuelve el cuello de botella. Una idea útil es apilar distintas estrategias de revisión. Las [verificaciones automatizadas](./Automated%20check.md) atrapan las fallas mecánicas, la [revisión automatizada](./Automated%20review.md) atrapa las que se pueden describir, y la revisión humana queda reservada para lo que solo tú puedes juzgar: si el cambio es el cambio correcto, si el enfoque calza con el codebase, si esto debería existir siquiera.

Revisar también sale más barato temprano. Leer un plan antes de que empiece el trabajo, o un diff chico a mitad de camino, toma minutos; excavar una rama terminada después de una corrida [AFK](./AFK.md) toma más. Dónde ubicas el punto de control de revisión es una decisión de [human-in-the-loop](./Human-in-the-loop.md), no una idea de último momento.

_Evita:_ "code review" a secas: es ambiguo entre humana y automatizada.

_Uso:_

"Hice revisión humana de la salida del AFK."

"¿Leíste el diff o solo el resumen?"

"El diff. El resumen decía que borró código muerto: resultó que la función se llamaba desde un archivo generado."
