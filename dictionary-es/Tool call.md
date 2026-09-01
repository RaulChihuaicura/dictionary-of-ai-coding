---
description: "La salida del modelo que nombra una tool y sus argumentos: puro texto estructurado. El harness tiene que leerla y ejecutarla."
---

La salida del [modelo](./Model.md) que nombra una [tool](./Tool.md) y sus argumentos: puro texto estructurado. No hace nada por sí sola; el [harness](./Harness.md) tiene que leerla y ejecutarla. La produce el modelo en una sola [petición al proveedor del modelo](./Model%20provider%20request.md).

El ciclo de vida de un tool call:

| Paso | Quién   | Qué pasa                                                                                       |
| ---- | ------- | ---------------------------------------------------------------------------------------------- |
| 1    | Modelo  | Se entera de qué tools existen por las descripciones del [system prompt](./System%20prompt.md) |
| 2    | Modelo  | Emite un llamado (nombre de la tool más argumentos, normalmente JSON) y se detiene             |
| 3    | Harness | Interpreta el llamado y lo revisa contra el [modo de permisos](./Permission%20mode.md)         |
| 4    | Harness | Lo ejecuta si está permitido                                                                   |
| 5    | Harness | Devuelve el resultado como [tool result](./Tool%20result.md) en la próxima petición            |

Un [turno](./Turn.md) de trabajo del [agente](./Agent.md) suele ser muchas de estas idas y vueltas encadenadas.

Como el llamado se genera por [predicción del siguiente token](./Next-token%20prediction.md) igual que todo lo demás, puede estar mal de la misma forma en que puede estar mal cualquier salida del modelo: una ruta que no existe, un flag que el comando no tiene, argumentos que parecen plausibles pero no son correctos. El harness ejecuta lo que se escribió, no lo que se quiso decir: una ruta mal tipeada no falla con gracia, edita el archivo equivocado.

_Uso:_

"Dijo que corrió los tests, pero los timestamps de los archivos no cambiaron."

"Mira la transcripción: ¿de verdad emitió un tool call, o solo describió que los corría? El modelo produce el llamado, pero si el harness no lo ejecutó, no pasó nada."
