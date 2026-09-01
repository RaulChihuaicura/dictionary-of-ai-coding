---
description: "Lo que el harness devuelve tras ejecutar un tool call: contenido, salida o error. La única vista que el agente tiene del entorno."
---

Lo que el [harness](./Harness.md) devuelve después de ejecutar un [tool call](./Tool%20call.md): el contenido del archivo, la salida del comando, el error. La única vista que tiene el [agente](./Agent.md) del [entorno](./Environment.md). Viaja de vuelta al [modelo](./Model.md) en la _siguiente_ [petición al proveedor del modelo](./Model%20provider%20request.md), donde el modelo decide qué hacer con eso. Tool call y tool result son las dos puntas del mismo intercambio, ambas dentro de un [turno](./Turn.md).

El ciclo de vida de un tool result:

| Paso | Quién   | Qué pasa                                                                           |
| ---- | ------- | ---------------------------------------------------------------------------------- |
| 1    | Harness | Ejecuta el tool call: corre el comando, lee el archivo                             |
| 2    | Harness | Captura el resultado: salida, contenido o error                                    |
| 3    | Harness | Lo agrega al [contexto](./Context.md) como un mensaje                              |
| 4    | Harness | Manda todo el contexto al proveedor en la próxima petición al proveedor del modelo |
| 5    | Modelo  | Lee el resultado y decide: otro tool call, o una respuesta final                   |

El resultado se queda en el contexto por el resto de la [sesión](./Session.md). Los tool results suelen ser el grueso del contexto de una sesión de código: cada archivo leído, cada test corrido, cada búsqueda entra completa y sigue ocupando [tokens](./Token.md) mucho después de dejar de ser útil. Unos pocos resultados grandes (un log de tests verboso, un archivo generado leído entero) pueden empujar a una sesión hacia el borde de la [ventana de contexto](./Context%20window.md) más rápido que la conversación misma.

Como el resultado es todo lo que el modelo ve, el modelo no tiene forma de comprobar el entorno detrás de él. Si la salida se truncó, el comando falló en silencio, o el harness devolvió un error en vez del contenido, el modelo razona sobre lo que le llegó. Cuando la imagen que tiene el agente de tu sistema parece equivocada, ahí es donde hay que mirar: en algún lugar de la transcripción hay un resultado que dice algo distinto de lo que tú sabes que es cierto.

_Uso:_

"Está razonando sobre el archivo como si estuviera vacío."

"El tool result volvió como un rechazo de permiso, no como el contenido. El modelo solo vio el string de error: no tiene otra forma de ver el archivo."
