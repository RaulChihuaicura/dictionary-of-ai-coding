---
description: "Un mensaje del usuario más todo lo que hace el agente en respuesta, hasta devolver el turno. Contiene una o más peticiones al proveedor."
---

Un mensaje del usuario más todo lo que el [agente](./Agent.md) hace en respuesta, hasta que le devuelve el turno al usuario. Contiene una o más [peticiones al proveedor del modelo](./Model%20provider%20request.md): varias, si el agente llama [tools](./Tool.md). Una pregunta aclaratoria cierra el turno; tu respuesta abre el siguiente. La jerarquía es [sesión](./Session.md) **> Turno > Petición al proveedor del modelo**.

Lo que hace que valga la pena nombrar el turno es que su duración la decide el agente, no tú. Tú entregas un mensaje; el agente decide cuántos tool calls encadenar antes de devolver el turno. Un turno puede ser una respuesta de una frase o veinte minutos leyendo, editando y corriendo tests. Es la misma propiedad vista desde dos ángulos: los turnos largos son lo que hace posible trabajar en modo [AFK](./AFK.md), y los turnos largos son también donde las cosas salen mal sin supervisión: para cuando el agente devuelve el turno, puede haberse alejado bastante de lo que querías decir.

El turno es además la unidad natural para dirigir al agente. Todo lo que pasa dentro de un turno ocurre sin ti; los espacios entre turnos son donde tú rediriges. La mayoría de los [harnesses](./Harness.md) suaviza esto: puedes interrumpir a mitad de turno para detener al agente y redirigirlo, o escribir un mensaje mientras trabaja, que se lee cuando el turno termina. Si notas que sigues insatisfecho con dónde terminan los turnos, el arreglo suele ser pedir turnos más chicos (un plan primero, un paso a la vez), sacrificando autonomía a cambio de espacios más frecuentes para dirigir.

_Uso:_

"¿Un turno tomó dos minutos?"

"Hizo catorce [tool calls](./Tool%20call.md) dentro de ese turno: cada uno es una petición al proveedor del modelo separada. La latencia se acumula antes de que el agente por fin te devuelva el turno."
