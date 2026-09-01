---
description: "Tokens de entrada que el proveedor tiene cacheados de una petición anterior vía su caché de prefijo, cobrados a tarifa mucho más baja."
---

[Tokens de entrada](./Input%20tokens.md) que el [proveedor](./Model%20provider.md) tiene cacheados de una [petición al proveedor del modelo](./Model%20provider%20request.md) anterior, así no tiene que reprocesarlos. Cuando peticiones consecutivas comparten un prefijo, el proveedor reutiliza el trabajo mediante su [caché de prefijo](./Prefix%20cache.md) y cobra la porción cacheada a una tarifa mucho más baja. Es la palanca que hace que las [sesiones](./Session.md) largas sean costeables: sin ella, cada [turno](./Turn.md) vuelve a pagar todo el historial.

La razón por la que esto importa es cómo se cobran las sesiones. El [modelo](./Model.md) es [sin estado](./Stateless.md), así que cada petición reenvía toda la conversación (el [system prompt](./System%20prompt.md), cada mensaje, cada [tool result](./Tool%20result.md)) como tokens de entrada. Para el turno cincuenta, cada petición carga cincuenta turnos de historial, y pagarías tarifa completa por todo eso, cada vez. La caché cambia la cuenta: los tokens que el proveedor ya procesó en un prefijo idéntico se cobran como tokens de caché, muchas veces a una décima parte de la tarifa de entrada o menos. En una sesión larga, la mayor parte de lo que envías son tokens de caché, y la cuenta se mantiene razonable.

Un ejemplo muestra cuándo los tokens se cachean y cuándo no. Cada letra representa un bloque de contenido de la conversación; cada petición manda la conversación hasta ese punto:

| La petición manda | Cacheado | Cobrado a tarifa completa | Por qué                                                   |
| ----------------- | -------- | ------------------------- | --------------------------------------------------------- |
| `AB`              | nada     | `AB`                      | Primera petición: no hay nada contra qué comparar         |
| `ABC`             | `AB`     | `C`                       | `AB` es un prefijo exacto de la petición anterior         |
| `ABCD`            | `ABC`    | `D`                       | El prefijo sigue intacto                                  |
| `AXCD`            | `A`      | `XCD`                     | Una edición cambió `B` por `X`; la coincidencia falla ahí |

La caché es frágil de una forma específica: hace coincidir prefijos exactos. Si algo cambia más temprano en la conversación (el [harness](./Harness.md) reordena contenido, se actualiza una marca de tiempo, cambia la representación de un archivo), la caché falla desde ese punto en adelante y todo lo que sigue se cobra a tarifa completa de entrada. Las cachés también expiran después de unos minutos de inactividad, así que una sesión retomada tras una pausa larga vuelve a pagar su historial una vez. Cuando el costo de una sesión salta sin una causa obvia, compara los tokens de caché contra los tokens de entrada en el reporte de uso: una caché rota aparece ahí primero.

_Uso:_

"El costo en sesiones largas es brutal: ocho dólares por un refactor."

"Revisa los tokens de caché. Si el harness está reordenando el system prompt o los archivos entre turnos, el prefijo se rompe y vuelves a pagar tarifa completa de entrada en cada petición."
</content>
