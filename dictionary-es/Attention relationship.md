---
description: "El vínculo entre dos tokens: los pares con sentido se influyen más que los que no lo tienen. Un contexto de N tokens tiene ~N² de estos."
---

Al predecir cada [token](./Token.md), el [modelo](./Model.md) toma en cuenta todos los demás tokens del [contexto](./Context.md): a algunos les da mucho peso, a otros casi ninguno. El vínculo entre dos tokens es una **attention relationship**, y los pares con sentido ("her" con "Sarah", o una llamada a `getUser()` con su definición `function getUser`) se influyen más entre sí que los que no tienen relación. Un contexto de N tokens tiene del orden de N² de estas relaciones.

En esos vínculos vive la comprensión aparente del modelo. Cuando resuelve un pronombre, es porque la attention relationship entre "her" y "Sarah" es fuerte. Cuando llama a una función con los argumentos correctos, es la relación entre el punto de llamada y la definición que leyó antes la que hace el trabajo. Nada de esto se busca en una tabla: se calcula de nuevo en cada [petición al proveedor del modelo](./Model%20provider%20request.md), para cada par.

Vale la pena detenerse en la cifra N², porque crece más rápido de lo que la intuición sugiere:

| Tamaño del contexto | Pares (~N²)      |
| ------------------- | ---------------- |
| 1.000 tokens        | ~1 millón        |
| 10.000 tokens       | ~100 millones    |
| 100.000 tokens      | ~10.000 millones |

Cada vínculo, además, se calcula más de una vez. Los modelos tienen varias cabezas de atención (las cifras exactas de los modelos de punta no son públicas, pero cincuenta a cien es una estimación razonable) y cada cabeza calcula su propia versión de cada relación. Así que cada par de la tabla de arriba se duplica en cada cabeza. Son muchísimos pares.

Solo una fracción pequeña de estas relaciones importa para una tarea dada. El vínculo entre tu instrucción y el código que gobierna es uno de los pocos que cuentan; casi todo el resto de la masa es ruido. Y los dos crecen a ritmos distintos: las relaciones que importan se mantienen más o menos constantes, mientras que la masa total crece de forma cuadrática con el tamaño del contexto. Con 1.000 tokens, el par que te interesa es uno en un millón; con 100.000 tokens, es uno en diez mil millones. Esta es la aritmética detrás del [attention budget](./Attention%20budget.md), y la [attention degradation](./Attention%20degradation.md) es lo que se siente cuando las relaciones que importan se quedan con una porción demasiado delgada.

_Uso:_

"Sigue confundiendo los dos símbolos `user` en el diff. Suena a que estamos en la [dumb zone](./Smart%20zone.md)."

"Sí, la attention relationship entre cada punto de llamada y su declaración está peleando con la otra: misma forma de token, distinto vínculo. Renombra uno y los pares se afilan."
