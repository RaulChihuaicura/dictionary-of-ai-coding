---
description: "El almacén del proveedor que permite a peticiones consecutivas saltarse el reproceso de un prefijo compartido, a tarifa más baja."
---

El almacén del lado del [proveedor](./Model%20provider.md) que permite a [peticiones al proveedor del modelo](./Model%20provider%20request.md) consecutivas saltarse el reproceso de un prefijo compartido. Cuando el comienzo de una petición coincide con el comienzo de una reciente (mismo [system prompt](./System%20prompt.md), mismo historial hasta cierto punto), el proveedor reutiliza su trabajo previo y cobra esos [tokens](./Token.md) como [tokens de caché](./Cache%20tokens.md) a una tarifa mucho más baja.

La caché vale la pena porque las sesiones crecen solo agregando al final. Cada petición reenvía todo el historial como [tokens de entrada](./Input%20tokens.md) (ver esa entrada para el porqué), y en una [sesión](./Session.md) normal el historial solo cambia al final: cada petición es la anterior más unos mensajes nuevos. El proveedor procesa una sola vez el largo comienzo compartido, guarda el resultado, y retoma desde donde termina el prefijo. Sin la caché, una sesión de 50 [turnos](./Turn.md) pagaría por reprocesar el turno uno cincuenta veces.

Las cachés también expiran. Cuánto tiempo se mantiene caliente una entrada varía según el proveedor del modelo, típicamente minutos, no horas. Deja una sesión inactiva más allá de esa ventana y la siguiente petición reconstruye el prefijo a precio completo una vez, antes de que el cacheo se reanude. Esto es sobre todo un problema de quien construye el [harness](./Harness.md); como usuario, el efecto visible es que las peticiones después de una pausa larga cuestan más que las de antes.

_Uso:_

"¿Por qué se disparó la cuenta a mitad de la sesión?"

"El harness empezó a inyectar la hora actual en el system prompt en cada turno. La caché de prefijo se rompe en el primer token que cambia, así que cada petición después de eso se cobró a tarifa completa."
</content>
