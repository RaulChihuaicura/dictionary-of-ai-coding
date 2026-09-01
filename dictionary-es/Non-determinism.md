---
description: "La misma entrada puede producir salidas distintas. Es propio de cómo los modelos generan texto y de cómo los proveedores sirven peticiones."
---

La misma entrada puede producir salidas distintas. Corre un [modelo](./Model.md) dos veces con el mismo [contexto](./Context.md) y puedes obtener dos respuestas diferentes: a veces una palabra, a veces un enfoque completamente distinto. No hace falta que cambie nada en tu código para que esto pase.

Es una propiedad de cómo los modelos generan texto, y de cómo los [proveedores del modelo](./Model%20provider.md) sirven las [peticiones](./Model%20provider%20request.md). Durante la [inferencia](./Inference.md), el modelo produce una distribución de probabilidad sobre los posibles [tokens](./Token.md) siguientes y se toma una muestra de ahí, normalmente con algo de aleatoriedad a propósito, porque elegir siempre el token más probable produce texto repetitivo y de peor calidad. Un token muestreado distinto al principio de una respuesta cambia todos los tokens que vienen después, y así es como una sola palabra distinta se convierte en un enfoque completamente distinto. El servicio del lado del proveedor agrega más variación encima: las peticiones se agrupan en lotes sobre hardware compartido, y diferencias mínimas de punto flotante entre lotes pueden inclinar una decisión reñida entre dos tokens. No hay ningún ajuste que puedas activar para que esto desaparezca del todo.

Espera un rango de resultados de un [agente](./Agent.md) en la misma tarea. La mayoría de las respuestas caen dentro de una curva de campana razonable de calidad (por eso el no determinismo es tolerable), pero las colas son reales: algunos días el modelo se va a sentir agudo, otros va a parecer que perdió el hilo. Misma tarea, tiradas de dados distintas. Esto tiene dos consecuencias prácticas. Reintentar es una estrategia legítima: un intento fallido es una sola extracción de la distribución, y un intento nuevo sobre la misma tarea puede simplemente salir mejor. Y la verificación importa más de lo que importaría con tools deterministas: no puedes probar el comportamiento de un agente una vez y confiar en que se va a repetir, así que las [verificaciones automatizadas](./Automated%20check.md) tienen que atrapar las malas tiradas.

Cuidado con sobre-narrar esto. Los humanos son máquinas de encontrar patrones, y una racha de corridas malas puede sentirse como prueba de que "el modelo empeoró esta semana". Casi siempre es solo la distribución.

_Uso:_

"Claude ha estado pésimo hoy. ¿Sacaron una versión peor?"

"Probablemente no: la salida del modelo es no determinista. Vas a tener días buenos y días malos con la misma tarea. Intenta de nuevo mañana antes de salir a buscar una causa."
</content>
