---
description: "Fecha límite del conocimiento paramétrico. Librerías y API posteriores son trampa de fabricación, salvo que cargues su documentación."
---

Fecha después de la cual un [modelo](./Model.md) no tiene [conocimiento paramétrico](./Parametric%20knowledge.md). Las librerías, las API y los eventos posteriores a esa fecha son trampas de fabricación, salvo que su documentación se cargue como [conocimiento contextual](./Contextual%20knowledge.md). Cada versión de modelo trae su propia fecha de corte.

Esta fecha existe por cómo se construyen los modelos: el [entrenamiento](./Training.md) hornea una foto del texto dentro de los [parámetros](./Parameters.md) del modelo, y después de eso los parámetros quedan congelados. El modelo no sabe que su conocimiento tiene un borde: si le preguntas por algo posterior a la fecha de corte, no se niega a responder, extrapola desde lo más cercano que sí conoce. Eso es lo que hace silenciosa la trampa: el código escrito contra una versión vieja de una librería se ve plausible, muchas veces compila, y falla solo en las partes que cambiaron.

El arreglo es siempre el mismo: meter información actualizada en el [contexto](./Context.md). Carga el changelog, apunta a las definiciones de tipos de la versión instalada, o haz que el agente lea la documentación desde la web. Cualquier cosa en el contexto le gana a la nada que hay en los parámetros.

_Uso:_

"Sigue escribiendo la sintaxis del SDK v3, y nosotros vamos en la v5."

"La v5 salió después de la fecha de corte del conocimiento. Carga el changelog de la v5 como conocimiento contextual, si no va a seguir fabricando desde la versión paramétrica vieja."
