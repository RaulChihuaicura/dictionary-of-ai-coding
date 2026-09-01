---
description: "Un modelo con harness: tools, system prompt y ventana de contexto, que toma turnos con un usuario. El modelo en movimiento."
---

Un [modelo](./Model.md) puesto en un [harness](./Harness.md) con [tools](./Tool.md), un [system prompt](./System%20prompt.md) y una [ventana de contexto](./Context%20window.md), que toma [turnos](./Turn.md) con un usuario. _Claude Code es un agente. Cursor es un agente. Claude.ai es un agente._ Un agente es con lo que en realidad hablas: es el modelo en movimiento, configurado para un propósito.

A diferencia de la mayoría de los términos de este diccionario, "agente" no nombra una parte mecánica. El modelo es un archivo de [parámetros](./Parameters.md); el harness es software al que puedes apuntar. El agente no es ninguna de las dos cosas: es la unidad a la que le hablas. La gente antropomorfiza la [IA](./AI.md) todo el tiempo, y el agente es la unidad antropomorfizada: aquello a lo que le delegas, lo que lee tu mensaje y responde, el "él" de "él rompió el build otra vez". Cuando dices que el agente hizo algo, quieres decir que lo hizo el modelo más el harness, pero te diriges a la combinación como si fuera un solo actor.

La idea es más vieja que esta ola de IA. Los agentes de software (programas a los que delegas un objetivo y que actúan en tu nombre) llevan siendo un concepto desde que existe la IA.

_Evita:_ "la IA", "el bot" (son demasiado vagos: ocultan si te refieres a los parámetros o a la cosa con harness).

_Uso:_

"¿Qué agente estás usando para la migración?"

"Claude Code en local, Cursor para el trabajo de UI: mismo modelo por debajo, harnesses distintos."
