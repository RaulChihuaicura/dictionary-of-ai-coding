---
description: "Tokens que el harness manda en cada petición al proveedor del modelo. Se cobran a una tarifa más baja que los tokens de salida."
---

[Tokens](./Token.md) que el [harness](./Harness.md) manda en cada [petición al proveedor del modelo](./Model%20provider%20request.md): el [system prompt](./System%20prompt.md), el historial de la conversación, los [tool results](./Tool%20result.md), todo lo que el [modelo](./Model.md) lee antes de escribir. Se cobran a una tarifa más baja que los [tokens de salida](./Output%20tokens.md), porque cuestan menos de procesar.

Al hacer [AI](./AI.md) coding, los tokens de entrada son la mayor parte de tu cuenta. El modelo es [sin estado](./Stateless.md), así que cada [turno](./Turn.md) reenvía toda la [sesión](./Session.md) como entrada: tu primer mensaje, cada respuesta, cada tool result desde entonces. La entrada del turno cincuenta contiene los cuarenta y nueve turnos anteriores. Una sola petición al proveedor del modelo puede producir unos cientos de tokens de salida, pero reenviar cien mil tokens de entrada de historial acumulado.

La [caché de prefijo](./Prefix%20cache.md) reduce el costo: el historial que coincide exactamente con una petición anterior se cobra como [tokens de caché](./Cache%20tokens.md) baratos en vez de entrada a precio completo. Cuando el costo de entrada sigue doliendo, la solución es achicar lo que se reenvía: [limpiar](./Clearing.md) o [compactar](./Compaction.md) entre tareas.

_Uso:_

"La cuenta está alta pero el [agente](./Agent.md) casi no está escribiendo nada."

"Son los tokens de entrada: cada turno reenvía toda la sesión. Sin la caché de prefijo vuelves a pagar el historial en cada petición."
</content>
