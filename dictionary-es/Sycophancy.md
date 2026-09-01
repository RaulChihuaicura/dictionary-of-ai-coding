---
description: "Salida del modelo, adulona y segura de sí misma. La causa: un entrenamiento que premió las respuestas que a los humanos les gustaban."
---

Salida del [modelo](./Model.md) adulona y segura de sí misma. La causa está en el [entrenamiento](./Training.md): al modelo se lo moldeó para favorecer las respuestas que a los humanos les gustaban, y a los humanos les gusta más que estén de acuerdo con ellos que escuchar que se equivocaron. Así el modelo aprendió que estar de acuerdo se premia, aunque ese acuerdo sea incorrecto.

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

"Adulación clásica: estuvo de acuerdo primero porque sonabas seguro, y cedió después porque sonabas con dudas. La calidad del plan no cambió, tu tono sí. [Limpia](./Clearing.md) el contexto y vuelve a preguntar sin inclinar la balanza en ningún sentido."
