---
description: "Conserva información de un turno a otro. La sesión tiene estado entre turnos; el agente, entre sesiones, con un sistema de memoria."
---

Conserva información de un momento a otro. Una [sesión](./Session.md) tiene estado entre [turnos](./Turn.md): el [contexto](./Context.md) se acumula a medida que la sesión avanza, y por eso las sesiones largas derivan hacia la [dumb zone](./Smart%20zone.md). Un [agente](./Agent.md) puede volverse con estado entre **sesiones** si se le agrega un [sistema de memoria](./Memory%20system.md) que persista información en el [entorno](./Environment.md) y la recargue al empezar sesiones futuras. El [modelo](./Model.md) nunca tiene estado; cualquier continuidad aparente es el [harness](./Harness.md) reinyectando contexto. Es la contraparte de [sin estado](./Stateless.md).

Dónde vive el estado en cada capa:

| Capa    | ¿Tiene estado? | Cómo                                                                                                                                      |
| ------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Modelo  | Nunca          | Los [parámetros](./Parameters.md) están congelados; solo ve lo que llega en cada petición                                                 |
| Sesión  | Entre turnos   | El harness agrega cada mensaje y cada [tool result](./Tool%20result.md) al contexto                                                       |
| Harness | Entre sesiones | Archivos de memoria, [AGENTS.md](./AGENTS.md.md), [artefactos de handoff](./Handoff%20artifact.md): quedan escritos y se recargan después |
| Entorno | Siempre        | Los archivos persisten esté o no corriendo una sesión                                                                                     |

El estado de cada capa se construye releyendo algo que quedó guardado en la capa de abajo: la sesión se siente continua porque el harness reenvía el historial de mensajes al modelo sin estado, y el agente recuerda entre sesiones porque el harness recarga archivos desde el entorno. El modelo mismo nunca guarda ningún estado.

El estado no siempre es deseable. Todo lo que se arrastra influye en lo que viene después, así que un supuesto equivocado hecho al principio de una sesión también se arrastra. [Limpiar el contexto](./Clearing.md) es el acto deliberado de descartar el estado de la sesión y partir de nuevo desde lo que quedó escrito.

_Uso:_

"Recordó mis preferencias de ayer. ¿Eso significa que el modelo las aprendió?"

"No, el agente tiene estado porque el harness las escribió en un archivo de memoria y las recargó al empezar la sesión. El modelo en sí no vio nada de ayer."
