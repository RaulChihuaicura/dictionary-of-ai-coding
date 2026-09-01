---
description: "La cosa misma: el código, las transcripciones, los datos crudos. Completa y autorizada, pero cara de cargar en el contexto."
---

Una fuente de verdad en su forma original: el código, la transcripción de la conversación, el log crudo, la respuesta real de la API. No es un relato de la cosa, es la cosa. Es la contraparte de la [fuente secundaria](./Secondary%20source.md).

Si quieres saber qué hace tu base de código, el código es la fuente primaria. La documentación, el diagrama de arquitectura y el README son descripciones de él: precisas cuando se escribieron, y desde entonces envejecen cada una a su propio ritmo. Cuando un [agente](./Agent.md) afirma con seguridad algo equivocado sobre tu proyecto, la pregunta es de qué fuente estaba trabajando: un agente que leyó un documento hereda lo desactualizado que esté ese documento; uno que leyó el código está leyendo la verdad actual.

El costo es lo que impide que la fuente primaria sea la opción por defecto. Cargarla en la [ventana de contexto](./Context%20window.md) es cara: el archivo completo, la transcripción completa, cada [token](./Token.md) facturado como [tokens de entrada](./Input%20tokens.md) y compitiendo por el [attention budget](./Attention%20budget.md). Lo que obtienes a cambio de ese costo es completitud: nadie prefiltró antes según su propio criterio de qué importaba. Un resumen escrito el mes pasado no puede contener el detalle que hoy resultó importar; la fuente primaria sí lo tiene.

Recurre a la fuente primaria cuando la precisión importa: la firma exacta, el error real, la línea que lanza la excepción. Buena parte de gestionar el [contexto](./Context.md) es decidir cuándo pagar por la fuente primaria y cuándo basta con una fuente secundaria.

_Uso:_

"El agente dice que la lógica de reintentos hace backoff exponencial, pero estoy viendo cómo golpea el endpoint sin parar."

"Eso lo sacó del documento de diseño. Apúntalo al módulo de reintentos real: trabaja desde la fuente primaria cuando el comportamiento importa."
