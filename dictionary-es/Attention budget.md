---
description: "Cada token reparte una cantidad fija de influencia sobre el resto del contexto. Es por token: no crece cuando el contexto crece."
---

Cada [token](./Token.md) tiene una cantidad finita de influencia para repartir sobre el resto del [contexto](./Context.md). Si le da mucho peso a [una relación](./Attention%20relationship.md), le queda menos para las demás. El presupuesto es por token y no crece cuando el contexto crece, y por eso las [sesiones](./Session.md) largas se diluyen.

Piénsalo como señal y ruido. Tu instrucción es una señal a volumen fijo; cada otro token de la [ventana de contexto](./Context%20window.md) es un sonido que compite. La instrucción nunca baja de volumen (sigue ahí, carácter por carácter), pero a medida que el contexto crece, la sala se pone más ruidosa alrededor de ella, y la relación señal-ruido cae. Una instrucción que era lo más fuerte con 10 mil tokens de contexto es apenas un murmullo de fondo con 150 mil. Este es el mecanismo detrás de la [attention degradation](./Attention%20degradation.md): el modelo no olvida, la señal se pierde en el ruido.

El síntoma se lee como desobediencia: el agente aceptó una restricción al principio y después se aleja de ella, y volver a pegarla ayuda solo un rato. La causa no es la instrucción, es todo lo demás en la ventana compitiendo con ella.

Lo que sí controlas es qué entra al contexto. El contenido que no sirve para la tarea no es neutro: es ruido sobre todo lo que sí sirve. Mantén la ventana chica, [limpia](./Clearing.md) cuando el contexto acumulado deje de justificar su costo, y repite las restricciones que importan en vez de confiar en que su mención inicial se sostenga sola.

_Uso:_

"¿Por qué sigue ignorando el schema que pegué al principio?"

"Ya estamos bien metidos en la [dumb zone](./Smart%20zone.md): el attention budget de cada token es fijo, pero el contexto siguió creciendo. La señal sobre el schema ahora compite con miles de tokens más nuevos."
