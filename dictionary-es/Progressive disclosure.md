---
description: "Cargar solo el contexto que el agente necesita ahora, con punteros de contexto al resto. Tomado del diseño de interfaces."
---

Cargar solo el [contexto](./Context.md) que el [agente](./Agent.md) necesita ahora mismo, con [punteros de contexto](./Context%20pointer.md) hacia el resto. La idea viene del diseño de interfaces, donde significa mostrarle al usuario solo los controles relevantes a su tarea actual y esconder el resto detrás de un clic.

La técnica existe porque el contexto cuesta dos veces. Cada [token](./Token.md) cargado de entrada se factura como [tokens de entrada](./Input%20tokens.md) en cada [turno](./Turn.md), y cada token gasta [attention budget](./Attention%20budget.md), lo necesite el agente o no. Un [AGENTS.md](./AGENTS.md.md) relleno con la guía de estilo completa, el runbook de despliegue y las convenciones de base de datos hace peor al agente en las tres cosas a la vez: las instrucciones que importan para la tarea actual quedan diluidas entre las que no. La señal es un agente que ignora reglas que sabes que están en su contexto: están ahí, pero enterradas.

La revelación progresiva invierte esto. Mantén chica la capa que se carga siempre (una frase por tema y un puntero a dónde vive el detalle). El agente lee la guía de estilo cuando está escribiendo un componente, el runbook de despliegue cuando está desplegando, y ninguno de los dos cuando está arreglando un test. Las [skills](./Skill.md) son este patrón incorporado al [harness](./Harness.md): una descripción corta que se carga en cada [sesión](./Session.md), y las instrucciones completas solo cuando algo las dispara.

_Uso:_

"¿Vuelco toda la guía de estilo en AGENTS.md?"

"No, revelación progresiva. Referencia la guía de estilo como una skill que el agente carga cuando de verdad necesita escribir un componente. AGENTS.md paga el costo de tokens en cada turno."
