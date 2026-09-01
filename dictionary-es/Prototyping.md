---
description: "Hacer que el agente construya una versión rápida y tosca cuando la conversación no alcanza y hace falta un artefacto real."
---

Hacer que el [agente](./Agent.md) construya una versión rápida y tosca de algo, para cuando la conversación es demasiado poco fiel y hace falta un artefacto real sobre el cual hablar.

El [grilling](./Grilling.md) resuelve decisiones de diseño en la conversación. Conversar es barato, pero es de baja fidelidad: hay preguntas que no se pueden responder con palabras (cómo se siente una interacción, si la forma de una API es cómoda en código real que la llama, si el layout funciona con tamaños de datos reales). La entrevista llega a una pregunta y tu respuesta honesta es "no sé, tendría que verlo". Pasado ese punto, la discusión da vueltas. En vez de eso, haz que el agente construya la cosa, míralo, y vuelve a la conversación con una respuesta.

Los agentes bajan el costo de construir, y eso es lo que hace esto práctico. Una versión tosca que antes tomaba un día armar ahora toma minutos, así que vale la pena hacerlo de rutina. Es una técnica de [human-in-the-loop](./Human-in-the-loop.md): el prototipo está ahí para que tú reacciones.

Por lo general no te quedas en una sola mirada. Itera con el prototipo (reacciona, pide un cambio, reacciona de nuevo) para que cada ronda resuelva otra decisión contra el artefacto real, a una fidelidad más alta de la que permite la conversación.

Un prototipo no tiene que ser tosco de punta a punta. Puedes construir a calidad de producción las piezas que en realidad estás evaluando, para que cuando la decisión quede tomada, el componente o la API a la que reaccionaste se pueda trasladar al codebase real. Esto convierte al prototipado en material esencial para que la [spec](./Spec.md) lo referencie.

_Uso:_

"Llevamos media hora discutiendo si el wizard debería ser una página o tres pasos."

"Las palabras no lo van a resolver: haz que el agente prototipe las dos. Las recorremos con clics y lo sabemos en cinco minutos."
