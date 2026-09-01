---
description: "Un árbol de archivos y carpetas donde el agente lee, escribe y ejecuta: el entorno por defecto de un agente de código."
---

Un árbol de archivos y carpetas donde el [agente](./Agent.md) lee, escribe y ejecuta: el tipo de [entorno](./Environment.md) por defecto de un agente de código. [`AGENTS.md`](./AGENTS.md.md), las [skills](./Skill.md), el código fuente, los scripts de build y las configuraciones de [tools](./Tool.md) viven todos en un sistema de archivos. Cuando un [harness](./Harness.md) "arranca en tu proyecto", está apuntando al agente hacia un sistema de archivos.

El agente lo toca solo a través de [tool calls](./Tool%20call.md): leer un archivo, escribir uno, correr un comando de shell. Nada en disco está en la [ventana de contexto](./Context%20window.md) hasta que un tool call lo carga, y eso es justo lo que le permite al agente trabajar en un repositorio mucho más grande que la ventana: el sistema de archivos guarda todo, el contexto guarda solo lo que la tarea actual leyó. Algunos harnesses cargan por defecto los nombres de archivo del directorio actual en la ventana de contexto (no el contenido, solo el árbol), que funcionan como [punteros de contexto](./Context%20pointer.md): el agente ve qué existe y lee los archivos que necesita.

Y es compartido contigo. Los archivos que el agente edita son los mismos que abres en tu editor y comparas en git: el sistema de archivos es el espacio de trabajo común donde revisas lo que hizo el agente.

_Uso:_

"¿Por qué no está leyendo mi AGENTS.md?"

"Está corriendo contra otro sistema de archivos: el [sandbox](./Sandbox.md) montó el directorio padre, no la raíz del proyecto. Reapunta el harness."
