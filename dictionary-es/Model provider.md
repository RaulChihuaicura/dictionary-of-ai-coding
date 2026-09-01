---
description: "Lo que sirve un modelo para inferencia. Suele ser remoto (Anthropic, OpenAI, Google), pero también puede ser local (Ollama, llama.cpp)."
---

Lo que sirve un [modelo](./Model.md) para [inferencia](./Inference.md). Normalmente es un servicio remoto (Anthropic, OpenAI, Google), pero también puede ser local: Ollama, LM Studio, llama.cpp corriendo en tu propia máquina. El [harness](./Harness.md) no corre el modelo por sí mismo, se lo pide a un proveedor.

El proveedor es dueño de la maquinaria: los [parámetros](./Parameters.md) viven en su hardware, y cada [petición al proveedor del modelo](./Model%20provider%20request.md) es el harness mandando [tokens](./Token.md) por la red y recibiendo predicciones de vuelta. Eso convierte al proveedor en la fuente de toda una categoría de problemas que se le achacan por error al modelo o al harness: los límites de tasa, la capacidad degradada y las caídas de servicio viven ahí. Cuando el [agente](./Agent.md) se traba a mitad de [sesión](./Session.md) o falla en cada [turno](./Turn.md), la página de estado del proveedor es lo primero que vale la pena revisar.

El proveedor también fija las condiciones comerciales: el precio por token para [tokens de entrada](./Input%20tokens.md) y [tokens de salida](./Output%20tokens.md), los descuentos de [caché de prefijo](./Prefix%20cache.md), y qué modelos están disponibles en absoluto. Nota que el proveedor y quien fabrica el modelo pueden ser empresas distintas: Bedrock, Vertex y OpenRouter sirven modelos de otros.

Los proveedores locales cambian capacidad por control: los modelos que caben en tu propio hardware son mucho más chicos que los de punta, pero nada sale de la máquina y no hay cuenta por token.

_Uso:_

"¿Podemos correr esto sin conexión para el cliente aislado de red?"

"Cambia el proveedor del modelo por uno local: Ollama o llama.cpp en su máquina. Al harness no le importa, solo pega contra otro endpoint."
</content>
