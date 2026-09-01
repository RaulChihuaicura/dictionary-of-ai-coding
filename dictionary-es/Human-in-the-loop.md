---
description: "Patrón en que uno o más humanos acompañan al agente durante la sesión: revisando, redirigiendo o colaborando en tiempo real."
aliases:
  - HITL
  - Human-in-the-loop (HITL)
---

Patrón de trabajo en el que uno o más humanos acompañan al [agente](./Agent.md) durante la [sesión](./Session.md): revisando, redirigiendo o colaborando en tiempo real. El humano está presente y comprometido, no solo autorizando acciones puntuales.

El contraste es con el trabajo [AFK](./AFK.md), donde el agente corre sin supervisión y tú evalúas el resultado después. El human-in-the-loop consiste en atajar los problemas mientras todavía son baratos: ves al agente tomar el archivo equivocado, malinterpretar el requerimiento o meterse en un camino sin salida, y lo corriges en una frase, en vez de descubrir veinte minutos de trabajo confiado construido sobre ese error. Los agentes no saben de forma confiable cuándo se desviaron; dejados solos, tienden a seguir adelante en vez de detenerse a preguntar.

Qué patrón conviene depende del trabajo. Las tareas bien especificadas, de bajo riesgo y fáciles de verificar calzan con AFK. Las tareas ambiguas, irreversibles, o donde te costaría revisar el resultado terminado (una migración de esquema, una decisión de diseño delicada, cualquier cosa que toque producción) calzan con quedarse en el loop. El criterio, en esencia: qué tan cara es una decisión equivocada, y qué tan tarde la detectarías.

Parte del trabajo es in-the-loop por naturaleza, porque tus reacciones son el insumo. El [grilling](./Grilling.md) solo funciona contigo ahí para responder las preguntas; el [prototipado](./Prototyping.md) solo funciona contigo ahí para reaccionar al artefacto.

Quedarse en el loop cuesta tu atención, que es el recurso escaso. Parte de mejorar con agentes es sacar cada vez más trabajo del loop de forma segura: con planes, [verificaciones automatizadas](./Automated%20check.md) y [revisión humana](./Human%20review.md) al final, en vez de supervisión durante todo el proceso.

_Uso:_

"¿Corro esto AFK durante la noche?"

"No, es una migración de esquema: mantenlo human-in-the-loop. Quiero ver cada paso y corregir el rumbo si elige la columna equivocada para el backfill."
