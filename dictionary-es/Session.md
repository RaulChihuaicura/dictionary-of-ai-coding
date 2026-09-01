---
description: "Una interacción acotada con un agente. Arranca vacía, se acumula, y termina al limpiarla, cerrarla o compactarla en una sesión nueva."
---

Una interacción acotada con un [agente](./Agent.md). Arranca vacía, acumula mensajes, [tool results](./Tool%20result.md) y archivos leídos, y termina cuando se [limpia](./Clearing.md), se cierra o se [compacta](./Compaction.md) en una sesión nueva. La sesión es lo que _llena_ la [ventana de contexto](./Context%20window.md): si la ventana de contexto es la caja, la sesión es lo que la va llenando de a poco. El trabajo demasiado grande para una sola ventana de contexto hay que repartirlo entre varias sesiones.

El historial de mensajes de la sesión es la memoria de trabajo del agente. El [modelo](./Model.md) es [sin estado](./Stateless.md), así que todo lo que parece recordar (lo que pediste, lo que dijeron los tests, lo que decidió hace tres turnos) está en el historial de mensajes, que se reenvía completo con cada [petición al proveedor del modelo](./Model%20provider%20request.md). Lo que no está en la sesión no existe para el agente.

Esa memoria termina con la sesión. Una sesión nueva arranca de cero: el agente que conocía bien tu código base al final de la sesión de ayer no sabe nada de eso esta mañana. Lo que sobrevive es el [sistema de archivos](./Filesystem.md): los archivos escritos durante una sesión los puede leer la siguiente, y en eso se apoyan los [handoffs](./Handoff.md), los [sistemas de memoria](./Memory%20system.md) y los [AGENTS.md](./AGENTS.md.md).

Tú eliges dónde termina una sesión. Todo lo que hay en una sesión influye en cada [turno](./Turn.md) posterior, así que tareas sin relación hechas en la misma sesión dejan residuos que tiñen la siguiente respuesta. Una tarea por sesión mantiene el contexto relevante; terminar una tarea es un buen momento natural para limpiar.

_Uso:_

"¿Cuánto puede durar una sesión antes de que se desarme?"

"Depende del trabajo: una refactorización acotada aguanta más nítida que una investigación abierta. Cuando la sesión se hincha, hazle handoff o compáctala, no sigas insistiendo."
