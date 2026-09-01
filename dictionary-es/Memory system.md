---
description: "Sistema que intenta hacer a un agente con estado entre sesiones: persiste en el entorno y recarga al iniciar la sesión."
---

Un sistema que intenta hacer que un [agente](./Agent.md) quede [con estado](./Stateful.md) entre [sesiones](./Session.md). Persiste información en el [entorno](./Environment.md) durante una sesión y la recarga en la [ventana de contexto](./Context%20window.md) al comenzar las siguientes, de modo que el agente mantiene continuidad más allá de que el usuario haga una [limpieza](./Clearing.md) de la sesión.

Un sistema de memoria tiene dos mitades. La ruta de escritura: durante una sesión, el agente registra lo que aprendió (una preferencia que declaraste, un dato del proyecto) como archivos en el entorno. La ruta de lectura: al iniciar la sesión, el [harness](./Harness.md) carga esos archivos, o un índice de ellos, de vuelta en la ventana de contexto. Muchos harness traen su propio sistema de memoria (el `/memory` de Claude Code es uno), pero también puedes construir el tuyo: un directorio de notas más una instrucción en [AGENTS.md](./AGENTS.md.md) que diga que hay que consultarlo.

Aplican las mismas contrapartidas que a cualquier contenido siempre cargado. Las memorias se acumulan, así que la mayoría de los sistemas carga un índice de una línea y deja los cuerpos detrás de [punteros de contexto](./Context%20pointer.md) en vez de incluirlo todo. Y las memorias son [fuentes secundarias](./Secondary%20source.md), así que se desactualizan: un dato registrado en marzo se carga con la misma confianza en junio, cuando el proyecto ya avanzó. Un sistema de memoria necesita poda, igual que AGENTS.md.

_Uso:_

"Tengo que repetirle siempre que uso Postgres, no MySQL."

"Arma un sistema de memoria: que escriba lo que aprende al [sistema de archivos](./Filesystem.md) en el primer [turno](./Turn.md), y lo recargue al iniciar la sesión. El [modelo](./Model.md) en sí es [sin estado](./Stateless.md); la capa de memoria simula continuidad."
