---
description: "Un artefacto de handoff que describe un trabajo de varias sesiones: qué se construye, no cómo aporta cada una. Hecho de tickets."
---

Un [artefacto de handoff](./Handoff%20artifact.md) que describe un trabajo de varias [sesiones](./Session.md): qué se está construyendo, no cómo cada sesión aporta su parte. Cambia a medida que el trabajo avanza. Está hecho de [tickets](./Ticket.md).

El spec existe porque las sesiones son desechables y el trabajo grande no lo es. Cualquier cosa que tome más de una [ventana de contexto](./Context%20window.md) de esfuerzo necesita un lugar fuera del [contexto](./Context.md): en algún punto del [entorno](./Environment.md) del agente que sobreviva a la [limpieza](./Clearing.md), ya sea un archivo en el repositorio, un issue de GitHub, o un gestor de tickets al que el agente pueda llegar. El spec es ese lugar: el objetivo, las restricciones, las decisiones tomadas hasta ahora, y la lista de tickets con su estado. Cualquier sesión nueva puede leerlo y saber en qué punto está el trabajo sin heredar el ruido acumulado de la sesión anterior.

Los specs vienen en estilos reconocibles, casi todos heredados de cómo los equipos ya dejaban las cosas por escrito. Un _product requirements document_ (PRD) se inclina hacia el qué y el por qué de cara al usuario: funcionalidades, comportamiento, criterios de aceptación. Un _design doc_ o _RFC_ se inclina hacia lo técnico: el enfoque elegido, las alternativas descartadas, los trade-offs. En el extremo más chico, un simple `plan.md` con una lista de tickets cumple la misma función para una funcionalidad de varias sesiones. El estilo importa menos que el rol: para el [agente](./Agent.md), todos estos son la misma cosa: la declaración de intención duradera que lee al empezar cada sesión.

_Uso:_

"¿Debería ser todo esto una sola sesión?"

"No, escríbelo como un spec: pártelo en tickets, corre cada uno en su propia sesión. Tratar de meter todo en un solo contexto va a chocar contra la [dumb zone](./Smart%20zone.md) antes de llegar a la mitad."
