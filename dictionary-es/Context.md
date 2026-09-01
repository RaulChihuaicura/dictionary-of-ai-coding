---
description: "La información relevante que el agente tiene a mano ahora mismo: lo que sabe y le sirve para la tarea."
---

La información relevante que el [agente](./Agent.md) tiene a mano ahora mismo. Es el sustantivo abstracto: no es la entrada cruda que ve el modelo (eso es la [ventana de contexto](./Context%20window.md)), ni el historial corrido (eso es la [sesión](./Session.md)), sino _lo que el agente sabe que es pertinente para la tarea_. "Cargar algo al contexto" significa hacerlo parte de ese conjunto; "ingeniería de contexto" es la disciplina de curarlo.

Los tres términos se separan con claridad:

| Término             | Qué nombra                                                                     |
| ------------------- | ------------------------------------------------------------------------------ |
| Contexto            | La información relevante para la tarea que el agente tiene ahora mismo         |
| Ventana de contexto | La secuencia literal de [tokens](./Token.md) que el modelo ve en cada petición |
| Sesión              | La conversación en curso que guarda el [harness](./Harness.md)                 |

La separación importa porque el contexto mide calidad, no cantidad. Una ventana de contexto puede estar casi llena y el contexto seguir siendo pobre: miles de tokens de resultados de tools obsoletos, ninguno relacionado con la tarea. También puede estar casi vacía y el contexto ser excelente: la única definición de tipo de la que depende la tarea.

La mayoría de las fallas del día a día se rastrean hasta el contexto. Cuando el agente inventa una API, contradice una decisión o adivina un schema, la primera pregunta es qué había en el contexto cuando lo hizo: casi siempre el dato relevante nunca se cargó, o quedó enterrado bajo la [attention degradation](./Attention%20degradation.md). El arreglo es curar: cargar lo que la tarea necesita y dejar fuera lo que no.

_Uso:_

"Sigue inventando campos que no están en el tipo."

"El archivo del tipo no está en contexto: está leyendo los call sites y adivinando. Cárgale la definición primero."
