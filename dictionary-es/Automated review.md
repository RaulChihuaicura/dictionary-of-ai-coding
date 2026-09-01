---
description: "Un agente que revisa el trabajo de otro agente, a menudo con otro modelo o system prompt. No determinista: forma un juicio."
---

Un [agente](./Agent.md) que revisa el trabajo de otro agente, muchas veces con otro [modelo](./Model.md) o [system prompt](./System%20prompt.md). No determinista: forma un juicio. Corre en cualquier parte: antes de mergear un PR, después sobre el historial de commits, o a mitad de sesión como [subagente](./Subagent.md). Un LLM-as-judge en CI es revisión automatizada, no una [verificación automatizada](./Automated%20check.md); lo que decide la categoría es lo que la aserción _hace_, no dónde corre.

Lo que hace que funcione es la separación del agente que hizo el trabajo. Pedirle al agente que escribió el código que revise su propio trabajo rinde muy poco: la [sesión](./Session.md) que produjo el bug también contiene el razonamiento que lo produjo, y el agente lee sus propias conclusiones como si fueran confirmación. Un revisor con una [ventana de contexto](./Context%20window.md) nueva no tiene ese apego: ve el diff como lo vería un desconocido, que es de lo que depende la revisión. Un modelo distinto o un system prompt específico para revisar afinan esto aún más: puntos ciegos distintos, y un system prompt acotado a lo que de verdad te importa (seguridad, contratos de API, rendimiento) en vez de un vago "busca problemas".

Encaja entre las otras capas de revisión. Las verificaciones automatizadas son deterministas y atrapan lo que se puede afirmar mecánicamente; la [revisión humana](./Human%20review.md) es cara y la que peor escala. La revisión automatizada queda en el medio: atrapa problemas con forma de juicio (un nombre de función engañoso, un caso borde que se escapó) a costo de máquina. Como no es determinista, puede pasar cosas por alto y marcar falsos problemas; trátala como un filtro que sube el piso antes de que la mire un humano, no como una puerta que lo reemplaza.

_Evita:_ "AI review" / "agent review": demasiado vago para distinguirla del propio agente que hizo el trabajo.

_Uso:_

"Nos están llegando demasiados PR malos desde las corridas [AFK](./AFK.md)."

"Agrega un paso de revisión automatizada antes de mergear: otro modelo, system prompt aparte, acotado a seguridad y cambios de contrato."
