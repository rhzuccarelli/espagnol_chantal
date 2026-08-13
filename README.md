# Español — Quiz

Una pequeña aplicación (PWA) para repasar **español de nivel A1**: conjugación,
vocabulario, gramática y expresiones. Sin dependencias externas — solo HTML, CSS
y JavaScript puro. Adaptación al español de
[French_Quiz](https://github.com/rhzuccarelli/French_Quiz), manteniendo el mismo
estilo y estructura.

## Qué incluye

| Herramienta | Archivo | Para qué |
|-------------|---------|----------|
| Verbos — quiz | `spanish-verbs-quiz.html` | Conjugar en presente (53 verbos, 318 formas) |
| Verbos — flashcards | `spanish-verbs-learn.html` | Aprender la conjugación a tu ritmo |
| Verbos — chuleta | `spanish-verbs-cheatsheet.html` | Terminaciones por grupo (referencia) |
| Participios — quiz | `spanish-participios-quiz.html` | Participio + ¿regular o irregular? |
| Participios — flashcards | `spanish-participios-learn.html` | Memorizar los participios pasados |
| Vocabulario — flashcards | `spanish-vocab-learn.html` | 267 palabras por tema (es↔en) |
| Vocabulario — quiz | `spanish-vocab-quiz.html` | Test de opción múltiple |
| Gramática — chuleta | `spanish-gramatica.html` | 29 fichas de reglas, filtrables por unidad |
| Gramática — quiz | `spanish-gramatica-quiz.html` | 60 preguntas tipo examen + corrección |
| Expresiones útiles | `spanish-expresiones.html` | 73 frases para hablar y escribir |

## Características

- **Modo claro / oscuro** con preferencia guardada.
- **Estadísticas**: porcentaje de acierto y tiempo medio, por sesión e histórico.
- **Rachas** de respuestas correctas.
- **Progreso guardado** en el navegador (`localStorage`).
- **Pistas de pronunciación (AFI)** opcionales en los quizzes de conjugación.
- **Funciona sin conexión**: es una PWA; ábrela en el móvil y usa
  «Añadir a la pantalla de inicio».

## Cómo usarla

Abre `index.html` en el navegador. No necesita servidor ni instalación
(aunque para el service worker conviene servirla por HTTP, p. ej. con
`python3 -m http.server`).
