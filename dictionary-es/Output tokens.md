---
description: "Tokens que el modelo genera de vuelta. Se cobran a una tarifa más alta que los de entrada, porque cuestan más cómputo producirlos."
---

[Tokens](./Token.md) que el [modelo](./Model.md) genera de vuelta. Se cobran a una tarifa más alta que los [tokens de entrada](./Input%20tokens.md), normalmente unas cinco veces más, porque cuestan más cómputo producirlos.

Cuenta todo lo que el modelo escribe: la prosa que lees, el código que emite, los [tool calls](./Tool%20call.md), y cualquier pensamiento extendido que el modelo haga antes de responder. Esto último sorprende a la gente: los tokens de razonamiento se cobran como salida aunque el [harness](./Harness.md) muchas veces no te los muestre, y subir el [esfuerzo](./Effort.md) gasta más de ellos.

Los tokens de salida también marcan el ritmo de una [sesión](./Session.md). El modelo lee la entrada rápido, pero genera la salida de a un token por vez, así que cuando un [turno](./Turn.md) se siente lento, casi siempre es la salida que se está escribiendo, no la entrada que se está leyendo. Una espera larga casi siempre significa que viene una respuesta larga.

_Uso:_

"La sesión de refactor está gastando crédito aunque las entradas son chicas."

"El agente está reescribiendo archivos enteros en vez de parchar. Los tokens de salida cuestan más o menos cinco veces la tarifa de entrada: haz que emita ediciones y la cuenta baja."
</content>
