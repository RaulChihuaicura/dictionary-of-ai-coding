---
description: "Un artefacto de handoff que delimita el trabajo de una sesión. Independiente o colgado de un spec. Puede bloquear a otros tickets."
---

Un [artefacto de handoff](./Handoff%20artifact.md) que delimita el trabajo de una [sesión](./Session.md). Puede ser independiente, o colgar de un [spec](./Spec.md) como uno de sus hijos. Los tickets pueden bloquear o ser bloqueados por tickets hermanos, así que el orden del trabajo sale de su grafo de dependencias y no de un plan lineal.

La restricción que lo define es el tamaño: una sesión. Un ticket debería poder completarse antes de que la sesión se salga de la [smart zone](./Smart%20zone.md), y esa restricción se puede comprobar. Si las sesiones sobre tus tickets se degradan de forma habitual antes de terminar el trabajo, los tickets son demasiado grandes: pártelos. Si cada sesión gasta la mayor parte de su [contexto](./Context.md) en preparación antes de hacer cinco minutos de trabajo real, son demasiado chicos: fusiónalos.

Un buen ticket está escrito para alguien que no tiene ningún otro contexto. El objetivo, los criterios de aceptación, y [punteros de contexto](./Context%20pointer.md) a los archivos y decisiones relevantes: lo suficiente para que la sesión pueda empezar a trabajar sin tener que volver a deducir lo que la anterior ya sabía.

El grafo de dependencias es también lo que habilita el paralelismo. Los tickets independientes (las hojas del grafo) pueden correr cada uno en su propia sesión al mismo tiempo. Es una forma efectiva de correr varios agentes a la vez.

_Uso:_

"¿Por dónde empiezo con el spec de la migración?"

"Mira el grafo de tickets: el cambio de esquema bloquea el backfill, el backfill bloquea el cambio de API. Elige una hoja y corre una sesión sobre ella."
