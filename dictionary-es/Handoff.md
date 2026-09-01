---
description: "Trasladar el contexto de un agente de una sesión a otra, sin vuelta atrás. El mecanismo varía: artefacto, compactación, otros."
---

Trasladar a un [agente](./Agent.md) y su [contexto](./Context.md) de una [sesión](./Session.md) a otra, sin vuelta atrás. El mecanismo de traslado varía: puede ser un [artefacto de handoff](./Handoff%20artifact.md) escrito, un resumen en memoria ([compactación](./Compaction.md)), u otros. Se distingue de la [limpieza](./Clearing.md), que no traslada nada. Las razones varían: cambiar de rol (de quien planifica a quien implementa), lanzar una corrida [AFK](./AFK.md), abrir varias sesiones en paralelo, o liberar espacio en la [ventana de contexto](./Context%20window.md).

La sesión que recibe arranca con contexto cero: el [modelo](./Model.md) es [sin estado](./Stateless.md), y nada de la sesión anterior es visible para la nueva. Lo que la siguiente sesión necesite hay que trasladarlo de forma explícita; todo lo demás se pierde. "Sin vuelta atrás" es la restricción que moldea el traslado: la sesión nueva no puede preguntarle a la vieja qué quiso decir, así que el material trasladado tiene que valerse por sí solo.

| Mecanismo            | Forma                                     | Propiedades                                                                                 |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| Artefacto de handoff | Archivo en el [entorno](./Environment.md) | Puedes leerlo y corregirlo antes de que algo dependa de él; se reutiliza en varias sesiones |
| Compactación         | Resumen dentro de la ventana de contexto  | Automática y barata; más difícil de inspeccionar; alimenta a un solo sucesor                |

El síntoma visible de un handoff mal hecho es que la sesión nueva reabre decisiones que la anterior ya había cerrado, porque lo trasladado registró qué se decidió, pero no por qué. Evalúa un handoff por lo que una sesión con contexto cero podría hacer con él.

_Uso:_

"La sesión de planificación se está poniendo pesada. ¿Sigo no más?"

"Haz un handoff. Escribe las decisiones en un documento, límpiala, y arranca la implementación en una sesión nueva que lea desde ahí."
