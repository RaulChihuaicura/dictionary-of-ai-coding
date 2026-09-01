---
description: "No conserva nada entre peticiones. El modelo no tiene estado entre peticiones; un agente tampoco lo tiene entre sesiones, por defecto."
---

No conserva nada de una petición a otra. El [modelo](./Model.md) no tiene estado entre [peticiones al proveedor del modelo](./Model%20provider%20request.md): cada petición reenvía la [ventana de contexto](./Context%20window.md) completa, porque el modelo no tiene otra forma de ver algo más. Un [agente](./Agent.md) no tiene estado entre [sesiones](./Session.md) por defecto: una sesión nueva arranca vacía, sin rastro de las anteriores. Es la contraparte de [con estado](./Stateful.md).

El modelo en sí es permanentemente sin estado: sus [parámetros](./Parameters.md) quedan congelados después del [entrenamiento](./Training.md), y nada de lo que hagas en la [inferencia](./Inference.md) los cambia. El modelo no aprende de tus correcciones, no recuerda que le dijiste lo mismo ayer, y no te está conociendo, por mucho que la conversación se sienta así. La sensación de continuidad dentro de una sesión la fabrica el [harness](./Harness.md), que guarda la transcripción y la reenvía con cada petición. El modelo no recuerda la conversación: la vuelve a leer.

La consecuencia práctica: si quieres que algo se recuerde entre sesiones, tienes que escribirlo en algún lugar que el agente vuelva a leer. Para eso existen los archivos [AGENTS.md](./AGENTS.md.md), los [sistemas de memoria](./Memory%20system.md) y los [artefactos de handoff](./Handoff%20artifact.md): archivos que se cargan en el [contexto](./Context.md) de las sesiones futuras, haciendo de memoria donde el modelo no tiene ninguna. Cuando el agente sigue cometiendo un error que ya le corregiste antes, la pregunta no es por qué no aprendió (no puede), sino dónde debería quedar escrita esa corrección para que cada sesión futura la lea.

_Uso:_

"¿Por qué olvida la convención cada vez que [limpio el contexto](./Clearing.md)?"

"El modelo no tiene estado: la sesión nueva arranca vacía. Si quieres que se conserve, escríbelo en AGENTS.md o en un archivo de memoria que el harness cargue al empezar la sesión."
