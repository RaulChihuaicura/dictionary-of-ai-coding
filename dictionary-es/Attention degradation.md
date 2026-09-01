---
description: "Cuando una sesión crece, el attention budget de cada token se reparte entre más competidores y la señal sobre lo que importa se achica."
---

A medida que una [sesión](./Session.md) crece, cada [token](./Token.md) reparte su [attention budget](./Attention%20budget.md) entre más competidores. La señal sobre cualquier [relación con sentido](./Attention%20relationship.md) se achica; el ruido del [contexto](./Context.md) irrelevante se mete de por medio. Mismo [modelo](./Model.md), mismos [parámetros](./Parameters.md): solo hay más bocas comiendo del mismo plato. Es la causa del efecto [smart zone / dumb zone](./Smart%20zone.md).

Se presenta como el modelo empeorando a mitad de sesión: restricciones que siguió durante una hora empiezan a fallar, vuelve a preguntar cosas que ya se le dijeron, escribe código que ignora un archivo que leyó antes. No cambió nada en el modelo; la única variable es cuánto contexto está atendiendo ahora.

Es gradual, y por eso es difícil detectarlo desde dentro de la sesión. No hay error ni umbral: cada [turno](./Turn.md) es apenas un poco peor que el anterior, y para cuando los tropiezos son evidentes ya llevas un buen rato en la dumb zone.

Se recupera quitando contexto, no agregando más. Volver a pegar la instrucción ignorada solo suma otro competidor a la misma ventana saturada, y ayuda apenas un rato. Lo que funciona: [limpiar](./Clearing.md) y recargar solo lo que la tarea necesita, [compactar](./Compaction.md), o hacer un [handoff](./Handoff.md) a una sesión nueva. Trata la caída en el seguimiento de instrucciones como una señal sobre el largo del contexto, no sobre el modelo.

_Uso:_

"Está metido en la dumb zone: inventa genéricos que no están en el archivo de tipos."

"Attention degradation. Las definiciones de tipos siguen en el contexto, pero la señal sobre ellas está enterrada bajo todo lo que agregamos desde entonces. Limpia y recarga."
