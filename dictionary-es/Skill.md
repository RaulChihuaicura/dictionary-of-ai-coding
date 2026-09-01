---
description: "Una capacidad enseñable empaquetada como unidad, fuera del contexto hasta que un puntero de contexto la trae para la tarea."
---

Una capacidad enseñable empaquetada como unidad (instrucciones y recursos para hacer bien una tarea), que se mantiene en el [entorno](./Environment.md) hasta que un [puntero de contexto](./Context%20pointer.md) la trae a la [ventana de contexto](./Context%20window.md) para la tarea en curso. Es la unidad de [revelación progresiva](./Progressive%20disclosure.md) dentro de un [harness](./Harness.md).

Las skills son un estándar abierto, definido en [agentskills.io](https://agentskills.io) (desarrollado originalmente por Anthropic y adoptado después por la mayoría de los harness grandes), así que una skill escrita una vez funciona en todos. El formato es una carpeta que contiene:

- Un archivo `SKILL.md`: metadatos (mínimo un nombre y una descripción) más las instrucciones mismas
- Opcionalmente, scripts que el [agente](./Agent.md) puede ejecutar
- Opcionalmente, plantillas y material de referencia al que apuntan las instrucciones

Por defecto, solo el nombre y la descripción viven en el [contexto](./Context.md). Cuando la tarea del agente calza, carga el resto. Hasta entonces, la skill casi no ocupa espacio (una o dos frases de [tokens](./Token.md)), sin importar cuán extensas sean sus instrucciones completas.

Esto distingue a las skills de [AGENTS.md](./AGENTS.md.md), que se carga en cada [sesión](./Session.md) sin importar la tarea. Una skill se lee cuando aparece cierto tipo de trabajo (publicar un release, armar el esqueleto de un servicio nuevo, escribir una migración) y se ignora el resto del tiempo.

_Evita:_ "[tool](./Tool.md)" (una tool es lo que el agente _llama_; una skill es lo que _lee_).

_Uso:_

"¿Dónde pongo el runbook de despliegue?"

"Como skill: el agente la carga solo cuando la tarea involucra un despliegue. En AGENTS.md quemaría tokens en cada [turno](./Turn.md) por algo que usamos una vez por semana."
