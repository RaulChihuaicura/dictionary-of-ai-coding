---
description: "Lo que el modelo realmente hace. Toma un token del contexto, lo agrega y vuelve a correr. Su único modo de operar."
---

Lo que el [modelo](./Model.md) realmente hace. Dado un [contexto](./Context.md), toma una muestra de un [token](./Token.md) siguiente, lo agrega, y vuelve a correr. Toda salida (una frase, un [tool call](./Tool%20call.md), un archivo de mil líneas) se construye de a un token por vez. El modelo no tiene otro modo de operar.

Cada paso funciona igual: los tokens de la [ventana de contexto](./Context%20window.md) pasan por los [parámetros](./Parameters.md), que producen una probabilidad para cada token del vocabulario (este es muy probable que siga, aquel menos). Se toma una muestra de un token a partir de esas probabilidades, se agrega, y el ciclo vuelve a correr con el contexto un poco más largo. Ese paso de muestreo es la razón por la que el mismo prompt produce salidas distintas en corridas distintas: el [no determinismo](./Non-determinism.md) está incorporado al mecanismo, no es un bug agregado encima.

Tener presente este mecanismo explica comportamientos que de otro modo parecen extraños. El modelo nunca revisa si un token es _verdadero_ antes de emitirlo, solo si es _probable_, y ahí está la raíz de la [alucinación](./Hallucination.md). Se compromete con cada token a medida que avanza, así que una primera frase que suena segura puede desviar el resto de la respuesta. Y como los [tokens de salida](./Output%20tokens.md) se producen estrictamente de a uno por vez, la velocidad de generación pone un piso a qué tan rápido puede trabajar cualquier [agente](./Agent.md).

_Uso:_

"¿Cómo 'decide' el agente llamar a una tool?"

"No decide: es predicción del siguiente token de principio a fin. El tool call es solo una cadena estructurada que el [harness](./Harness.md) extrae del flujo de salida."
</content>
