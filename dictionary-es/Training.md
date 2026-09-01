---
description: "El proceso que fija los parámetros de un modelo, exponiéndolo a mucho texto y ajustándolo para predecir mejor el siguiente token."
---

El proceso que fija los parámetros de un [modelo](./Model.md): sus [parámetros](./Parameters.md) se ajustan exponiéndolo a enormes volúmenes de texto para mejorar la [predicción del siguiente token](./Next-token%20prediction.md). Es un proceso único y caro que hace el [proveedor del modelo](./Model%20provider.md). Incluye tanto el pre-entrenamiento (la corrida masiva) como el post-entrenamiento (ajustes posteriores como seguir instrucciones y seguridad); la distinción no importa al nivel de este glosario.

El mecanismo es repetición a escala: mostrarle al modelo un fragmento de texto, hacer que prediga el siguiente [token](./Token.md), empujar los parámetros hacia lo que de verdad fue el siguiente token, y repetir a través de billones de tokens. Nada queda guardado como hechos o reglas: todo lo que el modelo "sabe" es un efecto secundario de volverse mejor prediciendo, comprimido en los parámetros como [conocimiento paramétrico](./Parametric%20knowledge.md).

Dos consecuencias importan en el día a día. El entrenamiento termina en un punto del tiempo, así que el modelo tiene una [fecha de corte del conocimiento](./Knowledge%20cutoff.md): no vio la versión de la librería a la que actualizaste el mes pasado. Y el entrenamiento no es algo que tú puedas hacer: cuando el modelo no conoce tu código, tus convenciones o tus APIs internas, la solución nunca es "enséñale al modelo", sino poner ese material en el [contexto](./Context.md), la única entrada que controlas.

_Uso:_

"¿Podemos lograr que conozca nuestra API interna?"

"No con entrenamiento: eso es un proceso de meses que hace el proveedor del modelo. Mejor carga la documentación de la API al contexto, esa es la palanca que sí tienes."
</content>
