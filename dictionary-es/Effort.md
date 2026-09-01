---
description: "Un dial para cuánto razona el modelo antes de responder. Más esfuerzo gasta más tokens de salida por mejor puntería en problemas difíciles."
aliases:
  - Reasoning effort
  - Thinking effort
---

El esfuerzo es un dial para cuánto razona un [modelo](./Model.md) antes de responder. Se fija por [petición al proveedor del modelo](./Model%20provider%20request.md) y controla cuánto piensa el modelo antes de empezar a escribir la respuesta que ves. Ese pensamiento se genera en tiempo de [inferencia](./Inference.md) como todo lo demás; el [harness](./Harness.md) muchas veces lo oculta, pero es trabajo real que el modelo está haciendo.

Más esfuerzo cuesta más y corre más lento. El razonamiento se emite como [tokens](./Token.md), se cobra como [tokens de salida](./Output%20tokens.md) aunque nunca los veas, y se produce de a uno por vez: así que subir el esfuerzo alarga la espera antes de que llegue la respuesta y aumenta la cuenta. El trade-off es más deliberación a cambio de velocidad y costo.

La mayoría de los harness exponen el esfuerzo como una escalera corta:

| Nivel  | Para qué sirve                                                                       |
| ------ | ------------------------------------------------------------------------------------ |
| Bajo   | Ediciones mecánicas, búsquedas, cambios bien especificados con un solo camino claro. |
| Medio  | Programación del día a día: el default habitual.                                     |
| Alto   | Bugs difíciles, decisiones de diseño, planes de varios pasos.                        |
| Máximo | Los problemas más duros, donde una respuesta equivocada sale cara de deshacer.       |

El síntoma de equivocarse corta para los dos lados. Si fijas el esfuerzo demasiado bajo en un problema difícil, obtienes una respuesta confiada y superficial que se saltó el razonamiento que el problema necesitaba: se lee bien y está mal de una forma que te cuesta después. Si lo pones en máximo para renombrar una línea, te sientas a esperar un pensamiento largo que no produce nada que el nivel más bajo no hubiera dado.

Ajusta el esfuerzo a la tarea, no a la [sesión](./Session.md). Súbelo para la parte que de verdad es difícil de razonar, y bájalo para el trabajo mecánico alrededor.

_Uso:_

"Sigue arruinando este fix de concurrencia: se lo he explicado tres veces."

"Sube el esfuerzo. Es un bug que exige mucho razonamiento, y en el nivel default no está pensando lo suficiente antes de comprometerse con un enfoque."
</content>
