---
description: "Técnica para desarrollar un concepto de diseño: el agente entrevista al usuario a la manera socrática, una decisión a la vez."
---

Técnica para desarrollar un [concepto de diseño](./Design%20concept.md) con un [agente](./Agent.md): el agente entrevista al usuario a la manera socrática, una decisión a la vez, proponiendo una respuesta recomendada para cada una. Frena el apuro por llegar a un plan terminado: no se escribe ningún [artefacto de handoff](./Handoff%20artifact.md) hasta que el concepto se estabiliza.

La técnica existe porque los agentes llenan los vacíos en silencio. Si le pides escribir una [spec](./Spec.md) a partir de un prompt de dos líneas, el agente no se detiene en las decisiones que no tomaste: elige defaults y los escribe igual. El resultado se ve completo, y las suposiciones son indistinguibles de las decisiones reales, así que las descubres tarde: en la revisión, o cuando la funcionalidad construida maneja un caso borde de una forma que tú nunca elegiste. El grilling invierte esto: en vez de suponer, el agente tiene que preguntar.

Es una técnica de [human-in-the-loop](./Human-in-the-loop.md): tus respuestas son el insumo. Cuando una pregunta no se puede responder en conversación (tendrías que ver la cosa) cámbiate a [prototipado](./Prototyping.md).

_Uso:_

"Se fue directo a escribir la spec y le erró a la lógica de cancelación."

"Hazle grilling primero: que te pregunte por las cancelaciones parciales, los reembolsos y los tiempos antes de comprometer nada en el documento. Sale más barato resolverlo en la conversación que en el código."
