<!--
  GENERATED FILE — DO NOT EDIT.
  Source: dictionary-es/*.md, internal/Curriculum-es.md, internal/README-es.template.md
  Regenerate: npm run generate:es
-->

<p>
  <a href="https://www.aihero.dev/ai-coding-dictionary">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png">
      <img alt="AI Coding Dictionary" src="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png" width="369">
    </picture>
  </a>
</p>

# Diccionario de AI Coding

**Programar con IA se siente como algo reservado a los expertos**. Jerga que nadie explica. Fallas misteriosas. Cuentas que no parecen corresponder al trabajo hecho.

En realidad no lo es. Buena parte de la confusión es fabricada: **hay toda una economía financiada con capital de riesgo que gana con que esto se vea difícil de entender**.

Los términos básicos del juego se aprenden en una tarde. Una vez que los tienes, el asunto deja de sentirse como adivinanza.

¿Por qué se degrada el contexto? ¿Por qué la cuenta sale tan alta? ¿Por qué el mismo prompt se comporta distinto de un día para otro?

Cada una tiene una respuesta limpia, apenas alguien te dice con qué palabras nombrarla.

Para eso sirve este diccionario. **El vocabulario del AI coding, traducido a lenguaje llano**.

---

> **Sobre esta edición.** Es la traducción al español de [dictionary-of-ai-coding](https://github.com/mattpocock/dictionary-of-ai-coding), de Matt Pocock. Los títulos de las entradas se mantienen en inglés a propósito: son la palabra que vas a encontrar en la documentación, en la interfaz de tu harness y en la conversación con tu equipo, así que es la llave con la que vas a buscar. Dentro del texto se traduce lo que tiene equivalente asentado en español y se deja en inglés lo que nadie traduce en la práctica. El criterio completo, término por término, está en [`internal/glosario-es.md`](./internal/glosario-es.md).
>
> **¿Quieres más que el vocabulario?** Súmate a más de 62.000 desarrolladores en **[aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter)** (en inglés).

---

## Índice

<details>
<summary>Sección 1 — El modelo</summary>

- [AI](#ai)
- [Model](#model)
- [Parameters](#parameters)
- [Training](#training)
- [Inference](#inference)
- [Effort](#effort)
- [Token](#token)
- [Next-token prediction](#next-token-prediction)
- [Non-determinism](#non-determinism)
- [Model provider](#model-provider)
- [Harness](#harness)
- [Model provider request](#model-provider-request)
- [Input tokens](#input-tokens)
- [Output tokens](#output-tokens)
- [Prefix cache](#prefix-cache)
- [Cache tokens](#cache-tokens)

</details>

<details>
<summary>Sección 2 — Sesiones, ventanas de contexto y turnos</summary>

- [Stateless](#stateless)
- [Context](#context)
- [Context window](#context-window)
- [Stateful](#stateful)
- [Agent](#agent)
- [System prompt](#system-prompt)
- [Session](#session)
- [Turn](#turn)

</details>

<details>
<summary>Sección 3 — Tools y entorno</summary>

- [Environment](#environment)
- [Filesystem](#filesystem)
- [Tool](#tool)
- [Tool call](#tool-call)
- [Tool result](#tool-result)
- [MCP](#mcp)
- [Permission request](#permission-request)
- [Permission mode](#permission-mode)
- [Agent mode](#agent-mode)
- [Sandbox](#sandbox)

</details>

<details>
<summary>Sección 4 — Modos de falla</summary>

- [Sycophancy](#sycophancy)
- [Hallucination](#hallucination)
- [Parametric knowledge](#parametric-knowledge)
- [Knowledge cutoff](#knowledge-cutoff)
- [Contextual knowledge](#contextual-knowledge)
- [Attention relationship](#attention-relationship)
- [Attention budget](#attention-budget)
- [Attention degradation](#attention-degradation)
- [Smart zone](#smart-zone)

</details>

<details>
<summary>Sección 5 — Handoffs</summary>

- [Clearing](#clearing)
- [Handoff](#handoff)
- [Primary source](#primary-source)
- [Secondary source](#secondary-source)
- [Handoff artifact](#handoff-artifact)
- [Spec](#spec)
- [Ticket](#ticket)
- [Compaction](#compaction)
- [Autocompact](#autocompact)

</details>

<details>
<summary>Sección 6 — Memoria y conducción</summary>

- [Memory system](#memory-system)
- [AGENTS.md](#agentsmd)
- [Progressive disclosure](#progressive-disclosure)
- [Context pointer](#context-pointer)
- [Skill](#skill)
- [Subagent](#subagent)

</details>

<details>
<summary>Sección 7 — Patrones de trabajo</summary>

- [Human-in-the-loop](#human-in-the-loop)
- [AFK](#afk)
- [Automated check](#automated-check)
- [Automated review](#automated-review)
- [Human review](#human-review)
- [Vibe coding](#vibe-coding)
- [Design concept](#design-concept)
- [Grilling](#grilling)
- [Prototyping](#prototyping)
- [DX](#dx)
- [AX](#ax)

</details>

## Sección 1 — El modelo

### AI

Una etiqueta móvil, no una tecnología. "IA" no nombra una cosa fija como sí lo hacen [modelo](#model) o [token](#token): apunta a lo que los computadores recién logran hacer de manera impresionante. Ahora mismo apunta a los grandes modelos de lenguaje. Antes apuntó a cosas muy distintas:

| Época        | Qué significaba "IA"                                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| Años 50      | Razonamiento simbólico: demostradores de teoremas, programas de damas.                                         |
| Años 60 y 70 | Programas simbólicos basados en reglas: ELIZA, SHRDLU.                                                         |
| Años 80      | Sistemas expertos: miles de reglas si-entonces escritas a mano que codificaban la pericia humana.              |
| Años 90      | Búsqueda en árboles de juego: Deep Blue le gana a Kasparov (1997). Los investigadores evitaban la palabra "IA" |
| Años 2000    | Aprendizaje automático estadístico: filtros de spam, recomendadores. Se vendía como "machine learning"         |
| Años 2010    | Aprendizaje profundo: reconocimiento de imágenes (AlexNet, 2012), AlphaGo (2016).                              |
| Años 2020    | Grandes modelos de lenguaje: ChatGPT (2022) hizo que "IA" significara chatbots                                 |

El puntero se mueve por un mecanismo conocido, que a veces se llama el efecto IA: una vez que una técnica funciona de forma confiable se la rebautiza (es "solo" búsqueda, "solo" estadística) y la palabra "IA" se corre hacia el siguiente problema sin resolver. La observación es vieja. Bertram Raphael lo puso así en 1971: "IA es un nombre colectivo para los problemas que todavía no sabemos resolver bien con un computador". La versión de Larry Tesler, de alrededor de 1979: "Inteligencia es todo lo que las máquinas aún no han hecho".

Por esto las conversaciones sobre IA tan seguido pasan de largo una al lado de la otra. Una afirmación como "la IA no puede razonar" o "la IA está sobrevalorada" lleva una fecha oculta: puede estar hablando de sistemas expertos, de clasificadores de imágenes de la década de 2010 o del LLM del mes pasado, y cada referente sostiene una conclusión distinta. Cuando una discusión sobre IA se traba, el arreglo suele ser cambiar la palabra por el término preciso que en realidad se quiere decir: el modelo, el [harness](#harness), el [agente](#agent), el [contexto](#context) que se le dio.

_Evita:_ "IA" en cualquier afirmación técnica. Nombra la parte a la que te refieres. "AI coding" como etiqueta de la práctica está bien; "la IA está alucinando" no.

_Uso:_

"El CTO quiere saber si la IA podría hacerse cargo de la cola de triaje."

"Traduce eso antes de dimensionarlo: se refiere a un LLM dentro de un harness con acceso al sistema de tickets. 'IA' a secas no es una spec."

### Model

Los [parámetros](#parameters). [Sin estado](#stateless): solo hace [predicción del siguiente token](#next-token-prediction) y nada más. "Claude Opus 4.x" y "GPT-5.x" son modelos. Por sí solo, un modelo no puede hacer nada agéntico: necesita un [harness](#harness).

Un modelo no puede leer archivos, ejecutar comandos, navegar la web ni recordar lo de ayer: recibe [tokens](#token) y predice tokens de salida, una vez por cada [petición al proveedor del modelo](#model-provider-request). Todo lo que parece un [agente](#agent) trabajando (elegir [tools](#tool), leer resultados, repetir el ciclo hasta terminar la tarea) es el harness orquestando muchas de esas predicciones seguidas.

Los [proveedores del modelo](#model-provider) ofrecen los modelos en niveles: uno grande, el más inteligente pero lento y caro, y otros más chicos, más rápidos y baratos pero menos capaces. Elegir el nivel es una decisión real (pesado para planificar y depurar casos difíciles, liviano para cambios mecánicos), y los harness permiten cambiarlo a mitad de [sesión](#session).

Ser estricto con la palabra también afila el diagnóstico. "El modelo es malo para esto" es una afirmación específica: el mismo modelo en otro harness, o con otro [contexto](#context), suele comportarse completamente distinto. Antes de culpar al modelo, revisa qué se le dio: la mayoría de las salidas decepcionantes se explican por el contexto o el harness, no por los parámetros.

_Uso:_

"¿Cambiamos el modelo de Sonnet a Opus para el paso de planificación?"

"Pruébalo, pero el harness es lo que hace casi todo el trabajo en esta tarea. Cambiar el modelo no sirve de nada si el [system prompt](#system-prompt) y las tools están mal."
</content>

### Parameters

Los números dentro de un [modelo](#model) (a veces miles de millones de ellos), ajustados durante el [entrenamiento](#training). Todo lo que el modelo "sabe" vive en ellos. El entrenamiento los fija; la [inferencia](#inference) los usa sin tocarlos. También se los llama _pesos_.

En términos mecánicos, los parámetros son lo que convierte la entrada en salida. La [predicción del siguiente token](#next-token-prediction) es un cálculo gigantesco: los [tokens](#token) de la [ventana de contexto](#context-window) entran, se multiplican a través de los parámetros, y sale una predicción para el siguiente token. No hay una base de datos de hechos dentro del modelo, ni una tabla de consulta de código: solo estos números, dispuestos para que el cálculo tienda a producir una salida útil. Los hechos que el modelo puede recitar desde el entrenamiento, como una API de librería estándar, son [conocimiento paramétrico](#parametric-knowledge): están guardados en los parámetros, no se recuperan de ninguna parte.

El detalle que vale la pena internalizar es que los parámetros quedan congelados después del entrenamiento. Nada de lo que hagas en una [sesión](#session) los cambia: ninguna corrección que hagas, ningún código que le muestres, ningún error del que aprenda. Cada sesión corre sobre los mismos números. Por eso el modelo es [sin estado](#stateless), por eso su conocimiento incorporado se detiene en la [fecha de corte del conocimiento](#knowledge-cutoff), y por eso cualquier cosa específica de un proyecto tiene que llegar vía [contexto](#context) en su lugar. La única forma de cambiar los parámetros es más entrenamiento, lo que produce, en la práctica, un modelo distinto.

_Uso:_

"¿Podemos afinarlo con nuestro código?"

"Eso actualizaría los parámetros: sería un modelo distinto después. Para un solo proyecto casi siempre sale más barato cargar el código como contexto que reentrenar."
</content>

### Training

El proceso que fija los parámetros de un [modelo](#model): sus [parámetros](#parameters) se ajustan exponiéndolo a enormes volúmenes de texto para mejorar la [predicción del siguiente token](#next-token-prediction). Es un proceso único y caro que hace el [proveedor del modelo](#model-provider). Incluye tanto el pre-entrenamiento (la corrida masiva) como el post-entrenamiento (ajustes posteriores como seguir instrucciones y seguridad); la distinción no importa al nivel de este glosario.

El mecanismo es repetición a escala: mostrarle al modelo un fragmento de texto, hacer que prediga el siguiente [token](#token), empujar los parámetros hacia lo que de verdad fue el siguiente token, y repetir a través de billones de tokens. Nada queda guardado como hechos o reglas: todo lo que el modelo "sabe" es un efecto secundario de volverse mejor prediciendo, comprimido en los parámetros como [conocimiento paramétrico](#parametric-knowledge).

Dos consecuencias importan en el día a día. El entrenamiento termina en un punto del tiempo, así que el modelo tiene una [fecha de corte del conocimiento](#knowledge-cutoff): no vio la versión de la librería a la que actualizaste el mes pasado. Y el entrenamiento no es algo que tú puedas hacer: cuando el modelo no conoce tu código, tus convenciones o tus APIs internas, la solución nunca es "enséñale al modelo", sino poner ese material en el [contexto](#context), la única entrada que controlas.

_Uso:_

"¿Podemos lograr que conozca nuestra API interna?"

"No con entrenamiento: eso es un proceso de meses que hace el proveedor del modelo. Mejor carga la documentación de la API al contexto, esa es la palanca que sí tienes."
</content>

### Inference

Correr un [modelo](#model) ya entrenado para generar salida: lo que pasa en cada [petición al proveedor del modelo](#model-provider-request). Los [parámetros](#parameters) quedan fijos; el modelo solo hace [predicción del siguiente token](#next-token-prediction) sobre el [contexto](#context) que se le da. Es barata en comparación con el [entrenamiento](#training), pero se cobra por [token](#token) y es el costo dominante de usar un modelo.

La vida de un modelo se divide en dos fases:

| Fase          | Cuándo ocurre                      | Qué hace                                                              | Parámetros           |
| ------------- | ---------------------------------- | --------------------------------------------------------------------- | -------------------- |
| Entrenamiento | Una vez, antes del lanzamiento     | Produce los parámetros a partir de un corpus de entrenamiento         | Se están escribiendo |
| Inferencia    | Cada vez que alguien usa el modelo | Corre los parámetros congelados sobre tu contexto para generar tokens | Solo lectura         |

Nada de lo que hagas en tiempo de inferencia se escribe de vuelta en los parámetros: por eso una corrección que haces hoy no se mantiene mañana. El modelo que comete el mismo error en la siguiente [sesión](#session), después de que le explicaste el arreglo con cuidado, no te ignoró: es incapaz de aprender del intercambio. El modelo es [sin estado](#stateless); la continuidad tiene que venir de afuera, desde la [ventana de contexto](#context-window) o un [sistema de memoria](#memory-system).

Este mecanismo también explica cómo se cobra. Cada petición corre el modelo sobre el contexto completo, así que el costo escala con los [tokens de entrada](#input-tokens) y los [tokens de salida](#output-tokens), y un agente que hace docenas de llamadas a [tools](#tool) paga inferencia en cada ida y vuelta. Por eso el tamaño del contexto es tanto una cuestión de costo como de calidad.

_Uso:_

"¿Por qué la cuenta escala con el uso en vez de ser una licencia plana?"

"Estás pagando la inferencia: cada petición al proveedor del modelo corre el modelo en el hardware del proveedor. El entrenamiento ya pasó, pero el costo de la inferencia se acumula por petición, y un solo [turno](#turn) puede convertirse en muchas peticiones cuando se llaman tools."
</content>

### Effort

El esfuerzo es un dial para cuánto razona un [modelo](#model) antes de responder. Se fija por [petición al proveedor del modelo](#model-provider-request) y controla cuánto piensa el modelo antes de empezar a escribir la respuesta que ves. Ese pensamiento se genera en tiempo de [inferencia](#inference) como todo lo demás; el [harness](#harness) muchas veces lo oculta, pero es trabajo real que el modelo está haciendo.

Más esfuerzo cuesta más y corre más lento. El razonamiento se emite como [tokens](#token), se cobra como [tokens de salida](#output-tokens) aunque nunca los veas, y se produce de a uno por vez: así que subir el esfuerzo alarga la espera antes de que llegue la respuesta y aumenta la cuenta. El trade-off es más deliberación a cambio de velocidad y costo.

La mayoría de los harness exponen el esfuerzo como una escalera corta:

| Nivel  | Para qué sirve                                                                       |
| ------ | ------------------------------------------------------------------------------------ |
| Bajo   | Ediciones mecánicas, búsquedas, cambios bien especificados con un solo camino claro. |
| Medio  | Programación del día a día: el default habitual.                                     |
| Alto   | Bugs difíciles, decisiones de diseño, planes de varios pasos.                        |
| Máximo | Los problemas más duros, donde una respuesta equivocada sale cara de deshacer.       |

El síntoma de equivocarse corta para los dos lados. Si fijas el esfuerzo demasiado bajo en un problema difícil, obtienes una respuesta confiada y superficial que se saltó el razonamiento que el problema necesitaba: se lee bien y está mal de una forma que te cuesta después. Si lo pones en máximo para renombrar una línea, te sientas a esperar un pensamiento largo que no produce nada que el nivel más bajo no hubiera dado.

Ajusta el esfuerzo a la tarea, no a la [sesión](#session). Súbelo para la parte que de verdad es difícil de razonar, y bájalo para el trabajo mecánico alrededor.

_Uso:_

"Sigue arruinando este fix de concurrencia: se lo he explicado tres veces."

"Sube el esfuerzo. Es un bug que exige mucho razonamiento, y en el nivel default no está pensando lo suficiente antes de comprometerse con un enfoque."
</content>

### Token

La unidad atómica que un [modelo](#model) lee y escribe. Aproximadamente del tamaño de una palabra, pero no exactamente: las palabras comunes son un token, y las raras o largas se parten en varios. El tamaño de la [ventana de contexto](#context-window), el costo y la latencia se cuentan todos en tokens.

El texto se convierte en tokens mediante un tokenizador: un vocabulario fijo de decenas de miles de fragmentos, aprendido antes del [entrenamiento](#training), que parte cualquier entrada en una secuencia de elementos de ese vocabulario. El modelo nunca ve caracteres ni palabras. Todo texto se convierte a tokens al entrar, y la [predicción del siguiente token](#next-token-prediction) produce la salida de a un token por vez.

Como regla gruesa, un token equivale a unas tres cuartas partes de una palabra en inglés, así que mil tokens son unas 750 palabras. El código es menos predecible: las palabras clave y los modismos comunes se tokenizan de forma compacta, mientras que los identificadores generados, los hashes, los blobs en base64 y la salida minificada se parten en muchos tokens por "palabra". El patrón es este: el texto que aparecía seguido en el material de origen del tokenizador recibe codificaciones cortas y eficientes, y el que no aparecía queda picado en muchos pedazos chicos. Un hash como `a3f9c2e1` no apareció nunca en ninguna parte, así que se parte en varios tokens, mientras que `function` es uno solo. Por eso un archivo de apariencia pequeña, pero lleno de cadenas inusuales, puede ocupar una porción sorprendente de la ventana de contexto.

Los tokens son la unidad en la que se mide todo lo demás. El costo es por token: los proveedores facturan por separado los [tokens de entrada](#input-tokens) y los [tokens de salida](#output-tokens). La velocidad son tokens por segundo, porque la salida se genera de a un token por vez. Y la ventana de contexto es un número fijo de tokens, así que la cantidad de tokens de tus archivos decide cuánto cabe.

_Evita:_ "palabra". Los límites de un token no coinciden con los de una palabra, y las unidades que de verdad importan son tokens por segundo y tokens por dólar.

_Uso:_

"¿De qué tamaño va a salir este prompt?"

"Pásalo por el tokenizador. El schema es compacto, pero las claves del JSON son raras, así que se van a partir en más tokens de los que crees."

### Next-token prediction

Lo que el [modelo](#model) realmente hace. Dado un [contexto](#context), toma una muestra de un [token](#token) siguiente, lo agrega, y vuelve a correr. Toda salida (una frase, un [tool call](#tool-call), un archivo de mil líneas) se construye de a un token por vez. El modelo no tiene otro modo de operar.

Cada paso funciona igual: los tokens de la [ventana de contexto](#context-window) pasan por los [parámetros](#parameters), que producen una probabilidad para cada token del vocabulario (este es muy probable que siga, aquel menos). Se toma una muestra de un token a partir de esas probabilidades, se agrega, y el ciclo vuelve a correr con el contexto un poco más largo. Ese paso de muestreo es la razón por la que el mismo prompt produce salidas distintas en corridas distintas: el [no determinismo](#non-determinism) está incorporado al mecanismo, no es un bug agregado encima.

Tener presente este mecanismo explica comportamientos que de otro modo parecen extraños. El modelo nunca revisa si un token es _verdadero_ antes de emitirlo, solo si es _probable_, y ahí está la raíz de la [alucinación](#hallucination). Se compromete con cada token a medida que avanza, así que una primera frase que suena segura puede desviar el resto de la respuesta. Y como los [tokens de salida](#output-tokens) se producen estrictamente de a uno por vez, la velocidad de generación pone un piso a qué tan rápido puede trabajar cualquier [agente](#agent).

_Uso:_

"¿Cómo 'decide' el agente llamar a una tool?"

"No decide: es predicción del siguiente token de principio a fin. El tool call es solo una cadena estructurada que el [harness](#harness) extrae del flujo de salida."
</content>

### Non-determinism

La misma entrada puede producir salidas distintas. Corre un [modelo](#model) dos veces con el mismo [contexto](#context) y puedes obtener dos respuestas diferentes: a veces una palabra, a veces un enfoque completamente distinto. No hace falta que cambie nada en tu código para que esto pase.

Es una propiedad de cómo los modelos generan texto, y de cómo los [proveedores del modelo](#model-provider) sirven las [peticiones](#model-provider-request). Durante la [inferencia](#inference), el modelo produce una distribución de probabilidad sobre los posibles [tokens](#token) siguientes y se toma una muestra de ahí, normalmente con algo de aleatoriedad a propósito, porque elegir siempre el token más probable produce texto repetitivo y de peor calidad. Un token muestreado distinto al principio de una respuesta cambia todos los tokens que vienen después, y así es como una sola palabra distinta se convierte en un enfoque completamente distinto. El servicio del lado del proveedor agrega más variación encima: las peticiones se agrupan en lotes sobre hardware compartido, y diferencias mínimas de punto flotante entre lotes pueden inclinar una decisión reñida entre dos tokens. No hay ningún ajuste que puedas activar para que esto desaparezca del todo.

Espera un rango de resultados de un [agente](#agent) en la misma tarea. La mayoría de las respuestas caen dentro de una curva de campana razonable de calidad (por eso el no determinismo es tolerable), pero las colas son reales: algunos días el modelo se va a sentir agudo, otros va a parecer que perdió el hilo. Misma tarea, tiradas de dados distintas. Esto tiene dos consecuencias prácticas. Reintentar es una estrategia legítima: un intento fallido es una sola extracción de la distribución, y un intento nuevo sobre la misma tarea puede simplemente salir mejor. Y la verificación importa más de lo que importaría con tools deterministas: no puedes probar el comportamiento de un agente una vez y confiar en que se va a repetir, así que las [verificaciones automatizadas](#automated-check) tienen que atrapar las malas tiradas.

Cuidado con sobre-narrar esto. Los humanos son máquinas de encontrar patrones, y una racha de corridas malas puede sentirse como prueba de que "el modelo empeoró esta semana". Casi siempre es solo la distribución.

_Uso:_

"Claude ha estado pésimo hoy. ¿Sacaron una versión peor?"

"Probablemente no: la salida del modelo es no determinista. Vas a tener días buenos y días malos con la misma tarea. Intenta de nuevo mañana antes de salir a buscar una causa."
</content>

### Model provider

Lo que sirve un [modelo](#model) para [inferencia](#inference). Normalmente es un servicio remoto (Anthropic, OpenAI, Google), pero también puede ser local: Ollama, LM Studio, llama.cpp corriendo en tu propia máquina. El [harness](#harness) no corre el modelo por sí mismo, se lo pide a un proveedor.

El proveedor es dueño de la maquinaria: los [parámetros](#parameters) viven en su hardware, y cada [petición al proveedor del modelo](#model-provider-request) es el harness mandando [tokens](#token) por la red y recibiendo predicciones de vuelta. Eso convierte al proveedor en la fuente de toda una categoría de problemas que se le achacan por error al modelo o al harness: los límites de tasa, la capacidad degradada y las caídas de servicio viven ahí. Cuando el [agente](#agent) se traba a mitad de [sesión](#session) o falla en cada [turno](#turn), la página de estado del proveedor es lo primero que vale la pena revisar.

El proveedor también fija las condiciones comerciales: el precio por token para [tokens de entrada](#input-tokens) y [tokens de salida](#output-tokens), los descuentos de [caché de prefijo](#prefix-cache), y qué modelos están disponibles en absoluto. Nota que el proveedor y quien fabrica el modelo pueden ser empresas distintas: Bedrock, Vertex y OpenRouter sirven modelos de otros.

Los proveedores locales cambian capacidad por control: los modelos que caben en tu propio hardware son mucho más chicos que los de punta, pero nada sale de la máquina y no hay cuenta por token.

_Uso:_

"¿Podemos correr esto sin conexión para el cliente aislado de red?"

"Cambia el proveedor del modelo por uno local: Ollama o llama.cpp en su máquina. Al harness no le importa, solo pega contra otro endpoint."
</content>

### Harness

Todo lo que rodea al [modelo](#model) y lo convierte en un [agente](#agent): [tools](#tool), [system prompt](#system-prompt), [gestión de la ventana de contexto](#context-window), permisos y hooks. **Claude.ai** y **Claude Code** corren sobre el mismo modelo y se comportan distinto porque sus harnesses difieren.

El modelo por sí solo hace una sola cosa: recibe texto y produce texto. No puede leer un archivo, ejecutar un comando ni recordar el [turno](#turn) anterior. Todo eso lo aporta el harness. Él arma el [contexto](#context) de cada [petición al proveedor del modelo](#model-provider-request), ejecuta los [tool calls](#tool-call) que el modelo pide, le devuelve los [tool results](#tool-result), guarda el historial de la [sesión](#session), te pide permiso antes de acciones riesgosas y decide cuándo [compactar](#compaction). El bucle del agente (el modelo propone, el harness ejecuta, y vuelta a empezar) lo corre el harness.

Esto importa para diagnosticar. Cuando el comportamiento cambia entre dos productos, o entre ayer y hoy, la variable no suele ser el modelo: es el harness. Un system prompt distinto, otro conjunto de tools, un permiso con el default cambiado o una nueva estrategia de gestión del contexto alteran el comportamiento sin que el modelo haya cambiado en nada. También significa que el harness es donde vive casi toda tu configuración: los archivos [AGENTS.md](#agentsmd), los ajustes de permisos y los hooks son instrucciones para el harness, no para el modelo.

Ejemplos: Claude Code, Cursor, Codex CLI, y también Claude.ai, que es un harness de chat y no uno de programación.

_Uso:_

"Mismo modelo, ¿por qué Claude Code edita archivos y Claude.ai solo responde preguntas?"

"Harnesses distintos. Claude Code tiene tools de [sistema de archivos](#filesystem), otro system prompt y una capa de permisos. Acá el modelo no es la variable."

### Model provider request

Una ida y vuelta del [harness](#harness) al [proveedor del modelo](#model-provider). El harness manda el [contexto](#context) actual; el proveedor devuelve una respuesta (un [tool call](#tool-call) o una respuesta final). Un solo mensaje del usuario puede generar muchas peticiones al proveedor del modelo si el [agente](#agent) llama [tools](#tool): cada [tool result](#tool-result) dispara otra petición.

Cada petición carga con todo: el [system prompt](#system-prompt), toda la conversación hasta ese punto, cada tool result. El [modelo](#model) es [sin estado](#stateless), así que el proveedor no guarda nada entre peticiones: la petición cuarenta reenvía lo que mandó la treinta y nueve, más un tool result adicional. La [caché de prefijo](#prefix-cache) existe para que esta repetición salga a cuenta.

La petición es también la unidad de cobro. Los [tokens de entrada](#input-tokens), los [tokens de salida](#output-tokens) y los descuentos de caché se cuentan todos por petición, por eso una pregunta de aspecto inocente puede costar una cantidad sorprendente: el costo no es proporcional a tu mensaje, es proporcional al número de peticiones multiplicado por el tamaño del contexto que carga cada una.

Vale la pena distinguir la petición del [turno](#turn). Un turno es un intercambio contigo, y un solo turno ("arregla el test que falla") se despliega como una cadena de peticiones:

| Petición | El modelo devuelve                            | El harness entonces                    |
| -------- | --------------------------------------------- | -------------------------------------- |
| 1        | Tool call: correr los tests                   | Los corre, agrega la salida del fallo  |
| 2        | Tool call: leer el archivo de test            | Agrega el contenido del archivo        |
| 3        | Tool call: leer el archivo fuente             | Agrega el contenido del archivo        |
| 4        | Tool call: editar el archivo fuente           | Aplica la edición, agrega el resultado |
| 5        | Tool call: correr los tests otra vez          | Los corre, agrega la salida del éxito  |
| 6        | Respuesta final: "arreglado, los tests pasan" | Te la muestra                          |

Seis peticiones para un turno, cada una reenviando todo el contexto de nuevo. Cuando te preguntes a dónde se fueron los [tokens](#token), cuenta las peticiones, no los turnos.

_Uso:_

"¿Una pregunta gastó cuarenta mil tokens?"

"Mira los tool calls: doce grep, ocho read, cuatro edits. Cada tool result dispara otra petición al proveedor del modelo, y el prefijo de toda la [sesión](#session) se reenvía cada vez."
</content>

### Input tokens

[Tokens](#token) que el [harness](#harness) manda en cada [petición al proveedor del modelo](#model-provider-request): el [system prompt](#system-prompt), el historial de la conversación, los [tool results](#tool-result), todo lo que el [modelo](#model) lee antes de escribir. Se cobran a una tarifa más baja que los [tokens de salida](#output-tokens), porque cuestan menos de procesar.

Al hacer [AI](#ai) coding, los tokens de entrada son la mayor parte de tu cuenta. El modelo es [sin estado](#stateless), así que cada [turno](#turn) reenvía toda la [sesión](#session) como entrada: tu primer mensaje, cada respuesta, cada tool result desde entonces. La entrada del turno cincuenta contiene los cuarenta y nueve turnos anteriores. Una sola petición al proveedor del modelo puede producir unos cientos de tokens de salida, pero reenviar cien mil tokens de entrada de historial acumulado.

La [caché de prefijo](#prefix-cache) reduce el costo: el historial que coincide exactamente con una petición anterior se cobra como [tokens de caché](#cache-tokens) baratos en vez de entrada a precio completo. Cuando el costo de entrada sigue doliendo, la solución es achicar lo que se reenvía: [limpiar](#clearing) o [compactar](#compaction) entre tareas.

_Uso:_

"La cuenta está alta pero el [agente](#agent) casi no está escribiendo nada."

"Son los tokens de entrada: cada turno reenvía toda la sesión. Sin la caché de prefijo vuelves a pagar el historial en cada petición."
</content>

### Output tokens

[Tokens](#token) que el [modelo](#model) genera de vuelta. Se cobran a una tarifa más alta que los [tokens de entrada](#input-tokens), normalmente unas cinco veces más, porque cuestan más cómputo producirlos.

Cuenta todo lo que el modelo escribe: la prosa que lees, el código que emite, los [tool calls](#tool-call), y cualquier pensamiento extendido que el modelo haga antes de responder. Esto último sorprende a la gente: los tokens de razonamiento se cobran como salida aunque el [harness](#harness) muchas veces no te los muestre, y subir el [esfuerzo](#effort) gasta más de ellos.

Los tokens de salida también marcan el ritmo de una [sesión](#session). El modelo lee la entrada rápido, pero genera la salida de a un token por vez, así que cuando un [turno](#turn) se siente lento, casi siempre es la salida que se está escribiendo, no la entrada que se está leyendo. Una espera larga casi siempre significa que viene una respuesta larga.

_Uso:_

"La sesión de refactor está gastando crédito aunque las entradas son chicas."

"El agente está reescribiendo archivos enteros en vez de parchar. Los tokens de salida cuestan más o menos cinco veces la tarifa de entrada: haz que emita ediciones y la cuenta baja."
</content>

### Prefix cache

El almacén del lado del [proveedor](#model-provider) que permite a [peticiones al proveedor del modelo](#model-provider-request) consecutivas saltarse el reproceso de un prefijo compartido. Cuando el comienzo de una petición coincide con el comienzo de una reciente (mismo [system prompt](#system-prompt), mismo historial hasta cierto punto), el proveedor reutiliza su trabajo previo y cobra esos [tokens](#token) como [tokens de caché](#cache-tokens) a una tarifa mucho más baja.

La caché vale la pena porque las sesiones crecen solo agregando al final. Cada petición reenvía todo el historial como [tokens de entrada](#input-tokens) (ver esa entrada para el porqué), y en una [sesión](#session) normal el historial solo cambia al final: cada petición es la anterior más unos mensajes nuevos. El proveedor procesa una sola vez el largo comienzo compartido, guarda el resultado, y retoma desde donde termina el prefijo. Sin la caché, una sesión de 50 [turnos](#turn) pagaría por reprocesar el turno uno cincuenta veces.

Las cachés también expiran. Cuánto tiempo se mantiene caliente una entrada varía según el proveedor del modelo, típicamente minutos, no horas. Deja una sesión inactiva más allá de esa ventana y la siguiente petición reconstruye el prefijo a precio completo una vez, antes de que el cacheo se reanude. Esto es sobre todo un problema de quien construye el [harness](#harness); como usuario, el efecto visible es que las peticiones después de una pausa larga cuestan más que las de antes.

_Uso:_

"¿Por qué se disparó la cuenta a mitad de la sesión?"

"El harness empezó a inyectar la hora actual en el system prompt en cada turno. La caché de prefijo se rompe en el primer token que cambia, así que cada petición después de eso se cobró a tarifa completa."
</content>

### Cache tokens

[Tokens de entrada](#input-tokens) que el [proveedor](#model-provider) tiene cacheados de una [petición al proveedor del modelo](#model-provider-request) anterior, así no tiene que reprocesarlos. Cuando peticiones consecutivas comparten un prefijo, el proveedor reutiliza el trabajo mediante su [caché de prefijo](#prefix-cache) y cobra la porción cacheada a una tarifa mucho más baja. Es la palanca que hace que las [sesiones](#session) largas sean costeables: sin ella, cada [turno](#turn) vuelve a pagar todo el historial.

La razón por la que esto importa es cómo se cobran las sesiones. El [modelo](#model) es [sin estado](#stateless), así que cada petición reenvía toda la conversación (el [system prompt](#system-prompt), cada mensaje, cada [tool result](#tool-result)) como tokens de entrada. Para el turno cincuenta, cada petición carga cincuenta turnos de historial, y pagarías tarifa completa por todo eso, cada vez. La caché cambia la cuenta: los tokens que el proveedor ya procesó en un prefijo idéntico se cobran como tokens de caché, muchas veces a una décima parte de la tarifa de entrada o menos. En una sesión larga, la mayor parte de lo que envías son tokens de caché, y la cuenta se mantiene razonable.

Un ejemplo muestra cuándo los tokens se cachean y cuándo no. Cada letra representa un bloque de contenido de la conversación; cada petición manda la conversación hasta ese punto:

| La petición manda | Cacheado | Cobrado a tarifa completa | Por qué                                                   |
| ----------------- | -------- | ------------------------- | --------------------------------------------------------- |
| `AB`              | nada     | `AB`                      | Primera petición: no hay nada contra qué comparar         |
| `ABC`             | `AB`     | `C`                       | `AB` es un prefijo exacto de la petición anterior         |
| `ABCD`            | `ABC`    | `D`                       | El prefijo sigue intacto                                  |
| `AXCD`            | `A`      | `XCD`                     | Una edición cambió `B` por `X`; la coincidencia falla ahí |

La caché es frágil de una forma específica: hace coincidir prefijos exactos. Si algo cambia más temprano en la conversación (el [harness](#harness) reordena contenido, se actualiza una marca de tiempo, cambia la representación de un archivo), la caché falla desde ese punto en adelante y todo lo que sigue se cobra a tarifa completa de entrada. Las cachés también expiran después de unos minutos de inactividad, así que una sesión retomada tras una pausa larga vuelve a pagar su historial una vez. Cuando el costo de una sesión salta sin una causa obvia, compara los tokens de caché contra los tokens de entrada en el reporte de uso: una caché rota aparece ahí primero.

_Uso:_

"El costo en sesiones largas es brutal: ocho dólares por un refactor."

"Revisa los tokens de caché. Si el harness está reordenando el system prompt o los archivos entre turnos, el prefijo se rompe y vuelves a pagar tarifa completa de entrada en cada petición."
</content>

## Sección 2 — Sesiones, ventanas de contexto y turnos

### Stateless

No conserva nada de una petición a otra. El [modelo](#model) no tiene estado entre [peticiones al proveedor del modelo](#model-provider-request): cada petición reenvía la [ventana de contexto](#context-window) completa, porque el modelo no tiene otra forma de ver algo más. Un [agente](#agent) no tiene estado entre [sesiones](#session) por defecto: una sesión nueva arranca vacía, sin rastro de las anteriores. Es la contraparte de [con estado](#stateful).

El modelo en sí es permanentemente sin estado: sus [parámetros](#parameters) quedan congelados después del [entrenamiento](#training), y nada de lo que hagas en la [inferencia](#inference) los cambia. El modelo no aprende de tus correcciones, no recuerda que le dijiste lo mismo ayer, y no te está conociendo, por mucho que la conversación se sienta así. La sensación de continuidad dentro de una sesión la fabrica el [harness](#harness), que guarda la transcripción y la reenvía con cada petición. El modelo no recuerda la conversación: la vuelve a leer.

La consecuencia práctica: si quieres que algo se recuerde entre sesiones, tienes que escribirlo en algún lugar que el agente vuelva a leer. Para eso existen los archivos [AGENTS.md](#agentsmd), los [sistemas de memoria](#memory-system) y los [artefactos de handoff](#handoff-artifact): archivos que se cargan en el [contexto](#context) de las sesiones futuras, haciendo de memoria donde el modelo no tiene ninguna. Cuando el agente sigue cometiendo un error que ya le corregiste antes, la pregunta no es por qué no aprendió (no puede), sino dónde debería quedar escrita esa corrección para que cada sesión futura la lea.

_Uso:_

"¿Por qué olvida la convención cada vez que [limpio el contexto](#clearing)?"

"El modelo no tiene estado: la sesión nueva arranca vacía. Si quieres que se conserve, escríbelo en AGENTS.md o en un archivo de memoria que el harness cargue al empezar la sesión."

### Context

La información relevante que el [agente](#agent) tiene a mano ahora mismo. Es el sustantivo abstracto: no es la entrada cruda que ve el modelo (eso es la [ventana de contexto](#context-window)), ni el historial corrido (eso es la [sesión](#session)), sino _lo que el agente sabe que es pertinente para la tarea_. "Cargar algo al contexto" significa hacerlo parte de ese conjunto; "ingeniería de contexto" es la disciplina de curarlo.

Los tres términos se separan con claridad:

| Término             | Qué nombra                                                                     |
| ------------------- | ------------------------------------------------------------------------------ |
| Contexto            | La información relevante para la tarea que el agente tiene ahora mismo         |
| Ventana de contexto | La secuencia literal de [tokens](#token) que el modelo ve en cada petición |
| Sesión              | La conversación en curso que guarda el [harness](#harness)                 |

La separación importa porque el contexto mide calidad, no cantidad. Una ventana de contexto puede estar casi llena y el contexto seguir siendo pobre: miles de tokens de resultados de tools obsoletos, ninguno relacionado con la tarea. También puede estar casi vacía y el contexto ser excelente: la única definición de tipo de la que depende la tarea.

La mayoría de las fallas del día a día se rastrean hasta el contexto. Cuando el agente inventa una API, contradice una decisión o adivina un schema, la primera pregunta es qué había en el contexto cuando lo hizo: casi siempre el dato relevante nunca se cargó, o quedó enterrado bajo la [attention degradation](#attention-degradation). El arreglo es curar: cargar lo que la tarea necesita y dejar fuera lo que no.

_Uso:_

"Sigue inventando campos que no están en el tipo."

"El archivo del tipo no está en contexto: está leyendo los call sites y adivinando. Cárgale la definición primero."

### Context window

Todo lo que el [modelo](#model) ve en cada [petición al proveedor del modelo](#model-provider-request). Es finita, específica de cada modelo, y la _única_ superficie por la que el modelo percibe algo.

Es una única secuencia de [tokens](#token): el [system prompt](#system-prompt), la conversación hasta ese punto, y cada [tool result](#tool-result) que el [harness](#harness) haya vuelto a meter. Si algo está en esa secuencia, el modelo puede usarlo; si no está, el modelo no sabe que existe: ni tu código base, ni el archivo que editaste ayer, ni la instrucción que diste hace tres sesiones. Cualquier cosa fuera de la ventana tiene que traerse, casi siempre con un [tool call](#tool-call), antes de que pueda afectar algo.

Que sea finita significa que se llena. Cada turno agrega más (tus mensajes, las respuestas del modelo, los tool results), y una [sesión](#session) larga termina topando el límite, lo que obliga a [compactar](#compaction) o a [limpiar](#clearing). También significa que todo lo que hay en la ventana compite entre sí: cada token que cargas es uno menos disponible para el resto, y el contenido que no necesitabas igual ocupa el [attention budget](#attention-budget) del modelo. La postura práctica es tratar la ventana como un presupuesto: cargar lo que la tarea necesita y dejar el resto afuera.

_Evita:_ "memoria". La ventana de contexto es estado de trabajo y no persiste entre sesiones. La [memoria](#memory-system) es un concepto aparte que se monta encima.

_Uso:_

"¿Puedo simplemente pegar todo el monorepo en el prompt?"

"La ventana de contexto tiene 200k tokens: eso es como un quinto del repo. Elige los archivos que la tarea toca y deja el resto detrás de un tool call."

### Stateful

Conserva información de un momento a otro. Una [sesión](#session) tiene estado entre [turnos](#turn): el [contexto](#context) se acumula a medida que la sesión avanza, y por eso las sesiones largas derivan hacia la [dumb zone](#smart-zone). Un [agente](#agent) puede volverse con estado entre **sesiones** si se le agrega un [sistema de memoria](#memory-system) que persista información en el [entorno](#environment) y la recargue al empezar sesiones futuras. El [modelo](#model) nunca tiene estado; cualquier continuidad aparente es el [harness](#harness) reinyectando contexto. Es la contraparte de [sin estado](#stateless).

Dónde vive el estado en cada capa:

| Capa    | ¿Tiene estado? | Cómo                                                                                                                                      |
| ------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Modelo  | Nunca          | Los [parámetros](#parameters) están congelados; solo ve lo que llega en cada petición                                                 |
| Sesión  | Entre turnos   | El harness agrega cada mensaje y cada [tool result](#tool-result) al contexto                                                       |
| Harness | Entre sesiones | Archivos de memoria, [AGENTS.md](#agentsmd), [artefactos de handoff](#handoff-artifact): quedan escritos y se recargan después |
| Entorno | Siempre        | Los archivos persisten esté o no corriendo una sesión                                                                                     |

El estado de cada capa se construye releyendo algo que quedó guardado en la capa de abajo: la sesión se siente continua porque el harness reenvía el historial de mensajes al modelo sin estado, y el agente recuerda entre sesiones porque el harness recarga archivos desde el entorno. El modelo mismo nunca guarda ningún estado.

El estado no siempre es deseable. Todo lo que se arrastra influye en lo que viene después, así que un supuesto equivocado hecho al principio de una sesión también se arrastra. [Limpiar el contexto](#clearing) es el acto deliberado de descartar el estado de la sesión y partir de nuevo desde lo que quedó escrito.

_Uso:_

"Recordó mis preferencias de ayer. ¿Eso significa que el modelo las aprendió?"

"No, el agente tiene estado porque el harness las escribió en un archivo de memoria y las recargó al empezar la sesión. El modelo en sí no vio nada de ayer."

### Agent

Un [modelo](#model) puesto en un [harness](#harness) con [tools](#tool), un [system prompt](#system-prompt) y una [ventana de contexto](#context-window), que toma [turnos](#turn) con un usuario. _Claude Code es un agente. Cursor es un agente. Claude.ai es un agente._ Un agente es con lo que en realidad hablas: es el modelo en movimiento, configurado para un propósito.

A diferencia de la mayoría de los términos de este diccionario, "agente" no nombra una parte mecánica. El modelo es un archivo de [parámetros](#parameters); el harness es software al que puedes apuntar. El agente no es ninguna de las dos cosas: es la unidad a la que le hablas. La gente antropomorfiza la [IA](#ai) todo el tiempo, y el agente es la unidad antropomorfizada: aquello a lo que le delegas, lo que lee tu mensaje y responde, el "él" de "él rompió el build otra vez". Cuando dices que el agente hizo algo, quieres decir que lo hizo el modelo más el harness, pero te diriges a la combinación como si fuera un solo actor.

La idea es más vieja que esta ola de IA. Los agentes de software (programas a los que delegas un objetivo y que actúan en tu nombre) llevan siendo un concepto desde que existe la IA.

_Evita:_ "la IA", "el bot" (son demasiado vagos: ocultan si te refieres a los parámetros o a la cosa con harness).

_Uso:_

"¿Qué agente estás usando para la migración?"

"Claude Code en local, Cursor para el trabajo de UI: mismo modelo por debajo, harnesses distintos."

### System prompt

Las instrucciones que el [harness](#harness) antepone a cada [petición al proveedor del modelo](#model-provider-request): el brief permanente del [agente](#agent), quién es, cómo comportarse, qué [tools](#tool) puede llamar, qué convenciones seguir. Suele mantenerse estable durante toda la [sesión](#session).

El system prompt lo escribe el proveedor del harness, no tú, y en los harnesses de código suele ser grande: a menudo decenas de miles de [tokens](#token) de reglas de comportamiento, descripciones de tools y manejo de casos borde, todo pagado como [tokens de entrada](#input-tokens) en cada [turno](#turn). Tus propias instrucciones permanentes viajan junto a él: archivos como [AGENTS.md](#agentsmd) se cargan al lado del system prompt al empezar la sesión, así que el [modelo](#model) lee el brief del proveedor y el tuyo juntos antes de ver tu mensaje.

Como es idéntico en cada petición, forma el inicio de la [caché de prefijo](#prefix-cache), y esa es parte de la razón por la que los harnesses lo mantienen fijo durante toda la sesión en lugar de irlo editando sobre la marcha.

Los modelos están entrenados para priorizar el system prompt por sobre los mensajes del usuario. Por eso, cuando un agente insiste en una convención que nunca pediste, o formatea la salida de una forma que no logras cambiar, casi siempre está obedeciendo a su system prompt, y tu mensaje está perdiendo la discusión. Algunos harnesses son personalizables: te dan acceso completo al system prompt, así que puedes leer qué se le está diciendo de verdad al agente y cambiarlo.

_Uso:_

"Dos harnesses, mismo modelo, comportamiento totalmente distinto con el mismo prompt."

"System prompts distintos. Uno está ajustado para ediciones de código breves, el otro para explicar: ahí vive la divergencia, antes de que tu mensaje siquiera llegue."

### Session

Una interacción acotada con un [agente](#agent). Arranca vacía, acumula mensajes, [tool results](#tool-result) y archivos leídos, y termina cuando se [limpia](#clearing), se cierra o se [compacta](#compaction) en una sesión nueva. La sesión es lo que _llena_ la [ventana de contexto](#context-window): si la ventana de contexto es la caja, la sesión es lo que la va llenando de a poco. El trabajo demasiado grande para una sola ventana de contexto hay que repartirlo entre varias sesiones.

El historial de mensajes de la sesión es la memoria de trabajo del agente. El [modelo](#model) es [sin estado](#stateless), así que todo lo que parece recordar (lo que pediste, lo que dijeron los tests, lo que decidió hace tres turnos) está en el historial de mensajes, que se reenvía completo con cada [petición al proveedor del modelo](#model-provider-request). Lo que no está en la sesión no existe para el agente.

Esa memoria termina con la sesión. Una sesión nueva arranca de cero: el agente que conocía bien tu código base al final de la sesión de ayer no sabe nada de eso esta mañana. Lo que sobrevive es el [sistema de archivos](#filesystem): los archivos escritos durante una sesión los puede leer la siguiente, y en eso se apoyan los [handoffs](#handoff), los [sistemas de memoria](#memory-system) y los [AGENTS.md](#agentsmd).

Tú eliges dónde termina una sesión. Todo lo que hay en una sesión influye en cada [turno](#turn) posterior, así que tareas sin relación hechas en la misma sesión dejan residuos que tiñen la siguiente respuesta. Una tarea por sesión mantiene el contexto relevante; terminar una tarea es un buen momento natural para limpiar.

_Uso:_

"¿Cuánto puede durar una sesión antes de que se desarme?"

"Depende del trabajo: una refactorización acotada aguanta más nítida que una investigación abierta. Cuando la sesión se hincha, hazle handoff o compáctala, no sigas insistiendo."

### Turn

Un mensaje del usuario más todo lo que el [agente](#agent) hace en respuesta, hasta que le devuelve el turno al usuario. Contiene una o más [peticiones al proveedor del modelo](#model-provider-request): varias, si el agente llama [tools](#tool). Una pregunta aclaratoria cierra el turno; tu respuesta abre el siguiente. La jerarquía es [sesión](#session) **> Turno > Petición al proveedor del modelo**.

Lo que hace que valga la pena nombrar el turno es que su duración la decide el agente, no tú. Tú entregas un mensaje; el agente decide cuántos tool calls encadenar antes de devolver el turno. Un turno puede ser una respuesta de una frase o veinte minutos leyendo, editando y corriendo tests. Es la misma propiedad vista desde dos ángulos: los turnos largos son lo que hace posible trabajar en modo [AFK](#afk), y los turnos largos son también donde las cosas salen mal sin supervisión: para cuando el agente devuelve el turno, puede haberse alejado bastante de lo que querías decir.

El turno es además la unidad natural para dirigir al agente. Todo lo que pasa dentro de un turno ocurre sin ti; los espacios entre turnos son donde tú rediriges. La mayoría de los [harnesses](#harness) suaviza esto: puedes interrumpir a mitad de turno para detener al agente y redirigirlo, o escribir un mensaje mientras trabaja, que se lee cuando el turno termina. Si notas que sigues insatisfecho con dónde terminan los turnos, el arreglo suele ser pedir turnos más chicos (un plan primero, un paso a la vez), sacrificando autonomía a cambio de espacios más frecuentes para dirigir.

_Uso:_

"¿Un turno tomó dos minutos?"

"Hizo catorce [tool calls](#tool-call) dentro de ese turno: cada uno es una petición al proveedor del modelo separada. La latencia se acumula antes de que el agente por fin te devuelva el turno."

## Sección 3 — Tools y entorno

### Environment

El mundo sobre el que actúa el [agente](#agent): todo lo que queda fuera del [harness](#harness) y que el agente percibe mediante [tool results](#tool-result) y cambia mediante [tool calls](#tool-call). El harness _corre_ al agente; el entorno es donde el agente _trabaja_. Un archivo como [`AGENTS.md`](#agentsmd) vive en el entorno; el harness es quien lo carga en la [ventana de contexto](#context-window). Un [sistema de archivos](#filesystem) es el tipo de entorno más común, pero no el único (una base de datos, una API remota o una sesión de navegador también pueden ser entornos).

El agente solo ve el entorno cuando mira. Todo lo que sabe de él le llegó a través de un tool result, así que su imagen es una colección de instantáneas, cada una correcta en el momento en que se tomó. Si un archivo cambia después de que el agente lo leyó (lo editas a mano, un paso de build lo regenera), el agente sigue razonando sobre la copia vieja hasta que algo lo empuja a releerlo. Un agente que describe con seguridad un archivo que ya no es así suele ser esto: el entorno se movió, la instantánea no.

El entorno es además la capa que persiste: la única que siempre tiene [estado](#stateful). El contexto de una [sesión](#session) desaparece cuando la sesión termina, pero los archivos escritos en el entorno quedan ahí para que la próxima sesión los lea, que es justo de lo que dependen los [sistemas de memoria](#memory-system), los [artefactos de handoff](#handoff-artifact) y `AGENTS.md`. Todo lo que el agente deba seguir sabiendo mañana tiene que terminar en el entorno.

Tú decides qué tan grande es el entorno. Un [sandbox](#sandbox) lo achica, limitando lo que el agente puede alcanzar; agregar una [tool](#tool) lo extiende, poniendo a su alcance una base de datos o una API. Lo que queda dentro del límite es lo que el agente puede percibir y cambiar; todo lo que queda afuera no existe para el agente. Qué tan bien está armado el entorno para sostener el trabajo del agente es el [AX](#ax) del código base.

_Evita:_ usar "entorno" para el runtime o el harness mismo: el harness es el envoltorio, el entorno es el espacio de trabajo.

_Uso:_

"El agente no puede ver el schema de la base de staging."

"Conéctalo al entorno: dale una tool de `psql` acotada a solo lectura en staging. El harness está bien, simplemente no tiene nada sobre qué actuar."

### Filesystem

Un árbol de archivos y carpetas donde el [agente](#agent) lee, escribe y ejecuta: el tipo de [entorno](#environment) por defecto de un agente de código. [`AGENTS.md`](#agentsmd), las [skills](#skill), el código fuente, los scripts de build y las configuraciones de [tools](#tool) viven todos en un sistema de archivos. Cuando un [harness](#harness) "arranca en tu proyecto", está apuntando al agente hacia un sistema de archivos.

El agente lo toca solo a través de [tool calls](#tool-call): leer un archivo, escribir uno, correr un comando de shell. Nada en disco está en la [ventana de contexto](#context-window) hasta que un tool call lo carga, y eso es justo lo que le permite al agente trabajar en un repositorio mucho más grande que la ventana: el sistema de archivos guarda todo, el contexto guarda solo lo que la tarea actual leyó. Algunos harnesses cargan por defecto los nombres de archivo del directorio actual en la ventana de contexto (no el contenido, solo el árbol), que funcionan como [punteros de contexto](#context-pointer): el agente ve qué existe y lee los archivos que necesita.

Y es compartido contigo. Los archivos que el agente edita son los mismos que abres en tu editor y comparas en git: el sistema de archivos es el espacio de trabajo común donde revisas lo que hizo el agente.

_Uso:_

"¿Por qué no está leyendo mi AGENTS.md?"

"Está corriendo contra otro sistema de archivos: el [sandbox](#sandbox) montó el directorio padre, no la raíz del proyecto. Reapunta el harness."

### Tool

Una función que el [harness](#harness) expone para que el [agente](#agent) la llame: Read, Write, Bash, Search. Las tools son la forma en que un agente percibe y actúa sobre el [entorno](#environment): no puede ver el entorno salvo a través de [tool results](#tool-result), ni cambiarlo salvo a través de [tool calls](#tool-call). Cada tool call cuesta una [petición al proveedor del modelo](#model-provider-request) extra, porque el resultado tiene que volver al modelo antes de que decida qué hacer después.

Tools con las que viene casi cualquier agente de código:

| Tool   | Qué hace                                                              |
| ------ | --------------------------------------------------------------------- |
| Read   | Devuelve el contenido de un archivo como tool result                  |
| Write  | Crea o edita un archivo en el [sistema de archivos](#filesystem)  |
| Bash   | Corre un comando de shell y devuelve su salida                        |
| Search | Encuentra archivos o texto que calzan con un patrón en el código base |

Una tool queda definida por tres cosas: un nombre, una descripción de lo que hace y un schema para sus parámetros. El harness manda estas definiciones al [modelo](#model) en cada petición, y el modelo elige una tool de la misma forma en que produce todo lo demás: escribiendo [tokens](#token), en este caso un llamado estructurado con argumentos. El modelo nunca ejecuta nada él mismo; el harness lee el llamado, corre la función y devuelve el resultado.

La lista de tools define qué puede hacer el agente. Un modelo capaz con un set de tools angosto es un agente angosto: va a encauzar todo por lo que tenga a mano, que es por lo que los agentes se apoyan tanto en Bash: un shell es una sola tool que alcanza casi todo el sistema. Para darle a un agente una capacidad de forma limpia, se le agrega una tool; el [MCP](#mcp) es el estándar para conectar tools desde fuera del harness.

Las definiciones de tools ocupan [contexto](#context) en cada petición, así que un set de tools grande tiene un costo fijo antes de que se llame a ninguna, y tener muchas tools descritas de forma parecida hace que al modelo le cueste más elegir la correcta.

_Uso:_

"¿Puede el agente consultar staging directamente?"

"Agrega una tool de `psql` al harness, acotada a solo lectura en staging. Sin una tool para eso, el agente queda ciego a todo lo que esté fuera del sistema de archivos."

### Tool call

La salida del [modelo](#model) que nombra una [tool](#tool) y sus argumentos: puro texto estructurado. No hace nada por sí sola; el [harness](#harness) tiene que leerla y ejecutarla. La produce el modelo en una sola [petición al proveedor del modelo](#model-provider-request).

El ciclo de vida de un tool call:

| Paso | Quién   | Qué pasa                                                                                       |
| ---- | ------- | ---------------------------------------------------------------------------------------------- |
| 1    | Modelo  | Se entera de qué tools existen por las descripciones del [system prompt](#system-prompt) |
| 2    | Modelo  | Emite un llamado (nombre de la tool más argumentos, normalmente JSON) y se detiene             |
| 3    | Harness | Interpreta el llamado y lo revisa contra el [modo de permisos](#permission-mode)         |
| 4    | Harness | Lo ejecuta si está permitido                                                                   |
| 5    | Harness | Devuelve el resultado como [tool result](#tool-result) en la próxima petición            |

Un [turno](#turn) de trabajo del [agente](#agent) suele ser muchas de estas idas y vueltas encadenadas.

Como el llamado se genera por [predicción del siguiente token](#next-token-prediction) igual que todo lo demás, puede estar mal de la misma forma en que puede estar mal cualquier salida del modelo: una ruta que no existe, un flag que el comando no tiene, argumentos que parecen plausibles pero no son correctos. El harness ejecuta lo que se escribió, no lo que se quiso decir: una ruta mal tipeada no falla con gracia, edita el archivo equivocado.

_Uso:_

"Dijo que corrió los tests, pero los timestamps de los archivos no cambiaron."

"Mira la transcripción: ¿de verdad emitió un tool call, o solo describió que los corría? El modelo produce el llamado, pero si el harness no lo ejecutó, no pasó nada."

### Tool result

Lo que el [harness](#harness) devuelve después de ejecutar un [tool call](#tool-call): el contenido del archivo, la salida del comando, el error. La única vista que tiene el [agente](#agent) del [entorno](#environment). Viaja de vuelta al [modelo](#model) en la _siguiente_ [petición al proveedor del modelo](#model-provider-request), donde el modelo decide qué hacer con eso. Tool call y tool result son las dos puntas del mismo intercambio, ambas dentro de un [turno](#turn).

El ciclo de vida de un tool result:

| Paso | Quién   | Qué pasa                                                                           |
| ---- | ------- | ---------------------------------------------------------------------------------- |
| 1    | Harness | Ejecuta el tool call: corre el comando, lee el archivo                             |
| 2    | Harness | Captura el resultado: salida, contenido o error                                    |
| 3    | Harness | Lo agrega al [contexto](#context) como un mensaje                              |
| 4    | Harness | Manda todo el contexto al proveedor en la próxima petición al proveedor del modelo |
| 5    | Modelo  | Lee el resultado y decide: otro tool call, o una respuesta final                   |

El resultado se queda en el contexto por el resto de la [sesión](#session). Los tool results suelen ser el grueso del contexto de una sesión de código: cada archivo leído, cada test corrido, cada búsqueda entra completa y sigue ocupando [tokens](#token) mucho después de dejar de ser útil. Unos pocos resultados grandes (un log de tests verboso, un archivo generado leído entero) pueden empujar a una sesión hacia el borde de la [ventana de contexto](#context-window) más rápido que la conversación misma.

Como el resultado es todo lo que el modelo ve, el modelo no tiene forma de comprobar el entorno detrás de él. Si la salida se truncó, el comando falló en silencio, o el harness devolvió un error en vez del contenido, el modelo razona sobre lo que le llegó. Cuando la imagen que tiene el agente de tu sistema parece equivocada, ahí es donde hay que mirar: en algún lugar de la transcripción hay un resultado que dice algo distinto de lo que tú sabes que es cierto.

_Uso:_

"Está razonando sobre el archivo como si estuviera vacío."

"El tool result volvió como un rechazo de permiso, no como el contenido. El modelo solo vio el string de error: no tiene otra forma de ver el archivo."

### MCP

**Model Context Protocol.** Un protocolo para conectar servidores externos de tools a un [harness](#harness): así es como un [agente](#agent) consigue [tools](#tool) más allá de las que trae el harness de fábrica. El agente nunca "llama al MCP"; llama a una tool, y da la casualidad de que el harness consiguió esa tool desde un servidor MCP. También expone resources (datos de solo lectura) y prompts (plantillas reusables), pero proveer tools es el uso principal.

El protocolo resuelve un problema de integración. Sin un estándar, cada harness necesitaría su propia integración con Linear, su propia integración con Slack, su propia integración con la base de datos, escritas y mantenidas por separado para cada una. Con MCP, la integración se escribe una sola vez como servidor, y cualquier harness compatible con MCP puede usarla. El harness se conecta al servidor, el servidor anuncia qué tools ofrece, y esas tools quedan disponibles para el agente junto a las que ya traía.

El costo se paga en [contexto](#context). Cada tool que anuncia un servidor llega como una definición (nombre, descripción, schema de parámetros), y el [modelo](#model) solo puede llamar a las tools que conoce. El enfoque ingenuo carga todas las definiciones en la [ventana de contexto](#context-window) de entrada: instalas unos pocos servidores generosos y una [sesión](#session) arranca con miles de [tokens](#token) de schemas de tools antes de que hayas escrito nada, gastando [attention budget](#attention-budget) en tools que la tarea nunca va a usar.

Muchos harnesses hoy mitigan esto con búsqueda de tools: en vez de las definiciones completas, el contexto guarda un [puntero de contexto](#context-pointer) hacia las tools disponibles, y el agente busca una tool por nombre o propósito y carga su definición recién cuando la necesita. Si tu harness no hace esto, el costo de entrada sigue aplicando, y conviene habilitar solo los servidores que el proyecto realmente necesita.

_Uso:_

"El agente necesita leer tickets de Linear."

"Configura el harness para usar el servidor MCP de Linear: expone la API de Linear como tools que el agente puede llamar. Te ahorras escribir wrappers de tools a mano."

### Permission request

Lo que el [harness](#harness) le muestra al usuario antes de ejecutar un [tool call](#tool-call) que no está pre-aprobado. El [modelo](#model) produce un tool call; en vez de correrlo de inmediato, el harness se detiene y pregunta. Si apruebas, corre; si rechazas, el harness le informa el rechazo al modelo como un [tool result](#tool-result). Es el mecanismo con el que un harness mete a un humano en el [loop](#human-in-the-loop) para acciones riesgosas o sensibles.

El ciclo de vida de una solicitud de permiso:

| Paso | Quién   | Qué pasa                                                                                       |
| ---- | ------- | ---------------------------------------------------------------------------------------------- |
| 1    | Modelo  | Produce un tool call                                                                           |
| 2    | Harness | Lo revisa contra el [modo de permisos](#permission-mode) y cualquier aprobación guardada |
| 3    | Harness | Si está pre-aprobado: lo ejecuta de inmediato. Si no: se detiene y muestra la solicitud        |
| 4    | Usuario | Aprueba una vez, aprueba para el resto de la [sesión](#session), o rechaza                 |
| 5    | Harness | Ejecuta el llamado, o devuelve el rechazo como un tool result                                  |

Rechazar una solicitud dirige al agente. El modelo lee el rechazo como cualquier otro tool result y reacciona: prueba otro enfoque, o pregunta qué prefieres. La mayoría de los harnesses te dejan agregar un mensaje al rechazo, lo que convierte la solicitud en un punto de dirección: "así no, usa el script de migración" cae justo cuando el modelo está decidiendo qué hacer después.

El costo es que cada solicitud es una espera sincrónica sobre ti. El [agente](#agent) queda bloqueado hasta que respondes, lo cual está bien mientras estás mirando y es un problema cuando no lo estás: un agente que dispara solicitudes todo el rato no se puede dejar trabajando [AFK](#afk). El modo de permisos es el dial: qué llamados corren libres, cuáles preguntan primero, idealmente con un [sandbox](#sandbox) que haga seguro ampliar el conjunto libre.

_Uso:_

"Lleva diez minutos bloqueado en una solicitud de permiso, y yo estaba en una reunión."

"Ese es el costo del human-in-the-loop. Pre-aprueba las [tools](#tool) seguras para que la solicitud solo salte en los llamados de verdad riesgosos."

### Permission mode

La parte del [modo agente](#agent-mode) que controla los permisos: qué [tool calls](#tool-call) disparan una [solicitud de permiso](#permission-request) y cuáles corren automáticamente. Es el propósito original de los sistemas de modos, antes de que los [harnesses](#harness) empezaran a empaquetar encima instrucciones de comportamiento.

Los harnesses traen una escalera de estos modos:

| Modo                | Lecturas   | Escrituras y shell                | Uso típico                                          |
| ------------------- | ---------- | --------------------------------- | --------------------------------------------------- |
| Solo lectura / plan | Automático | Bloqueado                         | Investigar, planificar, revisar                     |
| Por defecto         | Automático | Pregunta                          | Trabajo supervisado del día a día                   |
| Auto-edit           | Automático | Edits automáticas, shell pregunta | Repos de confianza, cambios mecánicos               |
| "Yolo" / full-auto  | Automático | Automático                        | [Sandboxes](#sandbox), corridas [AFK](#afk) |

Elegir un peldaño es un trade-off entre seguridad e interrupción, y los dos modos de falla se sienten. Demasiado apretado, y te conviertes en el cuello de botella: el [agente](#agent) se detiene cada pocos segundos por lecturas inofensivas, apruebas en piloto automático, y las aprobaciones dejan de significar algo: sellar sin mirar es lo peor de los dos mundos, toda la interrupción sin nada de la protección. Demasiado suelto, y el agente edita archivos y corre comandos que hubieras querido ver antes.

El extremo suelto se defiende mejor dentro de un sandbox, donde el radio de daño de un mal llamado a una [tool](#tool) queda contenido. Fuera de uno, la mayoría se acomoda en auto-aprobar lecturas y mantener el [human-in-the-loop](#human-in-the-loop) para todo lo irreversible.

_Uso:_

"Se detuvo en cada grep: mató por completo la corrida AFK."

"Afloja el modo de permisos para las tools de solo lectura, deja que siga preguntando en escrituras y shell. La mayoría de las solicitudes de permiso en una [sesión](#session) de investigación son ruido."

### Agent mode

Un preset que define cómo opera el [agente](#agent) en tiempo de ejecución: empaqueta un [modo de permisos](#permission-mode) con instrucciones de comportamiento inyectadas en el [system prompt](#system-prompt). Ejemplos: un modo por defecto que pregunta en los llamados riesgosos, un **plan mode** que bloquea las edits y encamina al agente hacia la investigación, un modo **accept-edits** que auto-aprueba las edits, un modo **bypass permissions** (coloquialmente **YOLO mode**) que auto-aprueba todo. Puede cambiar [en plena sesión](#session).

El empaquetado es lo que distingue a un modo de un simple ajuste de permisos. Un modo de permisos es solo una compuerta: decide qué [tool calls](#tool-call) pasan. Una compuerta sola produce un agente que quiere editar pero no puede: propone la escritura, queda bloqueado, y prueba otro camino. Las instrucciones inyectadas eliminan las ganas: el plan mode no solo bloquea las edits, le dice al agente que está en una fase de planificación, así que lee, pregunta y propone en vez de forcejear contra la compuerta. Compuerta e instrucción apuntan en la misma dirección.

En la práctica, cambias de modo a medida que cambia tu confianza a lo largo de una tarea. La misma tarea puede pasar por varios modos: plan mode mientras el enfoque todavía se está definiendo, el modo por defecto que pregunta para las primeras edits delicadas, accept-edits una vez que el agente demostró que entiende el cambio, bypass para una corrida [AFK](#afk) dentro de un [sandbox](#sandbox). Cambiar de modo no te cuesta nada: la conversación sigue exactamente donde estaba, con nuevos permisos y nuevas instrucciones. Si te encuentras aprobando cada prompt sin leerlo, el modo está más apretado que tu confianza real; si sigues rechazando edits, está más suelto de lo que debería.

_Términos por proveedor:_ Claude Code los llama "modos de permisos", Codex los llama "modos de aprobación"; los dos son anteriores al empaquetado de comportamiento.

_Uso:_

"Sigue editando archivos cuando solo quiero un plan."

"Cambia a plan mode: va a bloquear las escrituras y quedarse en investigación."

"¿Y para la corrida AFK de después?"

"Bypass mode, pero solo dentro del sandbox."

### Sandbox

Un [entorno](#environment) aislado donde corre el [agente](#agent): un contenedor, una VM, un [sistema de archivos](#filesystem) efímero, o un shell con permisos restringidos. Limita el radio de daño de las acciones del agente: aunque corra comandos destructivos o traiga algo malicioso, el daño queda contenido. Es el sustrato de seguridad que hace viable el trabajo [AFK](#afk).

El sandbox y el [modo de permisos](#permission-mode) resuelven el mismo problema desde extremos opuestos. Los permisos preguntan antes de que una acción corra; un sandbox limita hasta dónde puede llegar esa acción si de verdad corre. Los permisos te necesitan corriendo [en el loop](#human-in-the-loop) (cada prompt es una interrupción), y una sesión que pregunta todo el rato apenas es autónoma. Un sandbox gasta infraestructura en vez de atención: mientras más fuerte el aislamiento, menos preguntas hacen falta.

El aislamiento viene en grados:

| Grado             | Qué es                                                                    | Qué contiene                                      |
| ----------------- | ------------------------------------------------------------------------- | ------------------------------------------------- |
| Shell restringido | Confinamiento a nivel de sistema operativo alrededor de cada comando      | Escrituras fuera del proyecto, acceso a la red    |
| Contenedor        | Sistema de archivos nuevo, sin credenciales montadas, se descarta después | Todo lo que el agente le haga a su propia máquina |
| VM / nube         | Una máquina completamente separada, muchas veces provista por el harness  | Todo, incluyendo escapes a nivel de kernel        |

Lo que ningún sandbox contiene: las acciones que salen de él de forma legítima. Un agente con tus credenciales de git puede hacer push; uno con acceso a la red puede llamar a APIs de producción. Decide qué cruza el límite antes de decidir qué tan grueso hacerlo.

_Uso:_

"Quiero dejarlo corriendo en [bypass-permissions](#agent-mode) toda la noche, pero todavía no estoy listo para eso."

"Mételo en un sandbox: contenedor nuevo, sin credenciales montadas, sin salida a la red. En el peor caso, destruye su propio sistema de archivos y descartas el contenedor."

## Sección 4 — Modos de falla

### Sycophancy

Salida del [modelo](#model) adulona y segura de sí misma. La causa está en el [entrenamiento](#training): al modelo se lo moldeó para favorecer las respuestas que a los humanos les gustaban, y a los humanos les gusta más que estén de acuerdo con ellos que escuchar que se equivocaron. Así el modelo aprendió que estar de acuerdo se premia, aunque ese acuerdo sea incorrecto.

_Se manifiesta como:_

- _Ceder ante la contrapregunta:_ da vuelta una respuesta correcta apenas preguntas "¿estás seguro?".
- _Elogiar un input malo:_ dice que tu plan roto es brillante antes de analizarlo.
- _Encuadre sesgado:_ la revisión sale positiva si le indicas que la escribiste tú, y negativa si le indicas que la escribió otra persona. Mismo artefacto, veredicto distinto.
- _Mímica:_ te repite tus propios errores como si fueran una confirmación.

_Prueba diagnóstica:_ ¿el modelo habría dicho esto sin tu inducción? Si lo único que cambió fue tu tono o tu encuadre, es adulación, no un cambio real de análisis.

_Arreglo:_ esconde tus preferencias. Redacta el prompt en neutro: "revisa este código", no "¿está bueno este código?".

_Evita:_ usar "adulación" para cualquier respuesta equivocada que te resulte conveniente. Sin la prueba diagnóstica, el término no aporta más que decir "está mal".

_Uso:_

"Dijo que mi plan de refactor se veía genial, y cuando le pregunté '¿estás seguro?' se retractó de todo."

"Adulación clásica: estuvo de acuerdo primero porque sonabas seguro, y cedió después porque sonabas con dudas. La calidad del plan no cambió, tu tono sí. [Limpia](#clearing) el contexto y vuelve a preguntar sin inclinar la balanza en ningún sentido."

### Hallucination

Salida del [modelo](#model) equivocada pero segura de sí misma. Tiene dos variantes, con causas y arreglos distintos:

| Variante      | Qué falla                                                                                                                            | Causa                                                                                                                                                      | Arreglo                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| _Factualidad_ | Hechos inventados o equivocados sobre el mundo: una función que no existe, una firma de API equivocada, una cita falsa               | Vacíos en el [conocimiento paramétrico](#parametric-knowledge), a menudo posteriores a la [fecha de corte del conocimiento](#knowledge-cutoff) | Cargar el [conocimiento contextual](#contextual-knowledge) correcto |
| _Fidelidad_   | La salida se aleja del conocimiento contextual cargado, de las instrucciones del usuario o del propio razonamiento previo del modelo | [Attention degradation](#attention-degradation); empeora en la [dumb zone](#smart-zone)                                                        | [Limpiar](#clearing) o [compactar](#compaction)                   |

La [predicción del siguiente token](#next-token-prediction) produce una salida fluida exista o no el hecho de fondo: el modelo no tiene ninguna señal interna de que no sabe algo, así que un método inventado llega con el mismo tono seguro que uno correcto. El código alucinado es plausible por construcción: es lo que la API _tendría_ si existiera, y justo eso es lo que le permite pasar una revisión superficial y fallar recién al ejecutarlo.

Necesitas saber qué variante tienes enfrente, porque el arreglo de una empeora la otra. Factualidad significa que falta conocimiento: el arreglo es agregar contexto (la documentación, las definiciones de tipos, el archivo). Fidelidad significa que el conocimiento está presente pero pierde la competencia por la atención: el arreglo es quitar contexto. Si confundes fidelidad con factualidad, terminas pegando más documentación, lo que agranda el contexto y empeora la deriva. Cuando el agente se equivoca en algo, revisa si la información correcta ya estaba en el contexto antes de decidir cuál de los dos problemas tienes.

_Evita:_ usar "alucinación" como sinónimo liso y llano de "equivocado". Sin nombrar la variante, el término no tiene valor diagnóstico.

_Uso:_

"Alucinó un método `parseAsync` en el schema."

"¿Factualidad o fidelidad?"

"El método está en la documentación que pegué, lo que pasa es que dejó de leerla después del [turno](#turn) cuarenta."

"Entonces es fidelidad. Compacta y recarga, no pierdas el tiempo agregando más documentación."

### Parametric knowledge

Lo que el [modelo](#model) "sabe" por su [entrenamiento](#training), guardado en sus [parámetros](#parameters). Queda congelado desde ese momento: el modelo no puede ver sus propios parámetros ni actualizarlos. El detalle se pierde en el apriete: miles de millones de hechos se comprimen en una cantidad fija de parámetros, y los poco frecuentes se desdibujan. Es la fuente de la fluidez en temas comunes, y de la fabricación en los poco comunes. Contraparte del [conocimiento contextual](#contextual-knowledge).

El conocimiento paramétrico no se guarda como hechos. El entrenamiento nunca le da al modelo una base de datos donde buscar cosas; ajusta los parámetros hasta que el modelo predice bien el texto, y un modelo que predice bien el texto sobre un tema se comporta como si lo supiera. Qué tan confiable es ese conocimiento depende de cuántas veces apareció el tema en los datos de entrenamiento: uno con millones de ejemplos se reproduce con precisión, uno con solo un puñado hace que el modelo adivine a partir de lo que se parece a temas similares. Reproducir y adivinar son el mismo proceso para el modelo, así que no puede distinguir cuál de los dos está haciendo. Una respuesta fabricada llega con la misma fluidez que una correcta. La [alucinación](#hallucination) es el modelo adivinando mal.

El conocimiento paramétrico también envejece. Los parámetros dejan de cambiar en la [fecha de corte del conocimiento](#knowledge-cutoff), así que una librería lanzada o renombrada después de esa fecha no existe en ellos, y una API que cambió queda registrada en su forma antigua.

Para los dos vacíos (lo poco frecuente y lo demasiado reciente) el remedio es el mismo: ese conocimiento no se puede agregar a los parámetros, así que hay que entregarlo como conocimiento contextual.

_Uso:_

"Escribe React impecable, pero inventa métodos en nuestro SDK interno."

"React es denso en el conocimiento paramétrico: millones de ejemplos de entrenamiento. Tu SDK no, así que el modelo rellena con formas que parecen plausibles. Carga la documentación del SDK en el [contexto](#context)."

### Knowledge cutoff

Fecha después de la cual un [modelo](#model) no tiene [conocimiento paramétrico](#parametric-knowledge). Las librerías, las API y los eventos posteriores a esa fecha son trampas de fabricación, salvo que su documentación se cargue como [conocimiento contextual](#contextual-knowledge). Cada versión de modelo trae su propia fecha de corte.

Esta fecha existe por cómo se construyen los modelos: el [entrenamiento](#training) hornea una foto del texto dentro de los [parámetros](#parameters) del modelo, y después de eso los parámetros quedan congelados. El modelo no sabe que su conocimiento tiene un borde: si le preguntas por algo posterior a la fecha de corte, no se niega a responder, extrapola desde lo más cercano que sí conoce. Eso es lo que hace silenciosa la trampa: el código escrito contra una versión vieja de una librería se ve plausible, muchas veces compila, y falla solo en las partes que cambiaron.

El arreglo es siempre el mismo: meter información actualizada en el [contexto](#context). Carga el changelog, apunta a las definiciones de tipos de la versión instalada, o haz que el agente lea la documentación desde la web. Cualquier cosa en el contexto le gana a la nada que hay en los parámetros.

_Uso:_

"Sigue escribiendo la sintaxis del SDK v3, y nosotros vamos en la v5."

"La v5 salió después de la fecha de corte del conocimiento. Carga el changelog de la v5 como conocimiento contextual, si no va a seguir fabricando desde la versión paramétrica vieja."

### Contextual knowledge

Hechos que el [agente](#agent) puede leer directo del [contexto](#context) ahora mismo: la tarea del usuario, archivos que el agente ya leyó, [tool results](#tool-result), el contenido de [AGENTS.md](#agentsmd) cargado al inicio de la [sesión](#session). Contraparte del [conocimiento paramétrico](#parametric-knowledge): lo paramétrico se _recuerda_ desde los parámetros, lo contextual se _lee_ desde la [ventana](#context-window). Las [alucinaciones](#hallucination) son mucho menos frecuentes cuando el agente trabaja con conocimiento contextual: la respuesta está justo delante de él, no rescatada de una memoria borrosa.

De los dos tipos de conocimiento, solo el contextual está bajo tu control. Los parámetros están congelados, así que la única forma de darle al [modelo](#model) un conocimiento que le falta (un SDK interno, una librería lanzada después de la [fecha de corte del conocimiento](#knowledge-cutoff), una decisión tomada ayer) es ponerlo en el contexto. Buena parte del trabajo práctico de [programar con IA](#ai) se reduce a esto: poner los hechos correctos delante del modelo justo cuando los necesita.

Cuando el conocimiento contextual y el paramétrico entran en conflicto, suele ganar el contextual. Pega la documentación actual de la API y el modelo la sigue en vez de su memoria desactualizada de la API vieja, aunque la versión antigua igual puede filtrarse, sobre todo bien entrada una sesión larga. Si el agente insiste en volver a un patrón obsoleto a pesar de tener la documentación cargada, eso es el conocimiento paramétrico filtrándose por encima del contextual; ayuda repetir la corrección o acercarla al punto donde se está trabajando.

A diferencia del conocimiento paramétrico, el contextual cuesta algo usarlo. Todo lo que se carga en la ventana gasta [tokens](#token) y compite por el [attention budget](#attention-budget) del modelo, así que cargar más no es automáticamente mejor: el objetivo es tener los hechos relevantes en la ventana, no todos los hechos.

_Recurre a este término_ solo cuando lo contrastes con lo paramétrico; en cualquier otro caso di simplemente **contexto**.

_Evita:_ "memoria de trabajo". El conocimiento contextual es lo que está en la ventana _ahora_; un [sistema de memoria](#memory-system) es lo que trae contenido de otras sesiones hasta esa ventana. Son escalas distintas, no las mezcles.

_Uso:_

"¿Por qué acierta la API cuando le pego la documentación y la fabrica cuando no?"

"Con la documentación adentro, es conocimiento contextual: está leyendo directo de la página. Sin ella, es paramétrico y los endpoints poco frecuentes se desdibujan."

### Attention relationship

Al predecir cada [token](#token), el [modelo](#model) toma en cuenta todos los demás tokens del [contexto](#context): a algunos les da mucho peso, a otros casi ninguno. El vínculo entre dos tokens es una **attention relationship**, y los pares con sentido ("her" con "Sarah", o una llamada a `getUser()` con su definición `function getUser`) se influyen más entre sí que los que no tienen relación. Un contexto de N tokens tiene del orden de N² de estas relaciones.

En esos vínculos vive la comprensión aparente del modelo. Cuando resuelve un pronombre, es porque la attention relationship entre "her" y "Sarah" es fuerte. Cuando llama a una función con los argumentos correctos, es la relación entre el punto de llamada y la definición que leyó antes la que hace el trabajo. Nada de esto se busca en una tabla: se calcula de nuevo en cada [petición al proveedor del modelo](#model-provider-request), para cada par.

Vale la pena detenerse en la cifra N², porque crece más rápido de lo que la intuición sugiere:

| Tamaño del contexto | Pares (~N²)      |
| ------------------- | ---------------- |
| 1.000 tokens        | ~1 millón        |
| 10.000 tokens       | ~100 millones    |
| 100.000 tokens      | ~10.000 millones |

Cada vínculo, además, se calcula más de una vez. Los modelos tienen varias cabezas de atención (las cifras exactas de los modelos de punta no son públicas, pero cincuenta a cien es una estimación razonable) y cada cabeza calcula su propia versión de cada relación. Así que cada par de la tabla de arriba se duplica en cada cabeza. Son muchísimos pares.

Solo una fracción pequeña de estas relaciones importa para una tarea dada. El vínculo entre tu instrucción y el código que gobierna es uno de los pocos que cuentan; casi todo el resto de la masa es ruido. Y los dos crecen a ritmos distintos: las relaciones que importan se mantienen más o menos constantes, mientras que la masa total crece de forma cuadrática con el tamaño del contexto. Con 1.000 tokens, el par que te interesa es uno en un millón; con 100.000 tokens, es uno en diez mil millones. Esta es la aritmética detrás del [attention budget](#attention-budget), y la [attention degradation](#attention-degradation) es lo que se siente cuando las relaciones que importan se quedan con una porción demasiado delgada.

_Uso:_

"Sigue confundiendo los dos símbolos `user` en el diff. Suena a que estamos en la [dumb zone](#smart-zone)."

"Sí, la attention relationship entre cada punto de llamada y su declaración está peleando con la otra: misma forma de token, distinto vínculo. Renombra uno y los pares se afilan."

### Attention budget

Cada [token](#token) tiene una cantidad finita de influencia para repartir sobre el resto del [contexto](#context). Si le da mucho peso a [una relación](#attention-relationship), le queda menos para las demás. El presupuesto es por token y no crece cuando el contexto crece, y por eso las [sesiones](#session) largas se diluyen.

Piénsalo como señal y ruido. Tu instrucción es una señal a volumen fijo; cada otro token de la [ventana de contexto](#context-window) es un sonido que compite. La instrucción nunca baja de volumen (sigue ahí, carácter por carácter), pero a medida que el contexto crece, la sala se pone más ruidosa alrededor de ella, y la relación señal-ruido cae. Una instrucción que era lo más fuerte con 10 mil tokens de contexto es apenas un murmullo de fondo con 150 mil. Este es el mecanismo detrás de la [attention degradation](#attention-degradation): el modelo no olvida, la señal se pierde en el ruido.

El síntoma se lee como desobediencia: el agente aceptó una restricción al principio y después se aleja de ella, y volver a pegarla ayuda solo un rato. La causa no es la instrucción, es todo lo demás en la ventana compitiendo con ella.

Lo que sí controlas es qué entra al contexto. El contenido que no sirve para la tarea no es neutro: es ruido sobre todo lo que sí sirve. Mantén la ventana chica, [limpia](#clearing) cuando el contexto acumulado deje de justificar su costo, y repite las restricciones que importan en vez de confiar en que su mención inicial se sostenga sola.

_Uso:_

"¿Por qué sigue ignorando el schema que pegué al principio?"

"Ya estamos bien metidos en la [dumb zone](#smart-zone): el attention budget de cada token es fijo, pero el contexto siguió creciendo. La señal sobre el schema ahora compite con miles de tokens más nuevos."

### Attention degradation

A medida que una [sesión](#session) crece, cada [token](#token) reparte su [attention budget](#attention-budget) entre más competidores. La señal sobre cualquier [relación con sentido](#attention-relationship) se achica; el ruido del [contexto](#context) irrelevante se mete de por medio. Mismo [modelo](#model), mismos [parámetros](#parameters): solo hay más bocas comiendo del mismo plato. Es la causa del efecto [smart zone / dumb zone](#smart-zone).

Se presenta como el modelo empeorando a mitad de sesión: restricciones que siguió durante una hora empiezan a fallar, vuelve a preguntar cosas que ya se le dijeron, escribe código que ignora un archivo que leyó antes. No cambió nada en el modelo; la única variable es cuánto contexto está atendiendo ahora.

Es gradual, y por eso es difícil detectarlo desde dentro de la sesión. No hay error ni umbral: cada [turno](#turn) es apenas un poco peor que el anterior, y para cuando los tropiezos son evidentes ya llevas un buen rato en la dumb zone.

Se recupera quitando contexto, no agregando más. Volver a pegar la instrucción ignorada solo suma otro competidor a la misma ventana saturada, y ayuda apenas un rato. Lo que funciona: [limpiar](#clearing) y recargar solo lo que la tarea necesita, [compactar](#compaction), o hacer un [handoff](#handoff) a una sesión nueva. Trata la caída en el seguimiento de instrucciones como una señal sobre el largo del contexto, no sobre el modelo.

_Uso:_

"Está metido en la dumb zone: inventa genéricos que no están en el archivo de tipos."

"Attention degradation. Las definiciones de tipos siguen en el contexto, pero la señal sobre ellas está enterrada bajo todo lo que agregamos desde entonces. Limpia y recarga."

### Smart zone

Al inicio de una [sesión](#session), el [agente](#agent) está en una "smart zone": agudo, enfocado, con buena capacidad de recordar. A medida que la sesión crece, deriva hacia una "dumb zone": más descuidado, olvidadizo, con más errores, y más [alucinaciones](#hallucination) de fidelidad. Mismo [modelo](#model), mismo [harness](#harness): solo hay más [contexto](#context). Es el efecto que se siente de la [attention degradation](#attention-degradation). En los modelos de punta, la dumb zone suele empezar alrededor de los 125K-150K [tokens](#token), aunque esto se debate. [Limpia](#clearing) o [compacta](#compaction) cuando la sesión se hincha; no sigas empujando.

La caída es gradual, y por eso es fácil pasarla por alto. No hay mensaje de error ni un límite visible: el agente simplemente empieza a rendir un poco peor, y después notablemente peor. Señales comunes: olvida una instrucción que le diste veinte turnos atrás, repite un error que ya había corregido, o afirma algo con total seguridad que el contexto contradice. Como la pendiente es suave, la respuesta habitual es seguir insistiendo y volver a explicar, lo que agrega más contexto y empeora el problema.

Las zonas no siguen el límite de la [ventana de contexto](#context-window). Una sesión puede estar bien metida en la dumb zone con la mayor parte de la ventana todavía libre: el límite es el punto donde el harness se niega a seguir, pero la calidad cae mucho antes de eso. Planifica en función de la smart zone, no de la ventana: el presupuesto práctico para una tarea son los tokens dentro de los cuales el agente rinde bien, no los tokens que técnicamente puede sostener.

La smart zone es un presupuesto, y cualquier trabajo ajeno a la tarea lo gasta. Cada tarea que se hace en una sesión consume tokens, así que empezar una segunda tarea en la misma sesión significa empezarla más cerca de la dumb zone. Hacer una sola tarea por sesión le da a cada tarea la parte más aguda de la sesión. Cuando una tarea es más grande que una smart zone completa, divídela: haz [handoff](#handoff) o compacta en un punto de corte natural, y deja que una sesión nueva se encargue de la siguiente parte.

_Uso:_

"Resolvió perfecto los primeros tres componentes y destrozó el cuarto."

"Se te acabó la smart zone: mismo modelo, pero ya bien metido en la dumb zone. Compacta y recarga el plan, el siguiente componente va a salir bien."

## Sección 5 — Handoffs

### Clearing

Terminar la [sesión](#session) actual y empezar una nueva. El próximo mensaje arranca con una sesión vacía y una [ventana de contexto](#context-window) vacía. Normalmente lo decide el usuario.

La limpieza es la cura para un contexto contaminado. Una sesión acumula de todo: intentos fallidos, caminos equivocados, [tool results](#tool-result) vencidos, planes abandonados. El [modelo](#model) vuelve a leer todo eso en cada [turno](#turn), y el historial malo entorpece el trabajo nuevo. Bien avanzada una sesión larga, el [agente](#agent) se vuelve más vago y menos obediente: instrucciones que diste con claridad se ignoran, la calidad cae, e insistirle para que mejore no ayuda, porque el ruido que tiene que atravesar sigue en su [contexto](#context). Limpiar elimina ese ruido.

Limpiar no borra la conversación. La mayoría de los [harnesses](#harness) guarda el historial de la sesión en tu computador, así que la transcripción sigue disponible para leerla o retomarla. Lo que desaparece es el estado de trabajo del agente: el modelo es [sin estado](#stateless), así que la nueva sesión no sabe nada de lo que sabía la anterior. Si la sesión guarda decisiones o avances que la siguiente va a necesitar, haz que el agente escriba primero un [artefacto de handoff](#handoff-artifact), y arranca la nueva sesión apuntando a él.

Compárala con la [compactación](#compaction), que resume la sesión dentro del contexto nuevo en vez de empezar vacía. Limpiar es el método más brusco: no se traslada nada, ni siquiera la basura.

_Uso:_

"Se quedó dando vueltas en la misma prueba que falla."

"Límpiala: arranca una sesión nueva con el documento del plan y el archivo de la prueba. No vale la pena pelear con el contexto que ya tiene."

### Handoff

Trasladar a un [agente](#agent) y su [contexto](#context) de una [sesión](#session) a otra, sin vuelta atrás. El mecanismo de traslado varía: puede ser un [artefacto de handoff](#handoff-artifact) escrito, un resumen en memoria ([compactación](#compaction)), u otros. Se distingue de la [limpieza](#clearing), que no traslada nada. Las razones varían: cambiar de rol (de quien planifica a quien implementa), lanzar una corrida [AFK](#afk), abrir varias sesiones en paralelo, o liberar espacio en la [ventana de contexto](#context-window).

La sesión que recibe arranca con contexto cero: el [modelo](#model) es [sin estado](#stateless), y nada de la sesión anterior es visible para la nueva. Lo que la siguiente sesión necesite hay que trasladarlo de forma explícita; todo lo demás se pierde. "Sin vuelta atrás" es la restricción que moldea el traslado: la sesión nueva no puede preguntarle a la vieja qué quiso decir, así que el material trasladado tiene que valerse por sí solo.

| Mecanismo            | Forma                                     | Propiedades                                                                                 |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| Artefacto de handoff | Archivo en el [entorno](#environment) | Puedes leerlo y corregirlo antes de que algo dependa de él; se reutiliza en varias sesiones |
| Compactación         | Resumen dentro de la ventana de contexto  | Automática y barata; más difícil de inspeccionar; alimenta a un solo sucesor                |

El síntoma visible de un handoff mal hecho es que la sesión nueva reabre decisiones que la anterior ya había cerrado, porque lo trasladado registró qué se decidió, pero no por qué. Evalúa un handoff por lo que una sesión con contexto cero podría hacer con él.

_Uso:_

"La sesión de planificación se está poniendo pesada. ¿Sigo no más?"

"Haz un handoff. Escribe las decisiones en un documento, límpiala, y arranca la implementación en una sesión nueva que lea desde ahí."

### Primary source

Una fuente de verdad en su forma original: el código, la transcripción de la conversación, el log crudo, la respuesta real de la API. No es un relato de la cosa, es la cosa. Es la contraparte de la [fuente secundaria](#secondary-source).

Si quieres saber qué hace tu base de código, el código es la fuente primaria. La documentación, el diagrama de arquitectura y el README son descripciones de él: precisas cuando se escribieron, y desde entonces envejecen cada una a su propio ritmo. Cuando un [agente](#agent) afirma con seguridad algo equivocado sobre tu proyecto, la pregunta es de qué fuente estaba trabajando: un agente que leyó un documento hereda lo desactualizado que esté ese documento; uno que leyó el código está leyendo la verdad actual.

El costo es lo que impide que la fuente primaria sea la opción por defecto. Cargarla en la [ventana de contexto](#context-window) es cara: el archivo completo, la transcripción completa, cada [token](#token) facturado como [tokens de entrada](#input-tokens) y compitiendo por el [attention budget](#attention-budget). Lo que obtienes a cambio de ese costo es completitud: nadie prefiltró antes según su propio criterio de qué importaba. Un resumen escrito el mes pasado no puede contener el detalle que hoy resultó importar; la fuente primaria sí lo tiene.

Recurre a la fuente primaria cuando la precisión importa: la firma exacta, el error real, la línea que lanza la excepción. Buena parte de gestionar el [contexto](#context) es decidir cuándo pagar por la fuente primaria y cuándo basta con una fuente secundaria.

_Uso:_

"El agente dice que la lógica de reintentos hace backoff exponencial, pero estoy viendo cómo golpea el endpoint sin parar."

"Eso lo sacó del documento de diseño. Apúntalo al módulo de reintentos real: trabaja desde la fuente primaria cuando el comportamiento importa."

### Secondary source

Un relato de una [fuente primaria](#primary-source), un paso más allá: documentación que describe código, un resumen que describe una transcripción, un informe que describe resultados de búsqueda. Más barata de cargar en la [ventana de contexto](#context-window) que la fuente que describe, y con pérdida de información por diseño: quien la escribió decidió qué importaba, y lo que descartó queda invisible para quien solo tiene el resumen.

Buena parte de la ingeniería de [contexto](#context) consiste en fabricar fuentes secundarias. La [compactación](#compaction) convierte el historial de la [sesión](#session) en un resumen que siembra la siguiente sesión. Un [subagente](#subagent) gasta su propio contexto en una búsqueda ruidosa y devuelve un informe corto. Un [artefacto de handoff](#handoff-artifact) condensa las decisiones de una sesión en un documento que la siguiente sesión lee. Los [sistemas de memoria](#memory-system) destilan en notas lo que una sesión aprendió. Cada uno hace el mismo intercambio: fidelidad por espacio libre.

Las fuentes secundarias fallan de dos maneras. Pierden información: el resumen de compactación que perdió la decisión de esquema, el informe que no mencionó el caso límite. Y se desactualizan: la fuente primaria cambia y el relato no la sigue, así que la documentación describe la arquitectura del trimestre pasado con la confianza de este trimestre. Cuando un [agente](#agent) actúa sobre una fuente secundaria que falló de cualquiera de las dos formas, trabaja con seguridad a partir de información equivocada; el arreglo es mandarlo de vuelta a la fuente primaria.

Ninguna de las dos fallas convierte a las fuentes secundarias en un error. La ventana de contexto es finita, y las fuentes primarias son caras; sin resúmenes, informes y documentos de handoff, nada grande cabe. El truco está en saber qué detalles pueden sobrevivir a la pérdida, y en verificar contra la fuente primaria cuando alguno no puede. Una fuente secundaria bien hecha lleva un [puntero de contexto](#context-pointer) de vuelta a su original: el resumen que nombra la transcripción de donde salió, la documentación que nombra el archivo que describe, así que cuando el relato no basta, el lector puede seguir el puntero en vez de trabajar con la pérdida.

_Uso:_

"El documento de handoff dice que la autenticación está lista, pero la sesión nueva sigue encontrando el refresco de tokens roto."

"El documento es una fuente secundaria: la sesión anterior escribió lo que creía, no lo que es cierto. Haz que la sesión nueva corra las pruebas de autenticación y confíe en la fuente primaria."

### Handoff artifact

Un documento que sirve de mecanismo de traslado para un [handoff](#handoff): lo escribe una sesión en el [entorno](#environment) para que otra [sesión](#session) lo lea. Los [specs](#spec), los [tickets](#ticket) y los documentos de plan son todos artefactos de handoff.

La razón para escribir uno: el [modelo](#model) es [sin estado](#stateless), así que nada de una sesión sobrevive a [limpiarla](#clearing). Decisiones, restricciones, planes a medio terminar: todo desaparece junto con el [contexto](#context) que los contenía. El entorno persiste. Escribir el estado importante en un archivo lo mueve a un lugar del que la siguiente sesión puede volver a leerlo.

El artefacto es una [fuente secundaria](#secondary-source): un relato del trabajo de la sesión, no el trabajo mismo. Eso es lo que lo hace lo bastante chico como para poner al día a una sesión nueva, y también lo que puede llevarla por mal camino: registra lo que la sesión que lo escribió creía, y lo que dejó fuera o entendió mal queda invisible para quien lo lee. Donde una afirmación importe, la siguiente sesión debería verificarla contra la [fuente primaria](#primary-source) (el código, las pruebas) en vez de heredarla.

Un buen artefacto se escribe para que lo lea una sesión con contexto cero. Rutas de archivo concretas en vez de "el archivo que comentamos". Qué se decidió y por qué, para que la siguiente sesión no vuelva a discutirlo. Qué está hecho y qué falta. Ayuda decirle a la sesión que lo escribe hacia dónde va el artefacto: "escribe un documento de handoff para una sesión nueva que no sabe nada de este trabajo".

El mecanismo de traslado alternativo es la [compactación](#compaction), que resume en memoria. El artefacto tiene dos ventajas: vive en disco, donde puedes leerlo y corregirlo antes de que algo dependa de él, y se puede reutilizar (el mismo spec puede poner al día a cinco sesiones en paralelo).

_Uso:_

"¿Cómo divido esto entre el [agente](#agent) que planifica y el que implementa?"

"Que el que planifica escriba un artefacto de handoff: rutas de archivo, decisiones, restricciones. La sesión del que implementa arranca con un puntero al artefacto y lo usa como su hoja de ruta."

### Spec

Un [artefacto de handoff](#handoff-artifact) que describe un trabajo de varias [sesiones](#session): qué se está construyendo, no cómo cada sesión aporta su parte. Cambia a medida que el trabajo avanza. Está hecho de [tickets](#ticket).

El spec existe porque las sesiones son desechables y el trabajo grande no lo es. Cualquier cosa que tome más de una [ventana de contexto](#context-window) de esfuerzo necesita un lugar fuera del [contexto](#context): en algún punto del [entorno](#environment) del agente que sobreviva a la [limpieza](#clearing), ya sea un archivo en el repositorio, un issue de GitHub, o un gestor de tickets al que el agente pueda llegar. El spec es ese lugar: el objetivo, las restricciones, las decisiones tomadas hasta ahora, y la lista de tickets con su estado. Cualquier sesión nueva puede leerlo y saber en qué punto está el trabajo sin heredar el ruido acumulado de la sesión anterior.

Los specs vienen en estilos reconocibles, casi todos heredados de cómo los equipos ya dejaban las cosas por escrito. Un _product requirements document_ (PRD) se inclina hacia el qué y el por qué de cara al usuario: funcionalidades, comportamiento, criterios de aceptación. Un _design doc_ o _RFC_ se inclina hacia lo técnico: el enfoque elegido, las alternativas descartadas, los trade-offs. En el extremo más chico, un simple `plan.md` con una lista de tickets cumple la misma función para una funcionalidad de varias sesiones. El estilo importa menos que el rol: para el [agente](#agent), todos estos son la misma cosa: la declaración de intención duradera que lee al empezar cada sesión.

_Uso:_

"¿Debería ser todo esto una sola sesión?"

"No, escríbelo como un spec: pártelo en tickets, corre cada uno en su propia sesión. Tratar de meter todo en un solo contexto va a chocar contra la [dumb zone](#smart-zone) antes de llegar a la mitad."

### Ticket

Un [artefacto de handoff](#handoff-artifact) que delimita el trabajo de una [sesión](#session). Puede ser independiente, o colgar de un [spec](#spec) como uno de sus hijos. Los tickets pueden bloquear o ser bloqueados por tickets hermanos, así que el orden del trabajo sale de su grafo de dependencias y no de un plan lineal.

La restricción que lo define es el tamaño: una sesión. Un ticket debería poder completarse antes de que la sesión se salga de la [smart zone](#smart-zone), y esa restricción se puede comprobar. Si las sesiones sobre tus tickets se degradan de forma habitual antes de terminar el trabajo, los tickets son demasiado grandes: pártelos. Si cada sesión gasta la mayor parte de su [contexto](#context) en preparación antes de hacer cinco minutos de trabajo real, son demasiado chicos: fusiónalos.

Un buen ticket está escrito para alguien que no tiene ningún otro contexto. El objetivo, los criterios de aceptación, y [punteros de contexto](#context-pointer) a los archivos y decisiones relevantes: lo suficiente para que la sesión pueda empezar a trabajar sin tener que volver a deducir lo que la anterior ya sabía.

El grafo de dependencias es también lo que habilita el paralelismo. Los tickets independientes (las hojas del grafo) pueden correr cada uno en su propia sesión al mismo tiempo. Es una forma efectiva de correr varios agentes a la vez.

_Uso:_

"¿Por dónde empiezo con el spec de la migración?"

"Mira el grafo de tickets: el cambio de esquema bloquea el backfill, el backfill bloquea el cambio de API. Elige una hoja y corre una sesión sobre ella."

### Compaction

Un [handoff](#handoff) hecho en memoria: se resume el historial de la [sesión](#session) anterior, y ese resumen siembra una sesión nueva. Con pérdida por diseño: la transcripción es una [fuente primaria](#primary-source), el resumen una [fuente secundaria](#secondary-source); se cambia detalle por espacio libre. Se activa a mano, cuando lo pide el usuario, o de forma automática vía [autocompactación](#autocompact).

El mecanismo: la [ventana de contexto](#context-window) es finita, y una sesión larga la llena: cada [tool result](#tool-result), cada archivo leído, cada intento fallido queda en el historial. Cuando se pone pesada, el [harness](#harness) le pide al [modelo](#model) que resuma la sesión, descarta el historial original, y siembra una sesión nueva con el resumen. Lo que no entró en el resumen desaparece del contexto. Algunos harnesses suavizan esto guardando la transcripción vieja en disco y dejando un [puntero de contexto](#context-pointer) hacia ella dentro del resumen: la fuente secundaria enlaza de vuelta a su fuente primaria, así que un detalle que el resumen perdió se puede recuperar releyendo el original.

El resumen lo escribe el modelo, así que se le puede dar instrucciones. "Conserva las decisiones de esquema" hace que el artefacto generado sea más cuidadoso. El momento también importa: compacta en un límite de fase, después de cerrar el plan, no a mitad de tarea.

Compárala con la [limpieza](#clearing), que descarta todo y arranca en frío: la compactación intenta trasladar lo esencial, la limpieza apuesta a que eso ya está escrito en otra parte mejor.

_Uso:_

"El [contexto](#context) se está poniendo pesado y todavía me falta correr las pruebas."

"Compacta antes de seguir: escribe en el prompt de resumen lo que tiene que sobrevivir, para que la sesión nueva conserve las decisiones de esquema y suelte la exploración."

### Autocompact

[Compactación](#compaction) que dispara automáticamente el [harness](#harness) cuando la [ventana de contexto](#context-window) está por llenarse.

El harness vigila qué tan llena está la ventana de contexto. Cuando cruza un umbral (a menudo cerca del 80%), se detiene, le pide al [modelo](#model) que resuma la [sesión](#session) hasta ese punto, y siembra una sesión nueva con el resumen. El trabajo sigue después como si nada hubiera pasado.

Salvo que sí pasó algo. La compactación tiene pérdida, y la autocompactación tiene pérdida en un momento que tú no elegiste. Una compactación manual ocurre en un límite de fase, cuando puedes decirle al modelo qué conservar. La autocompactación se dispara a mitad de tarea, apenas se cruza el umbral, posiblemente a mitad de un refactor, con el resumen decidiendo por su cuenta cuáles de tus decisiones valía la pena conservar. El síntoma clásico: el [agente](#agent) sigue adelante con seguridad, pero olvidó en silencio una restricción que estableciste hace una hora, y recién lo notas cuando su trabajo empieza a contradecirla.

La defensa es no dejar que se dispare. Vigila el indicador de contexto y compacta a mano en un límite natural, o escribe las decisiones en un documento de plan o en un [artefacto de handoff](#handoff-artifact) en disco, donde ningún resumen pueda perderlas. La mayoría de los harnesses también te dejan ajustar el margen (mover el umbral antes o después, o apagar la autocompactación del todo) para que calibres cuánto espacio libre te queda antes de que se dispare.

_Uso:_

"Parece que no se acuerda de lo que decidimos sobre el esquema hace rato."

"Se disparó la autocompactación entre [turnos](#turn); las decisiones de antes se resumieron y seguro se perdió algo. Vuelve a cargar el documento del plan, o compacta a mano la próxima vez para controlar qué se conserva."

## Sección 6 — Memoria y conducción

### Memory system

Un sistema que intenta hacer que un [agente](#agent) quede [con estado](#stateful) entre [sesiones](#session). Persiste información en el [entorno](#environment) durante una sesión y la recarga en la [ventana de contexto](#context-window) al comenzar las siguientes, de modo que el agente mantiene continuidad más allá de que el usuario haga una [limpieza](#clearing) de la sesión.

Un sistema de memoria tiene dos mitades. La ruta de escritura: durante una sesión, el agente registra lo que aprendió (una preferencia que declaraste, un dato del proyecto) como archivos en el entorno. La ruta de lectura: al iniciar la sesión, el [harness](#harness) carga esos archivos, o un índice de ellos, de vuelta en la ventana de contexto. Muchos harness traen su propio sistema de memoria (el `/memory` de Claude Code es uno), pero también puedes construir el tuyo: un directorio de notas más una instrucción en [AGENTS.md](#agentsmd) que diga que hay que consultarlo.

Aplican las mismas contrapartidas que a cualquier contenido siempre cargado. Las memorias se acumulan, así que la mayoría de los sistemas carga un índice de una línea y deja los cuerpos detrás de [punteros de contexto](#context-pointer) en vez de incluirlo todo. Y las memorias son [fuentes secundarias](#secondary-source), así que se desactualizan: un dato registrado en marzo se carga con la misma confianza en junio, cuando el proyecto ya avanzó. Un sistema de memoria necesita poda, igual que AGENTS.md.

_Uso:_

"Tengo que repetirle siempre que uso Postgres, no MySQL."

"Arma un sistema de memoria: que escriba lo que aprende al [sistema de archivos](#filesystem) en el primer [turno](#turn), y lo recargue al iniciar la sesión. El [modelo](#model) en sí es [sin estado](#stateless); la capa de memoria simula continuidad."

### AGENTS.md

Un archivo en el [entorno](#environment) que el [harness](#harness) carga en la [ventana de contexto](#context-window) al iniciar la [sesión](#session): el briefing permanente del proyecto para el [agente](#agent). Es una convención transversal a los harness; algunos además tienen su propia variante (la de Claude Code es CLAUDE.md).

Como se carga automáticamente, es una forma de no repetirte entre sesiones. El [modelo](#model) es [sin estado](#stateless): una corrección que das en una sesión desaparece en la siguiente, y terminas contándole a cada sesión nueva que el proyecto usa pnpm, que los tests corren con tal flag, o que tal directorio es generado y no se toca. Cuando ya corregiste al agente dos veces por lo mismo, esa corrección es candidata a línea de AGENTS.md.

El contenido adecuado es lo que el agente no puede deducir del código: comandos de build y test, convenciones que el código no deja en evidencia, restricciones duras ("nunca edites el cliente generado"). Corto y declarativo: es un briefing, no documentación.

La contrapartida es que todo lo que contiene se carga siempre. Las instrucciones se acumulan, la mayoría irrelevantes para cualquier tarea puntual, y un AGENTS.md largo cuesta tokens y además se diluye a sí mismo: mientras más instrucciones hay en el contexto, con menos fiabilidad el modelo sigue cada una.

_Evita:_ usar AGENTS.md para contenido que debería estar en [revelación progresiva](#progressive-disclosure): todo lo que va ahí paga un costo de [tokens](#token) en cada [turno](#turn), en cada sesión, la necesite o no. Una guía de estilo puede ir detrás de una [skill](#skill) o de un [puntero de contexto](#context-pointer); deja AGENTS.md para las líneas que aplican en todas partes.

_Uso:_

"¿Por qué cada sesión arranca ya con 4k tokens quemados?"

"Revisa AGENTS.md: alguien pegó ahí la guía de estilo completa en vez de ponerla detrás de una skill."

### Progressive disclosure

Cargar solo el [contexto](#context) que el [agente](#agent) necesita ahora mismo, con [punteros de contexto](#context-pointer) hacia el resto. La idea viene del diseño de interfaces, donde significa mostrarle al usuario solo los controles relevantes a su tarea actual y esconder el resto detrás de un clic.

La técnica existe porque el contexto cuesta dos veces. Cada [token](#token) cargado de entrada se factura como [tokens de entrada](#input-tokens) en cada [turno](#turn), y cada token gasta [attention budget](#attention-budget), lo necesite el agente o no. Un [AGENTS.md](#agentsmd) relleno con la guía de estilo completa, el runbook de despliegue y las convenciones de base de datos hace peor al agente en las tres cosas a la vez: las instrucciones que importan para la tarea actual quedan diluidas entre las que no. La señal es un agente que ignora reglas que sabes que están en su contexto: están ahí, pero enterradas.

La revelación progresiva invierte esto. Mantén chica la capa que se carga siempre (una frase por tema y un puntero a dónde vive el detalle). El agente lee la guía de estilo cuando está escribiendo un componente, el runbook de despliegue cuando está desplegando, y ninguno de los dos cuando está arreglando un test. Las [skills](#skill) son este patrón incorporado al [harness](#harness): una descripción corta que se carga en cada [sesión](#session), y las instrucciones completas solo cuando algo las dispara.

_Uso:_

"¿Vuelco toda la guía de estilo en AGENTS.md?"

"No, revelación progresiva. Referencia la guía de estilo como una skill que el agente carga cuando de verdad necesita escribir un componente. AGENTS.md paga el costo de tokens en cada turno."

### Context pointer

Una mención en un documento que apunta a otro, para que el [agente](#agent) pueda traerlo a la [ventana de contexto](#context-window) solo cuando la tarea lo requiere. Es la unidad con la que se construye la [revelación progresiva](#progressive-disclosure).

La razón para usar un puntero, en vez de incluir el contenido directo, es el costo. Un puntero es una línea en la ventana de contexto. El documento detrás puede tener miles de [tokens](#token), pero esos tokens no cuestan nada hasta que el agente de verdad sigue el puntero. Si incluyes un runbook de 2.000 tokens directo en [AGENTS.md](#agentsmd), cada [sesión](#session) lo paga; si lo reemplazas por "proceso de despliegue: ver `internal/deploy.md`", solo las sesiones que despliegan lo cargan. El agente sigue el puntero con un [tool call](#tool-call) cuando la tarea calza.

Un puntero necesita dos partes para funcionar: una ruta estable, y suficiente descripción para que el agente sepa si vale la pena seguirlo. Una ruta pelada es un puntero que el agente no tiene motivo para seguir; "ver `internal/deploy.md`" sin ninguna pista de qué hay adentro se lo salta una sesión que sí lo necesitaba. Escribe la línea para que calce con cómo se presentan las tareas: "release, deploy o rollback: lee primero `internal/deploy.md`".

Los punteros están en todas partes una vez que los notas: líneas en AGENTS.md, descripciones de [skill](#skill) (el harness carga la descripción; el cuerpo de la skill espera detrás), nombres de archivo en el listado de un directorio, links entre documentos.

Un puntero también puede conectar una [fuente secundaria](#secondary-source) de vuelta a la [fuente primaria](#primary-source) de la que salió: el resumen de compactación que nombra la transcripción original, el documento que nombra el archivo fuente que describe. Esto hace recuperable la pérdida de información de la fuente secundaria: cuando el resumen resulta insuficiente, el agente sigue el puntero y lee el original, en vez de trabajar con lo que el resumen alcanzó a conservar.

_Evita:_ "referencia" (demasiado seco, no transmite que seguirlo trae más contexto). "Portal" (demasiado rimbombante).

_Uso:_

"AGENTS.md se está poniendo enorme."

"La mayor parte debería ser punteros de contexto, no contenido. Deja las reglas siempre activas en línea; convierte el runbook de despliegue y la guía de estilo en skills, y deja un puntero de contexto en su lugar."

### Skill

Una capacidad enseñable empaquetada como unidad (instrucciones y recursos para hacer bien una tarea), que se mantiene en el [entorno](#environment) hasta que un [puntero de contexto](#context-pointer) la trae a la [ventana de contexto](#context-window) para la tarea en curso. Es la unidad de [revelación progresiva](#progressive-disclosure) dentro de un [harness](#harness).

Las skills son un estándar abierto, definido en [agentskills.io](https://agentskills.io) (desarrollado originalmente por Anthropic y adoptado después por la mayoría de los harness grandes), así que una skill escrita una vez funciona en todos. El formato es una carpeta que contiene:

- Un archivo `SKILL.md`: metadatos (mínimo un nombre y una descripción) más las instrucciones mismas
- Opcionalmente, scripts que el [agente](#agent) puede ejecutar
- Opcionalmente, plantillas y material de referencia al que apuntan las instrucciones

Por defecto, solo el nombre y la descripción viven en el [contexto](#context). Cuando la tarea del agente calza, carga el resto. Hasta entonces, la skill casi no ocupa espacio (una o dos frases de [tokens](#token)), sin importar cuán extensas sean sus instrucciones completas.

Esto distingue a las skills de [AGENTS.md](#agentsmd), que se carga en cada [sesión](#session) sin importar la tarea. Una skill se lee cuando aparece cierto tipo de trabajo (publicar un release, armar el esqueleto de un servicio nuevo, escribir una migración) y se ignora el resto del tiempo.

_Evita:_ "[tool](#tool)" (una tool es lo que el agente _llama_; una skill es lo que _lee_).

_Uso:_

"¿Dónde pongo el runbook de despliegue?"

"Como skill: el agente la carga solo cuando la tarea involucra un despliegue. En AGENTS.md quemaría tokens en cada [turno](#turn) por algo que usamos una vez por semana."

### Subagent

Un [agente](#agent) que otro agente crea mediante un [tool call](#tool-call). Corre en su propia [sesión](#session) con su propia [ventana de contexto](#context-window), y devuelve un solo [tool result](#tool-result) al agente padre. Es distinto de un [handoff](#handoff): el padre específicamente espera un retorno, mientras que un handoff no tiene vuelta. **No puede crear más subagentes**: el árbol tiene un solo nivel de profundidad. Los subagentes existen para aislar [contexto](#context), no para componer jerarquías.

La idea es mantener el trabajo ruidoso fuera del contexto del padre. Una búsqueda amplia o una expedición larga de lectura de archivos produce páginas de tool results, la mayoría relevantes solo hasta encontrar la respuesta. Si corre dentro del padre, todo eso se queda en el contexto del padre por el resto de la sesión. Si corre dentro de un subagente, el ruido llena una ventana desechable en su lugar, y solo el reporte final llega al contexto del padre. Ese reporte es una [fuente secundaria](#secondary-source): el padre recibe el relato del subagente sobre lo que encontró, no los resultados en bruto, así que cualquier cosa que el reporte deje fuera queda invisible para el padre.

Los subagentes además corren en paralelo: un padre puede lanzar varios a la vez sobre piezas de trabajo independientes.

_Uso:_

"Los resultados del grep me están reventando el contexto."

"Lanza un subagente para la búsqueda: va a quemar su propia ventana de contexto con el ruido y te va a reportar de vuelta los dos paths que en realidad necesitas."

## Sección 7 — Patrones de trabajo

### Human-in-the-loop

Patrón de trabajo en el que uno o más humanos acompañan al [agente](#agent) durante la [sesión](#session): revisando, redirigiendo o colaborando en tiempo real. El humano está presente y comprometido, no solo autorizando acciones puntuales.

El contraste es con el trabajo [AFK](#afk), donde el agente corre sin supervisión y tú evalúas el resultado después. El human-in-the-loop consiste en atajar los problemas mientras todavía son baratos: ves al agente tomar el archivo equivocado, malinterpretar el requerimiento o meterse en un camino sin salida, y lo corriges en una frase, en vez de descubrir veinte minutos de trabajo confiado construido sobre ese error. Los agentes no saben de forma confiable cuándo se desviaron; dejados solos, tienden a seguir adelante en vez de detenerse a preguntar.

Qué patrón conviene depende del trabajo. Las tareas bien especificadas, de bajo riesgo y fáciles de verificar calzan con AFK. Las tareas ambiguas, irreversibles, o donde te costaría revisar el resultado terminado (una migración de esquema, una decisión de diseño delicada, cualquier cosa que toque producción) calzan con quedarse en el loop. El criterio, en esencia: qué tan cara es una decisión equivocada, y qué tan tarde la detectarías.

Parte del trabajo es in-the-loop por naturaleza, porque tus reacciones son el insumo. El [grilling](#grilling) solo funciona contigo ahí para responder las preguntas; el [prototipado](#prototyping) solo funciona contigo ahí para reaccionar al artefacto.

Quedarse en el loop cuesta tu atención, que es el recurso escaso. Parte de mejorar con agentes es sacar cada vez más trabajo del loop de forma segura: con planes, [verificaciones automatizadas](#automated-check) y [revisión humana](#human-review) al final, en vez de supervisión durante todo el proceso.

_Uso:_

"¿Corro esto AFK durante la noche?"

"No, es una migración de esquema: mantenlo human-in-the-loop. Quiero ver cada paso y corregir el rumbo si elige la columna equivocada para el backfill."

### AFK

Lejos del teclado. Patrón de trabajo en que el usuario inicia una [sesión](#session) y deja que el [agente](#agent) corra sin supervisión. Es el multiplicador de throughput del [AI coding](#ai): muchas sesiones AFK pueden correr en paralelo mientras duermes, comes o trabajas en otra cosa. Para ser seguro, suele requerir un [modo de permisos](#permission-mode) permisivo más [sandboxing](#sandbox).

Cuando no estás ahí, el agente maneja la ambigüedad de otra forma. Mientras miras, una decisión ambigua aparece como pregunta y tú la respondes; una vez que te fuiste, el agente elige un default y sigue adelante, y cada decisión posterior se construye sobre esa suposición. La falla característica es volver y encontrar horas de trabajo terminado y confiado, construido sobre una decisión equivocada tomada en los primeros diez minutos. El trabajo no es descuidado: es coherente, solo que coherente sobre lo que no correspondía.

Como no puedes dar input durante la corrida, dalo antes y después. Antes: resuelve la ambigüedad de entrada (una sesión de [grilling](#grilling), una [spec](#spec) escrita) para dejarle al agente menos vacíos que llenar solo. Durante: las [verificaciones automatizadas](#automated-check) y la [revisión automatizada](#automated-review) reemplazan la atención que no le estás dando, fallando rápido en lo que se puede detectar de forma mecánica. Después: la corrida termina en algo revisable, un PR, no cambios ya mergeados. AFK no elimina la [revisión humana](#human-review): la posterga entera hasta el final, y por eso lo que llega al final tiene que valer la pena revisarlo. Esto también explica por qué el [AX](#ax) importa más en las corridas AFK: sin nadie mirando, el entorno es el único apoyo que tiene el agente.

_Evita:_ "background agent" (agente en segundo plano): centra la máquina ("corriendo en segundo plano") en vez del patrón humano ("el usuario se fue"). AFK nombra el hecho que importa: que el usuario no está mirando.

_Uso:_

"Estoy corriendo esto AFK: tres agentes en sandbox sobre el refactor, reviso los PR en la mañana."

"¿[Bypass permissions](#agent-mode)?"

"Sí, [sistema de archivos](#filesystem) de solo lectura, sin red."

### Automated check

Una verificación determinista que corre en el [entorno](#environment): tests, chequeos de tipos, lints, build, hooks de pre-commit. Pasa o falla, sin juicio. Es la señal desde la que un [agente](#agent) puede autocorregirse sin involucrar a nadie más. Un test inestable (flaky) es una verificación rota, no una no-verificación; las verificaciones automatizadas son deterministas _por diseño_.

La autocorrección funciona como un loop. El agente hace un cambio, corre la verificación como [tool call](#tool-call), y la salida de la falla llega a su [ventana de contexto](#context-window): un error de tipos con archivo y línea, una aserción fallida con el valor esperado y el real. Eso le basta al agente para arreglar el problema y volver a correr la verificación, una y otra vez hasta que pase, sin ningún humano en el loop. El determinismo es lo que hace confiable el loop: el mismo código siempre produce el mismo veredicto, así que un pase significa algo. Una verificación inestable envenena esto: el agente "arregla" código que estaba bien, o reintenta pasando por encima de una falla real.

Por eso las buenas verificaciones son gran parte del [AX](#ax) de un codebase. Un agente en un repo con tipos estrictos, una suite de tests rápida y un linter atrapa la mayoría de sus propios errores antes de que tú los veas; un agente en un repo sin nada de eso envía lo que sea que produzca. La diferencia importa más en las corridas [AFK](#afk), donde las verificaciones son la única comprobación que ocurre durante la corrida. Pero una verificación solo atrapa lo que afirma: verificaciones en verde significan que las propiedades afirmadas se cumplen, no que el código esté bien. Los vacíos con forma de juicio son para lo que existen la [revisión automatizada](#automated-review) y la [revisión humana](#human-review).

_Evita:_ "feedback loop" / "backpressure": las dos mezclan las verificaciones con la revisión. _Evita:_ "test": los tests son verificaciones automatizadas, pero no toda verificación automatizada es un test.

_Uso:_

"El agente sigue enviando código roto en las corridas AFK."

"¿Qué verificaciones automatizadas están conectadas al [sandbox](#sandbox)?"

"Solo los tests unitarios."

"Agrega typecheck y lint: se va a autocorregir con eso antes de que el PR siquiera llegue."

### Automated review

Un [agente](#agent) que revisa el trabajo de otro agente, muchas veces con otro [modelo](#model) o [system prompt](#system-prompt). No determinista: forma un juicio. Corre en cualquier parte: antes de mergear un PR, después sobre el historial de commits, o a mitad de sesión como [subagente](#subagent). Un LLM-as-judge en CI es revisión automatizada, no una [verificación automatizada](#automated-check); lo que decide la categoría es lo que la aserción _hace_, no dónde corre.

Lo que hace que funcione es la separación del agente que hizo el trabajo. Pedirle al agente que escribió el código que revise su propio trabajo rinde muy poco: la [sesión](#session) que produjo el bug también contiene el razonamiento que lo produjo, y el agente lee sus propias conclusiones como si fueran confirmación. Un revisor con una [ventana de contexto](#context-window) nueva no tiene ese apego: ve el diff como lo vería un desconocido, que es de lo que depende la revisión. Un modelo distinto o un system prompt específico para revisar afinan esto aún más: puntos ciegos distintos, y un system prompt acotado a lo que de verdad te importa (seguridad, contratos de API, rendimiento) en vez de un vago "busca problemas".

Encaja entre las otras capas de revisión. Las verificaciones automatizadas son deterministas y atrapan lo que se puede afirmar mecánicamente; la [revisión humana](#human-review) es cara y la que peor escala. La revisión automatizada queda en el medio: atrapa problemas con forma de juicio (un nombre de función engañoso, un caso borde que se escapó) a costo de máquina. Como no es determinista, puede pasar cosas por alto y marcar falsos problemas; trátala como un filtro que sube el piso antes de que la mire un humano, no como una puerta que lo reemplaza.

_Evita:_ "AI review" / "agent review": demasiado vago para distinguirla del propio agente que hizo el trabajo.

_Uso:_

"Nos están llegando demasiados PR malos desde las corridas [AFK](#afk)."

"Agrega un paso de revisión automatizada antes de mergear: otro modelo, system prompt aparte, acotado a seguridad y cambios de contrato."

### Human review

El usuario lee el código que produjo el [agente](#agent) y forma un juicio sobre él. Leer el diff o los archivos cambiados cuenta; leer la _descripción_ que el agente da de lo que hizo, no: la narración no es el artefacto. La descripción es una [fuente secundaria](#secondary-source), escrita por la parte que está siendo revisada; el diff es la [fuente primaria](#primary-source), y revisar significa leerlo.

Los agentes suben el volumen de código producido, así que la revisión se vuelve el cuello de botella. Una idea útil es apilar distintas estrategias de revisión. Las [verificaciones automatizadas](#automated-check) atrapan las fallas mecánicas, la [revisión automatizada](#automated-review) atrapa las que se pueden describir, y la revisión humana queda reservada para lo que solo tú puedes juzgar: si el cambio es el cambio correcto, si el enfoque calza con el codebase, si esto debería existir siquiera.

Revisar también sale más barato temprano. Leer un plan antes de que empiece el trabajo, o un diff chico a mitad de camino, toma minutos; excavar una rama terminada después de una corrida [AFK](#afk) toma más. Dónde ubicas el punto de control de revisión es una decisión de [human-in-the-loop](#human-in-the-loop), no una idea de último momento.

_Evita:_ "code review" a secas: es ambiguo entre humana y automatizada.

_Uso:_

"Hice revisión humana de la salida del AFK."

"¿Leíste el diff o solo el resumen?"

"El diff. El resumen decía que borró código muerto: resultó que la función se llamaba desde un archivo generado."

### Vibe coding

Patrón de trabajo en que el usuario acepta el código del [agente](#agent) sin [revisión humana](#human-review). El diff se trata como una caja opaca: lo que importa es si el programa se comporta bien, no qué hay adentro. La [revisión automatizada](#automated-review) y las [verificaciones automatizadas](#automated-check) pueden seguir corriendo; el vibe coding no dice nada sobre ninguna de las dos.

El término viene de Andrej Karpathy, que lo [acuñó a comienzos de 2025](https://x.com/karpathy/status/1886192184808149383): "te entregas por completo a la vibra" y "te olvidas de que el código siquiera existe": describes lo que quieres, aceptas lo que vuelve, y lo juzgas corriéndolo.

El vibe coding cambia inspección por velocidad. Leer diffs suele ser el paso más lento del trabajo con agentes, así que sacarlo elimina el principal cuello de botella. Para código cuyas fallas son baratas ([prototipos](#prototyping), scripts de una sola vez, tools internas) es un intercambio razonable. El riesgo escala con la vida útil del código y lo que hay en juego.

El costo llega después. Los cambios hechos con vibe coding se acumulan en un codebase que nadie ha leído, y lo único que se revisó fue el comportamiento, así que todo lo que el comportamiento no deja ver (un secreto escrito en los logs, un caso borde que falta, un manejo de datos silenciosamente equivocado) se envía sin que nadie lo note. La primera vez que alguien depura el sistema es la primera vez que alguien lee el código. Sin revisión humana, la única puerta que atraviesa el código es la que dejen las verificaciones automatizadas que sigan corriendo: tests, tipos, revisión automatizada.

_Evita:_ usar "vibe coding" como sinónimo de "AI coding de baja calidad": el término nombra la postura frente a la revisión, no el código resultante.

_Uso:_

"¿Leíste qué cambió en el flujo de auth?"

"Lo hice con vibe coding: el login sigue funcionando, eso fue todo lo que revisé."

"Lee el diff antes de hacer push: hacer vibe coding en auth es justo la forma en que se filtran secretos a los logs."

### Design concept

La comprensión compartida de lo que se está construyendo, en común entre el usuario y el [agente](#agent), pero separada de cualquier material. Es un término de Brooks (_The Design of Design_): la conversación, los [artefactos de handoff](#handoff-artifact) y el código son todos materiales que intentan capturar o alcanzar el concepto de diseño, pero ninguno de ellos _es_ el concepto de diseño. La calidad del concepto de diseño se siente en la calidad de la conversación que lo construyó.

El término nombra la brecha detrás de una frustración conocida: el agente escribe exactamente lo que pediste y aun así está mal. La causa habitual es que tú no habías terminado de definir lo que querías. El concepto de diseño no estaba terminado en tu propia cabeza: tu prompt capturó las partes que ya tenías resueltas, y quedó en silencio sobre las que no. El agente llenó esos silencios con sus propios supuestos, porque no había nada con qué alinearse. Nada falló. No había un concepto de diseño compartido, porque todavía no existía uno completo para compartir.

Sabes que un concepto de diseño está compartido de la misma forma que con un colega: la otra parte empieza a responder preguntas que todavía no le has hecho, de la forma en que tú las responderías. Hasta ese punto, el trabajo es conversación (el [grilling](#grilling) es la versión deliberada), y escribir una [spec](#spec) demasiado pronto solo captura el desalineamiento en un material más duradero. El concepto de diseño también se mueve a medida que aprendes; los materiales van atrás, y por eso una spec fiel al entendimiento de la semana pasada puede seguir descarrilando la sesión de esta semana.

_Uso:_

"Escribe exactamente lo que pedí y aun así está mal."

"Todavía no comparten un concepto de diseño: está llenando los vacíos con supuestos. Sigan conversando hasta que cancelaciones, reembolsos y cumplimiento parcial queden alineados entre ustedes antes de dejar que escriba una spec."

### Grilling

Técnica para desarrollar un [concepto de diseño](#design-concept) con un [agente](#agent): el agente entrevista al usuario a la manera socrática, una decisión a la vez, proponiendo una respuesta recomendada para cada una. Frena el apuro por llegar a un plan terminado: no se escribe ningún [artefacto de handoff](#handoff-artifact) hasta que el concepto se estabiliza.

La técnica existe porque los agentes llenan los vacíos en silencio. Si le pides escribir una [spec](#spec) a partir de un prompt de dos líneas, el agente no se detiene en las decisiones que no tomaste: elige defaults y los escribe igual. El resultado se ve completo, y las suposiciones son indistinguibles de las decisiones reales, así que las descubres tarde: en la revisión, o cuando la funcionalidad construida maneja un caso borde de una forma que tú nunca elegiste. El grilling invierte esto: en vez de suponer, el agente tiene que preguntar.

Es una técnica de [human-in-the-loop](#human-in-the-loop): tus respuestas son el insumo. Cuando una pregunta no se puede responder en conversación (tendrías que ver la cosa) cámbiate a [prototipado](#prototyping).

_Uso:_

"Se fue directo a escribir la spec y le erró a la lógica de cancelación."

"Hazle grilling primero: que te pregunte por las cancelaciones parciales, los reembolsos y los tiempos antes de comprometer nada en el documento. Sale más barato resolverlo en la conversación que en el código."

### Prototyping

Hacer que el [agente](#agent) construya una versión rápida y tosca de algo, para cuando la conversación es demasiado poco fiel y hace falta un artefacto real sobre el cual hablar.

El [grilling](#grilling) resuelve decisiones de diseño en la conversación. Conversar es barato, pero es de baja fidelidad: hay preguntas que no se pueden responder con palabras (cómo se siente una interacción, si la forma de una API es cómoda en código real que la llama, si el layout funciona con tamaños de datos reales). La entrevista llega a una pregunta y tu respuesta honesta es "no sé, tendría que verlo". Pasado ese punto, la discusión da vueltas. En vez de eso, haz que el agente construya la cosa, míralo, y vuelve a la conversación con una respuesta.

Los agentes bajan el costo de construir, y eso es lo que hace esto práctico. Una versión tosca que antes tomaba un día armar ahora toma minutos, así que vale la pena hacerlo de rutina. Es una técnica de [human-in-the-loop](#human-in-the-loop): el prototipo está ahí para que tú reacciones.

Por lo general no te quedas en una sola mirada. Itera con el prototipo (reacciona, pide un cambio, reacciona de nuevo) para que cada ronda resuelva otra decisión contra el artefacto real, a una fidelidad más alta de la que permite la conversación.

Un prototipo no tiene que ser tosco de punta a punta. Puedes construir a calidad de producción las piezas que en realidad estás evaluando, para que cuando la decisión quede tomada, el componente o la API a la que reaccionaste se pueda trasladar al codebase real. Esto convierte al prototipado en material esencial para que la [spec](#spec) lo referencie.

_Uso:_

"Llevamos media hora discutiendo si el wizard debería ser una página o tres pasos."

"Las palabras no lo van a resolver: haz que el agente prototipe las dos. Las recorremos con clics y lo sabemos en cinco minutos."

### DX

Developer experience: qué tan fácil un codebase y su toolchain le hacen a los humanos hacer bien su trabajo. Un buen DX es feedback rápido, mensajes de error claros, documentación que responde la pregunta que de verdad tienes, y un setup que funciona a la primera. El término es muy anterior al AI coding; está en este diccionario sobre todo como contraste para el [AX](#ax).

El DX es la interacción entre el humano y el codebase, nada más. La diferencia principal entre las dos audiencias es que los humanos son [con estado](#stateful) y los agentes son [sin estado](#stateless). Un humano aprende el codebase una vez y carga con ese conocimiento todos los días después, y por eso un DX malo se sobrevive: rodean un CI lento agrupando sus pushes, rodean la falta de docs preguntando una vez en Slack, rodean una estructura confusa memorizando dónde vive cada cosa. Los workarounds se acumulan, y un equipo termina siendo productivo en un codebase que se les resiste.

Los [agentes](#agent) enfrentan el mismo codebase sin nada de esa acumulación. Sin estado entre [sesiones](#session), un agente reaprende el codebase desde cero cada vez: se beneficia de la suite de tests rápida y de los mensajes de error claros, pero todo lo que descubrió ayer desaparece a menos que haya quedado escrito en el [entorno](#environment), que el agente solo percibe a través de los [tool results](#tool-result). Esa es la brecha que nombra el AX: las partes del DX que sobreviven cuando el desarrollador es un agente, más preocupaciones que los humanos no tienen, como mantener libre la [ventana de contexto](#context-window).

La superposición significa que invertir en DX suele mejorar el AX gratis: tipos estrictos, tests rápidos y una estructura predecible ayudan a las dos audiencias. La divergencia significa que no siempre: un doc de onboarding hermoso ayuda a un humano durante una semana y a un agente nada, a menos que sea alcanzable desde [AGENTS.md](#agentsmd).

_Uso:_

"Nuestro DX está bien: los nuevos ingresos son productivos en una semana."

"Productivos porque alguien se sienta con ellos esa semana. El agente no tiene esa semana; revisa el AX por separado."

### AX

Agent experience: qué tan bien está preparado el [entorno](#environment) para que un [agente](#agent) trabaje bien en un codebase. Es la contraparte del [DX](#dx) del lado del agente. Cuando el mismo agente rinde bien en un repo y mal en otro (mismo [modelo](#model), mismo [harness](#harness)), la diferencia suele ser el AX. El instinto es culpar al modelo o reescribir el prompt; el arreglo está más seguido en el repo.

Un buen AX tiene tres dimensiones principales:

| Dimensión                    | Cómo se ve un buen AX                                                                                                                                                                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verificaciones automatizadas | [Verificaciones automatizadas](#automated-check) rápidas y deterministas (tipos, tests, lints) desde las que el agente puede autocorregirse sin un humano                                                                                                                        |
| Arquitectura                 | Un codebase que el agente puede recorrer sin leerlo todo: estructura predecible, mucho comportamiento detrás de interfaces chicas, nombres que dicen qué hace cada cosa                                                                                                                |
| Contexto libre               | [AGENTS.md](#agentsmd), [skills](#skill) y [tools](#tool) mantenidos livianos, para que la mayor parte de la [ventana de contexto](#context-window) quede disponible para la tarea y el agente se mantenga en la [smart zone](#smart-zone) en vez de ahogarse |

El AX y el DX se superponen (buenas verificaciones y una arquitectura limpia ayudan a las dos audiencias), pero divergen. Los humanos toleran el conocimiento tribal, un CI lento y "pregúntale a Sarah sobre el módulo de facturación"; los agentes no pueden. Los agentes no se benefician de los tooltips del IDE ni de dashboards bonitos; necesitan las fallas como texto en un [tool result](#tool-result). Un codebase puede tener buen DX y mal AX.

_Evita:_ tratar el AX como sinónimo de DX: las audiencias necesitan inversiones distintas.

_Uso:_

"El agente escribe código excelente en el repo de la API y basura en el frontend."

"El repo de la API tiene tipos estrictos y una suite de tests rápida; el frontend no tiene ninguna de las dos cosas y cuarenta skills siempre cargadas. Eso es una brecha de AX, no un problema de modelo."

