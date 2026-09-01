---
description: "Archivo que el harness carga en la ventana de contexto al iniciar la sesión: el briefing permanente del proyecto para el agente."
---

Un archivo en el [entorno](./Environment.md) que el [harness](./Harness.md) carga en la [ventana de contexto](./Context%20window.md) al iniciar la [sesión](./Session.md): el briefing permanente del proyecto para el [agente](./Agent.md). Es una convención transversal a los harness; algunos además tienen su propia variante (la de Claude Code es CLAUDE.md).

Como se carga automáticamente, es una forma de no repetirte entre sesiones. El [modelo](./Model.md) es [sin estado](./Stateless.md): una corrección que das en una sesión desaparece en la siguiente, y terminas contándole a cada sesión nueva que el proyecto usa pnpm, que los tests corren con tal flag, o que tal directorio es generado y no se toca. Cuando ya corregiste al agente dos veces por lo mismo, esa corrección es candidata a línea de AGENTS.md.

El contenido adecuado es lo que el agente no puede deducir del código: comandos de build y test, convenciones que el código no deja en evidencia, restricciones duras ("nunca edites el cliente generado"). Corto y declarativo: es un briefing, no documentación.

La contrapartida es que todo lo que contiene se carga siempre. Las instrucciones se acumulan, la mayoría irrelevantes para cualquier tarea puntual, y un AGENTS.md largo cuesta tokens y además se diluye a sí mismo: mientras más instrucciones hay en el contexto, con menos fiabilidad el modelo sigue cada una.

_Evita:_ usar AGENTS.md para contenido que debería estar en [revelación progresiva](./Progressive%20disclosure.md): todo lo que va ahí paga un costo de [tokens](./Token.md) en cada [turno](./Turn.md), en cada sesión, la necesite o no. Una guía de estilo puede ir detrás de una [skill](./Skill.md) o de un [puntero de contexto](./Context%20pointer.md); deja AGENTS.md para las líneas que aplican en todas partes.

_Uso:_

"¿Por qué cada sesión arranca ya con 4k tokens quemados?"

"Revisa AGENTS.md: alguien pegó ahí la guía de estilo completa en vez de ponerla detrás de una skill."
