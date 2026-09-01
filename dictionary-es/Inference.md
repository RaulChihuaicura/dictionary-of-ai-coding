---
description: "Correr un modelo entrenado para generar salida: lo que pasa en cada petición al proveedor. Los parámetros quedan fijos."
---

Correr un [modelo](./Model.md) ya entrenado para generar salida: lo que pasa en cada [petición al proveedor del modelo](./Model%20provider%20request.md). Los [parámetros](./Parameters.md) quedan fijos; el modelo solo hace [predicción del siguiente token](./Next-token%20prediction.md) sobre el [contexto](./Context.md) que se le da. Es barata en comparación con el [entrenamiento](./Training.md), pero se cobra por [token](./Token.md) y es el costo dominante de usar un modelo.

La vida de un modelo se divide en dos fases:

| Fase          | Cuándo ocurre                      | Qué hace                                                              | Parámetros           |
| ------------- | ---------------------------------- | --------------------------------------------------------------------- | -------------------- |
| Entrenamiento | Una vez, antes del lanzamiento     | Produce los parámetros a partir de un corpus de entrenamiento         | Se están escribiendo |
| Inferencia    | Cada vez que alguien usa el modelo | Corre los parámetros congelados sobre tu contexto para generar tokens | Solo lectura         |

Nada de lo que hagas en tiempo de inferencia se escribe de vuelta en los parámetros: por eso una corrección que haces hoy no se mantiene mañana. El modelo que comete el mismo error en la siguiente [sesión](./Session.md), después de que le explicaste el arreglo con cuidado, no te ignoró: es incapaz de aprender del intercambio. El modelo es [sin estado](./Stateless.md); la continuidad tiene que venir de afuera, desde la [ventana de contexto](./Context%20window.md) o un [sistema de memoria](./Memory%20system.md).

Este mecanismo también explica cómo se cobra. Cada petición corre el modelo sobre el contexto completo, así que el costo escala con los [tokens de entrada](./Input%20tokens.md) y los [tokens de salida](./Output%20tokens.md), y un agente que hace docenas de llamadas a [tools](./Tool.md) paga inferencia en cada ida y vuelta. Por eso el tamaño del contexto es tanto una cuestión de costo como de calidad.

_Uso:_

"¿Por qué la cuenta escala con el uso en vez de ser una licencia plana?"

"Estás pagando la inferencia: cada petición al proveedor del modelo corre el modelo en el hardware del proveedor. El entrenamiento ya pasó, pero el costo de la inferencia se acumula por petición, y un solo [turno](./Turn.md) puede convertirse en muchas peticiones cuando se llaman tools."
</content>
