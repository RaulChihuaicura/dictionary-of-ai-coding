---
description: "Lo que el modelo sabe por su entrenamiento, guardado en sus parámetros. Congelado desde entonces. Contraparte del conocimiento contextual."
---

Lo que el [modelo](./Model.md) "sabe" por su [entrenamiento](./Training.md), guardado en sus [parámetros](./Parameters.md). Queda congelado desde ese momento: el modelo no puede ver sus propios parámetros ni actualizarlos. El detalle se pierde en el apriete: miles de millones de hechos se comprimen en una cantidad fija de parámetros, y los poco frecuentes se desdibujan. Es la fuente de la fluidez en temas comunes, y de la fabricación en los poco comunes. Contraparte del [conocimiento contextual](./Contextual%20knowledge.md).

El conocimiento paramétrico no se guarda como hechos. El entrenamiento nunca le da al modelo una base de datos donde buscar cosas; ajusta los parámetros hasta que el modelo predice bien el texto, y un modelo que predice bien el texto sobre un tema se comporta como si lo supiera. Qué tan confiable es ese conocimiento depende de cuántas veces apareció el tema en los datos de entrenamiento: uno con millones de ejemplos se reproduce con precisión, uno con solo un puñado hace que el modelo adivine a partir de lo que se parece a temas similares. Reproducir y adivinar son el mismo proceso para el modelo, así que no puede distinguir cuál de los dos está haciendo. Una respuesta fabricada llega con la misma fluidez que una correcta. La [alucinación](./Hallucination.md) es el modelo adivinando mal.

El conocimiento paramétrico también envejece. Los parámetros dejan de cambiar en la [fecha de corte del conocimiento](./Knowledge%20cutoff.md), así que una librería lanzada o renombrada después de esa fecha no existe en ellos, y una API que cambió queda registrada en su forma antigua.

Para los dos vacíos (lo poco frecuente y lo demasiado reciente) el remedio es el mismo: ese conocimiento no se puede agregar a los parámetros, así que hay que entregarlo como conocimiento contextual.

_Uso:_

"Escribe React impecable, pero inventa métodos en nuestro SDK interno."

"React es denso en el conocimiento paramétrico: millones de ejemplos de entrenamiento. Tu SDK no, así que el modelo rellena con formas que parecen plausibles. Carga la documentación del SDK en el [contexto](./Context.md)."
