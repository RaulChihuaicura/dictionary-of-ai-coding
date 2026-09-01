---
description: "Los parámetros. Sin estado: hace predicción del siguiente token y nada más. No puede actuar como agente por sí solo."
---

Los [parámetros](./Parameters.md). [Sin estado](./Stateless.md): solo hace [predicción del siguiente token](./Next-token%20prediction.md) y nada más. "Claude Opus 4.x" y "GPT-5.x" son modelos. Por sí solo, un modelo no puede hacer nada agéntico: necesita un [harness](./Harness.md).

Un modelo no puede leer archivos, ejecutar comandos, navegar la web ni recordar lo de ayer: recibe [tokens](./Token.md) y predice tokens de salida, una vez por cada [petición al proveedor del modelo](./Model%20provider%20request.md). Todo lo que parece un [agente](./Agent.md) trabajando (elegir [tools](./Tool.md), leer resultados, repetir el ciclo hasta terminar la tarea) es el harness orquestando muchas de esas predicciones seguidas.

Los [proveedores del modelo](./Model%20provider.md) ofrecen los modelos en niveles: uno grande, el más inteligente pero lento y caro, y otros más chicos, más rápidos y baratos pero menos capaces. Elegir el nivel es una decisión real (pesado para planificar y depurar casos difíciles, liviano para cambios mecánicos), y los harness permiten cambiarlo a mitad de [sesión](./Session.md).

Ser estricto con la palabra también afila el diagnóstico. "El modelo es malo para esto" es una afirmación específica: el mismo modelo en otro harness, o con otro [contexto](./Context.md), suele comportarse completamente distinto. Antes de culpar al modelo, revisa qué se le dio: la mayoría de las salidas decepcionantes se explican por el contexto o el harness, no por los parámetros.

_Uso:_

"¿Cambiamos el modelo de Sonnet a Opus para el paso de planificación?"

"Pruébalo, pero el harness es lo que hace casi todo el trabajo en esta tarea. Cambiar el modelo no sirve de nada si el [system prompt](./System%20prompt.md) y las tools están mal."
</content>
