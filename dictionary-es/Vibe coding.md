---
description: "Patrón en que el usuario acepta el código del agente sin revisión humana. El diff se trata como una caja opaca."
---

Patrón de trabajo en que el usuario acepta el código del [agente](./Agent.md) sin [revisión humana](./Human%20review.md). El diff se trata como una caja opaca: lo que importa es si el programa se comporta bien, no qué hay adentro. La [revisión automatizada](./Automated%20review.md) y las [verificaciones automatizadas](./Automated%20check.md) pueden seguir corriendo; el vibe coding no dice nada sobre ninguna de las dos.

El término viene de Andrej Karpathy, que lo [acuñó a comienzos de 2025](https://x.com/karpathy/status/1886192184808149383): "te entregas por completo a la vibra" y "te olvidas de que el código siquiera existe": describes lo que quieres, aceptas lo que vuelve, y lo juzgas corriéndolo.

El vibe coding cambia inspección por velocidad. Leer diffs suele ser el paso más lento del trabajo con agentes, así que sacarlo elimina el principal cuello de botella. Para código cuyas fallas son baratas ([prototipos](./Prototyping.md), scripts de una sola vez, tools internas) es un intercambio razonable. El riesgo escala con la vida útil del código y lo que hay en juego.

El costo llega después. Los cambios hechos con vibe coding se acumulan en un codebase que nadie ha leído, y lo único que se revisó fue el comportamiento, así que todo lo que el comportamiento no deja ver (un secreto escrito en los logs, un caso borde que falta, un manejo de datos silenciosamente equivocado) se envía sin que nadie lo note. La primera vez que alguien depura el sistema es la primera vez que alguien lee el código. Sin revisión humana, la única puerta que atraviesa el código es la que dejen las verificaciones automatizadas que sigan corriendo: tests, tipos, revisión automatizada.

_Evita:_ usar "vibe coding" como sinónimo de "AI coding de baja calidad": el término nombra la postura frente a la revisión, no el código resultante.

_Uso:_

"¿Leíste qué cambió en el flujo de auth?"

"Lo hice con vibe coding: el login sigue funcionando, eso fue todo lo que revisé."

"Lee el diff antes de hacer push: hacer vibe coding en auth es justo la forma en que se filtran secretos a los logs."
