---
description: "Una ida y vuelta del harness al proveedor del modelo. El harness manda el contexto; el proveedor devuelve una respuesta."
---

Una ida y vuelta del [harness](./Harness.md) al [proveedor del modelo](./Model%20provider.md). El harness manda el [contexto](./Context.md) actual; el proveedor devuelve una respuesta (un [tool call](./Tool%20call.md) o una respuesta final). Un solo mensaje del usuario puede generar muchas peticiones al proveedor del modelo si el [agente](./Agent.md) llama [tools](./Tool.md): cada [tool result](./Tool%20result.md) dispara otra petición.

Cada petición carga con todo: el [system prompt](./System%20prompt.md), toda la conversación hasta ese punto, cada tool result. El [modelo](./Model.md) es [sin estado](./Stateless.md), así que el proveedor no guarda nada entre peticiones: la petición cuarenta reenvía lo que mandó la treinta y nueve, más un tool result adicional. La [caché de prefijo](./Prefix%20cache.md) existe para que esta repetición salga a cuenta.

La petición es también la unidad de cobro. Los [tokens de entrada](./Input%20tokens.md), los [tokens de salida](./Output%20tokens.md) y los descuentos de caché se cuentan todos por petición, por eso una pregunta de aspecto inocente puede costar una cantidad sorprendente: el costo no es proporcional a tu mensaje, es proporcional al número de peticiones multiplicado por el tamaño del contexto que carga cada una.

Vale la pena distinguir la petición del [turno](./Turn.md). Un turno es un intercambio contigo, y un solo turno ("arregla el test que falla") se despliega como una cadena de peticiones:

| Petición | El modelo devuelve                            | El harness entonces                    |
| -------- | --------------------------------------------- | -------------------------------------- |
| 1        | Tool call: correr los tests                   | Los corre, agrega la salida del fallo  |
| 2        | Tool call: leer el archivo de test            | Agrega el contenido del archivo        |
| 3        | Tool call: leer el archivo fuente             | Agrega el contenido del archivo        |
| 4        | Tool call: editar el archivo fuente           | Aplica la edición, agrega el resultado |
| 5        | Tool call: correr los tests otra vez          | Los corre, agrega la salida del éxito  |
| 6        | Respuesta final: "arreglado, los tests pasan" | Te la muestra                          |

Seis peticiones para un turno, cada una reenviando todo el contexto de nuevo. Cuando te preguntes a dónde se fueron los [tokens](./Token.md), cuenta las peticiones, no los turnos.

_Uso:_

"¿Una pregunta gastó cuarenta mil tokens?"

"Mira los tool calls: doce grep, ocho read, cuatro edits. Cada tool result dispara otra petición al proveedor del modelo, y el prefijo de toda la [sesión](./Session.md) se reenvía cada vez."
</content>
