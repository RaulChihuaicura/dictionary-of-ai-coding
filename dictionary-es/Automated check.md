---
description: "Verificación determinista que corre en el entorno: tests, tipos, lints, build, hooks de pre-commit. Pasa o falla, sin juicio."
---

Una verificación determinista que corre en el [entorno](./Environment.md): tests, chequeos de tipos, lints, build, hooks de pre-commit. Pasa o falla, sin juicio. Es la señal desde la que un [agente](./Agent.md) puede autocorregirse sin involucrar a nadie más. Un test inestable (flaky) es una verificación rota, no una no-verificación; las verificaciones automatizadas son deterministas _por diseño_.

La autocorrección funciona como un loop. El agente hace un cambio, corre la verificación como [tool call](./Tool%20call.md), y la salida de la falla llega a su [ventana de contexto](./Context%20window.md): un error de tipos con archivo y línea, una aserción fallida con el valor esperado y el real. Eso le basta al agente para arreglar el problema y volver a correr la verificación, una y otra vez hasta que pase, sin ningún humano en el loop. El determinismo es lo que hace confiable el loop: el mismo código siempre produce el mismo veredicto, así que un pase significa algo. Una verificación inestable envenena esto: el agente "arregla" código que estaba bien, o reintenta pasando por encima de una falla real.

Por eso las buenas verificaciones son gran parte del [AX](./AX.md) de un codebase. Un agente en un repo con tipos estrictos, una suite de tests rápida y un linter atrapa la mayoría de sus propios errores antes de que tú los veas; un agente en un repo sin nada de eso envía lo que sea que produzca. La diferencia importa más en las corridas [AFK](./AFK.md), donde las verificaciones son la única comprobación que ocurre durante la corrida. Pero una verificación solo atrapa lo que afirma: verificaciones en verde significan que las propiedades afirmadas se cumplen, no que el código esté bien. Los vacíos con forma de juicio son para lo que existen la [revisión automatizada](./Automated%20review.md) y la [revisión humana](./Human%20review.md).

_Evita:_ "feedback loop" / "backpressure": las dos mezclan las verificaciones con la revisión. _Evita:_ "test": los tests son verificaciones automatizadas, pero no toda verificación automatizada es un test.

_Uso:_

"El agente sigue enviando código roto en las corridas AFK."

"¿Qué verificaciones automatizadas están conectadas al [sandbox](./Sandbox.md)?"

"Solo los tests unitarios."

"Agrega typecheck y lint: se va a autocorregir con eso antes de que el PR siquiera llegue."
