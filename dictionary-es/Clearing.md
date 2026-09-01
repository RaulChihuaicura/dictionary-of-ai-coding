---
description: "Terminar la sesión actual y empezar una nueva: el próximo mensaje arranca con una sesión y una ventana de contexto vacías."
---

Terminar la [sesión](./Session.md) actual y empezar una nueva. El próximo mensaje arranca con una sesión vacía y una [ventana de contexto](./Context%20window.md) vacía. Normalmente lo decide el usuario.

La limpieza es la cura para un contexto contaminado. Una sesión acumula de todo: intentos fallidos, caminos equivocados, [tool results](./Tool%20result.md) vencidos, planes abandonados. El [modelo](./Model.md) vuelve a leer todo eso en cada [turno](./Turn.md), y el historial malo entorpece el trabajo nuevo. Bien avanzada una sesión larga, el [agente](./Agent.md) se vuelve más vago y menos obediente: instrucciones que diste con claridad se ignoran, la calidad cae, e insistirle para que mejore no ayuda, porque el ruido que tiene que atravesar sigue en su [contexto](./Context.md). Limpiar elimina ese ruido.

Limpiar no borra la conversación. La mayoría de los [harnesses](./Harness.md) guarda el historial de la sesión en tu computador, así que la transcripción sigue disponible para leerla o retomarla. Lo que desaparece es el estado de trabajo del agente: el modelo es [sin estado](./Stateless.md), así que la nueva sesión no sabe nada de lo que sabía la anterior. Si la sesión guarda decisiones o avances que la siguiente va a necesitar, haz que el agente escriba primero un [artefacto de handoff](./Handoff%20artifact.md), y arranca la nueva sesión apuntando a él.

Compárala con la [compactación](./Compaction.md), que resume la sesión dentro del contexto nuevo en vez de empezar vacía. Limpiar es el método más brusco: no se traslada nada, ni siquiera la basura.

_Uso:_

"Se quedó dando vueltas en la misma prueba que falla."

"Límpiala: arranca una sesión nueva con el documento del plan y el archivo de la prueba. No vale la pena pelear con el contexto que ya tiene."
