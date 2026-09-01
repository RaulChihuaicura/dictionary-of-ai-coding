---
description: "Agent experience: qué tan bien está preparado el entorno para que un agente trabaje bien: verificaciones, arquitectura, contexto."
aliases:
  - Agent experience
---

Agent experience: qué tan bien está preparado el [entorno](./Environment.md) para que un [agente](./Agent.md) trabaje bien en un codebase. Es la contraparte del [DX](./DX.md) del lado del agente. Cuando el mismo agente rinde bien en un repo y mal en otro (mismo [modelo](./Model.md), mismo [harness](./Harness.md)), la diferencia suele ser el AX. El instinto es culpar al modelo o reescribir el prompt; el arreglo está más seguido en el repo.

Un buen AX tiene tres dimensiones principales:

| Dimensión                    | Cómo se ve un buen AX                                                                                                                                                                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verificaciones automatizadas | [Verificaciones automatizadas](./Automated%20check.md) rápidas y deterministas (tipos, tests, lints) desde las que el agente puede autocorregirse sin un humano                                                                                                                        |
| Arquitectura                 | Un codebase que el agente puede recorrer sin leerlo todo: estructura predecible, mucho comportamiento detrás de interfaces chicas, nombres que dicen qué hace cada cosa                                                                                                                |
| Contexto libre               | [AGENTS.md](./AGENTS.md.md), [skills](./Skill.md) y [tools](./Tool.md) mantenidos livianos, para que la mayor parte de la [ventana de contexto](./Context%20window.md) quede disponible para la tarea y el agente se mantenga en la [smart zone](./Smart%20zone.md) en vez de ahogarse |

El AX y el DX se superponen (buenas verificaciones y una arquitectura limpia ayudan a las dos audiencias), pero divergen. Los humanos toleran el conocimiento tribal, un CI lento y "pregúntale a Sarah sobre el módulo de facturación"; los agentes no pueden. Los agentes no se benefician de los tooltips del IDE ni de dashboards bonitos; necesitan las fallas como texto en un [tool result](./Tool%20result.md). Un codebase puede tener buen DX y mal AX.

_Evita:_ tratar el AX como sinónimo de DX: las audiencias necesitan inversiones distintas.

_Uso:_

"El agente escribe código excelente en el repo de la API y basura en el frontend."

"El repo de la API tiene tipos estrictos y una suite de tests rápida; el frontend no tiene ninguna de las dos cosas y cuarenta skills siempre cargadas. Eso es una brecha de AX, no un problema de modelo."
