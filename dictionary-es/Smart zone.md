---
description: "Al inicio de una sesión el agente está agudo y enfocado. Al crecer deriva a una dumb zone: más descuidado, olvidadizo, con más errores."
aliases:
  - Dumb zone
  - Smart zone / Dumb zone
---

Al inicio de una [sesión](./Session.md), el [agente](./Agent.md) está en una "smart zone": agudo, enfocado, con buena capacidad de recordar. A medida que la sesión crece, deriva hacia una "dumb zone": más descuidado, olvidadizo, con más errores, y más [alucinaciones](./Hallucination.md) de fidelidad. Mismo [modelo](./Model.md), mismo [harness](./Harness.md): solo hay más [contexto](./Context.md). Es el efecto que se siente de la [attention degradation](./Attention%20degradation.md). En los modelos de punta, la dumb zone suele empezar alrededor de los 125K-150K [tokens](./Token.md), aunque esto se debate. [Limpia](./Clearing.md) o [compacta](./Compaction.md) cuando la sesión se hincha; no sigas empujando.

La caída es gradual, y por eso es fácil pasarla por alto. No hay mensaje de error ni un límite visible: el agente simplemente empieza a rendir un poco peor, y después notablemente peor. Señales comunes: olvida una instrucción que le diste veinte turnos atrás, repite un error que ya había corregido, o afirma algo con total seguridad que el contexto contradice. Como la pendiente es suave, la respuesta habitual es seguir insistiendo y volver a explicar, lo que agrega más contexto y empeora el problema.

Las zonas no siguen el límite de la [ventana de contexto](./Context%20window.md). Una sesión puede estar bien metida en la dumb zone con la mayor parte de la ventana todavía libre: el límite es el punto donde el harness se niega a seguir, pero la calidad cae mucho antes de eso. Planifica en función de la smart zone, no de la ventana: el presupuesto práctico para una tarea son los tokens dentro de los cuales el agente rinde bien, no los tokens que técnicamente puede sostener.

La smart zone es un presupuesto, y cualquier trabajo ajeno a la tarea lo gasta. Cada tarea que se hace en una sesión consume tokens, así que empezar una segunda tarea en la misma sesión significa empezarla más cerca de la dumb zone. Hacer una sola tarea por sesión le da a cada tarea la parte más aguda de la sesión. Cuando una tarea es más grande que una smart zone completa, divídela: haz [handoff](./Handoff.md) o compacta en un punto de corte natural, y deja que una sesión nueva se encargue de la siguiente parte.

_Uso:_

"Resolvió perfecto los primeros tres componentes y destrozó el cuarto."

"Se te acabó la smart zone: mismo modelo, pero ya bien metido en la dumb zone. Compacta y recarga el plan, el siguiente componente va a salir bien."
