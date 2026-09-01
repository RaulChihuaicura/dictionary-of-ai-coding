---
description: "La unidad atómica que el modelo lee y escribe. Casi del tamaño de una palabra. El contexto, el costo y la latencia se miden en tokens."
---

La unidad atómica que un [modelo](./Model.md) lee y escribe. Aproximadamente del tamaño de una palabra, pero no exactamente: las palabras comunes son un token, y las raras o largas se parten en varios. El tamaño de la [ventana de contexto](./Context%20window.md), el costo y la latencia se cuentan todos en tokens.

El texto se convierte en tokens mediante un tokenizador: un vocabulario fijo de decenas de miles de fragmentos, aprendido antes del [entrenamiento](./Training.md), que parte cualquier entrada en una secuencia de elementos de ese vocabulario. El modelo nunca ve caracteres ni palabras. Todo texto se convierte a tokens al entrar, y la [predicción del siguiente token](./Next-token%20prediction.md) produce la salida de a un token por vez.

Como regla gruesa, un token equivale a unas tres cuartas partes de una palabra en inglés, así que mil tokens son unas 750 palabras. El código es menos predecible: las palabras clave y los modismos comunes se tokenizan de forma compacta, mientras que los identificadores generados, los hashes, los blobs en base64 y la salida minificada se parten en muchos tokens por "palabra". El patrón es este: el texto que aparecía seguido en el material de origen del tokenizador recibe codificaciones cortas y eficientes, y el que no aparecía queda picado en muchos pedazos chicos. Un hash como `a3f9c2e1` no apareció nunca en ninguna parte, así que se parte en varios tokens, mientras que `function` es uno solo. Por eso un archivo de apariencia pequeña, pero lleno de cadenas inusuales, puede ocupar una porción sorprendente de la ventana de contexto.

Los tokens son la unidad en la que se mide todo lo demás. El costo es por token: los proveedores facturan por separado los [tokens de entrada](./Input%20tokens.md) y los [tokens de salida](./Output%20tokens.md). La velocidad son tokens por segundo, porque la salida se genera de a un token por vez. Y la ventana de contexto es un número fijo de tokens, así que la cantidad de tokens de tus archivos decide cuánto cabe.

_Evita:_ "palabra". Los límites de un token no coinciden con los de una palabra, y las unidades que de verdad importan son tokens por segundo y tokens por dólar.

_Uso:_

"¿De qué tamaño va a salir este prompt?"

"Pásalo por el tokenizador. El schema es compacto, pero las claves del JSON son raras, así que se van a partir en más tokens de los que crees."
