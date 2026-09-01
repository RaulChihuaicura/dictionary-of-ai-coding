---
description: "Las instrucciones que el harness antepone a cada petición al proveedor: el brief permanente del agente. Suele ser estable en la sesión."
---

Las instrucciones que el [harness](./Harness.md) antepone a cada [petición al proveedor del modelo](./Model%20provider%20request.md): el brief permanente del [agente](./Agent.md), quién es, cómo comportarse, qué [tools](./Tool.md) puede llamar, qué convenciones seguir. Suele mantenerse estable durante toda la [sesión](./Session.md).

El system prompt lo escribe el proveedor del harness, no tú, y en los harnesses de código suele ser grande: a menudo decenas de miles de [tokens](./Token.md) de reglas de comportamiento, descripciones de tools y manejo de casos borde, todo pagado como [tokens de entrada](./Input%20tokens.md) en cada [turno](./Turn.md). Tus propias instrucciones permanentes viajan junto a él: archivos como [AGENTS.md](./AGENTS.md.md) se cargan al lado del system prompt al empezar la sesión, así que el [modelo](./Model.md) lee el brief del proveedor y el tuyo juntos antes de ver tu mensaje.

Como es idéntico en cada petición, forma el inicio de la [caché de prefijo](./Prefix%20cache.md), y esa es parte de la razón por la que los harnesses lo mantienen fijo durante toda la sesión en lugar de irlo editando sobre la marcha.

Los modelos están entrenados para priorizar el system prompt por sobre los mensajes del usuario. Por eso, cuando un agente insiste en una convención que nunca pediste, o formatea la salida de una forma que no logras cambiar, casi siempre está obedeciendo a su system prompt, y tu mensaje está perdiendo la discusión. Algunos harnesses son personalizables: te dan acceso completo al system prompt, así que puedes leer qué se le está diciendo de verdad al agente y cambiarlo.

_Uso:_

"Dos harnesses, mismo modelo, comportamiento totalmente distinto con el mismo prompt."

"System prompts distintos. Uno está ajustado para ediciones de código breves, el otro para explicar: ahí vive la divergencia, antes de que tu mensaje siquiera llegue."
