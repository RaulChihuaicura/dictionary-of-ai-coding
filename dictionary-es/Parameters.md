---
description: "Los números dentro de un modelo, a veces miles de millones, ajustados en el entrenamiento. Todo lo que sabe vive ahí. También: pesos."
---

Los números dentro de un [modelo](./Model.md) (a veces miles de millones de ellos), ajustados durante el [entrenamiento](./Training.md). Todo lo que el modelo "sabe" vive en ellos. El entrenamiento los fija; la [inferencia](./Inference.md) los usa sin tocarlos. También se los llama _pesos_.

En términos mecánicos, los parámetros son lo que convierte la entrada en salida. La [predicción del siguiente token](./Next-token%20prediction.md) es un cálculo gigantesco: los [tokens](./Token.md) de la [ventana de contexto](./Context%20window.md) entran, se multiplican a través de los parámetros, y sale una predicción para el siguiente token. No hay una base de datos de hechos dentro del modelo, ni una tabla de consulta de código: solo estos números, dispuestos para que el cálculo tienda a producir una salida útil. Los hechos que el modelo puede recitar desde el entrenamiento, como una API de librería estándar, son [conocimiento paramétrico](./Parametric%20knowledge.md): están guardados en los parámetros, no se recuperan de ninguna parte.

El detalle que vale la pena internalizar es que los parámetros quedan congelados después del entrenamiento. Nada de lo que hagas en una [sesión](./Session.md) los cambia: ninguna corrección que hagas, ningún código que le muestres, ningún error del que aprenda. Cada sesión corre sobre los mismos números. Por eso el modelo es [sin estado](./Stateless.md), por eso su conocimiento incorporado se detiene en la [fecha de corte del conocimiento](./Knowledge%20cutoff.md), y por eso cualquier cosa específica de un proyecto tiene que llegar vía [contexto](./Context.md) en su lugar. La única forma de cambiar los parámetros es más entrenamiento, lo que produce, en la práctica, un modelo distinto.

_Uso:_

"¿Podemos afinarlo con nuestro código?"

"Eso actualizaría los parámetros: sería un modelo distinto después. Para un solo proyecto casi siempre sale más barato cargar el código como contexto que reentrenar."
</content>
