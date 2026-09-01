---
description: "Salida equivocada pero segura del modelo. Dos variantes: factualidad (hechos inventados) y fidelidad (deriva del contexto cargado)."
---

Salida del [modelo](./Model.md) equivocada pero segura de sí misma. Tiene dos variantes, con causas y arreglos distintos:

| Variante      | Qué falla                                                                                                                            | Causa                                                                                                                                                      | Arreglo                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| _Factualidad_ | Hechos inventados o equivocados sobre el mundo: una función que no existe, una firma de API equivocada, una cita falsa               | Vacíos en el [conocimiento paramétrico](./Parametric%20knowledge.md), a menudo posteriores a la [fecha de corte del conocimiento](./Knowledge%20cutoff.md) | Cargar el [conocimiento contextual](./Contextual%20knowledge.md) correcto |
| _Fidelidad_   | La salida se aleja del conocimiento contextual cargado, de las instrucciones del usuario o del propio razonamiento previo del modelo | [Attention degradation](./Attention%20degradation.md); empeora en la [dumb zone](./Smart%20zone.md)                                                        | [Limpiar](./Clearing.md) o [compactar](./Compaction.md)                   |

La [predicción del siguiente token](./Next-token%20prediction.md) produce una salida fluida exista o no el hecho de fondo: el modelo no tiene ninguna señal interna de que no sabe algo, así que un método inventado llega con el mismo tono seguro que uno correcto. El código alucinado es plausible por construcción: es lo que la API _tendría_ si existiera, y justo eso es lo que le permite pasar una revisión superficial y fallar recién al ejecutarlo.

Necesitas saber qué variante tienes enfrente, porque el arreglo de una empeora la otra. Factualidad significa que falta conocimiento: el arreglo es agregar contexto (la documentación, las definiciones de tipos, el archivo). Fidelidad significa que el conocimiento está presente pero pierde la competencia por la atención: el arreglo es quitar contexto. Si confundes fidelidad con factualidad, terminas pegando más documentación, lo que agranda el contexto y empeora la deriva. Cuando el agente se equivoca en algo, revisa si la información correcta ya estaba en el contexto antes de decidir cuál de los dos problemas tienes.

_Evita:_ usar "alucinación" como sinónimo liso y llano de "equivocado". Sin nombrar la variante, el término no tiene valor diagnóstico.

_Uso:_

"Alucinó un método `parseAsync` en el schema."

"¿Factualidad o fidelidad?"

"El método está en la documentación que pegué, lo que pasa es que dejó de leerla después del [turno](./Turn.md) cuarenta."

"Entonces es fidelidad. Compacta y recarga, no pierdas el tiempo agregando más documentación."
