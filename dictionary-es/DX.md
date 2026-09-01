---
description: "Developer experience: qué tan fácil el codebase y su toolchain le hacen a los humanos trabajar bien: docs, feedback, errores."
aliases:
  - Developer experience
---

Developer experience: qué tan fácil un codebase y su toolchain le hacen a los humanos hacer bien su trabajo. Un buen DX es feedback rápido, mensajes de error claros, documentación que responde la pregunta que de verdad tienes, y un setup que funciona a la primera. El término es muy anterior al AI coding; está en este diccionario sobre todo como contraste para el [AX](./AX.md).

El DX es la interacción entre el humano y el codebase, nada más. La diferencia principal entre las dos audiencias es que los humanos son [con estado](./Stateful.md) y los agentes son [sin estado](./Stateless.md). Un humano aprende el codebase una vez y carga con ese conocimiento todos los días después, y por eso un DX malo se sobrevive: rodean un CI lento agrupando sus pushes, rodean la falta de docs preguntando una vez en Slack, rodean una estructura confusa memorizando dónde vive cada cosa. Los workarounds se acumulan, y un equipo termina siendo productivo en un codebase que se les resiste.

Los [agentes](./Agent.md) enfrentan el mismo codebase sin nada de esa acumulación. Sin estado entre [sesiones](./Session.md), un agente reaprende el codebase desde cero cada vez: se beneficia de la suite de tests rápida y de los mensajes de error claros, pero todo lo que descubrió ayer desaparece a menos que haya quedado escrito en el [entorno](./Environment.md), que el agente solo percibe a través de los [tool results](./Tool%20result.md). Esa es la brecha que nombra el AX: las partes del DX que sobreviven cuando el desarrollador es un agente, más preocupaciones que los humanos no tienen, como mantener libre la [ventana de contexto](./Context%20window.md).

La superposición significa que invertir en DX suele mejorar el AX gratis: tipos estrictos, tests rápidos y una estructura predecible ayudan a las dos audiencias. La divergencia significa que no siempre: un doc de onboarding hermoso ayuda a un humano durante una semana y a un agente nada, a menos que sea alcanzable desde [AGENTS.md](./AGENTS.md.md).

_Uso:_

"Nuestro DX está bien: los nuevos ingresos son productivos en una semana."

"Productivos porque alguien se sienta con ellos esa semana. El agente no tiene esa semana; revisa el AX por separado."
