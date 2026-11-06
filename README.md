# Casa Marea!!!!

Landing page de una marca boutique de alojamientos junto al mar. El proyecto presenta una experiencia visual cálida, minimalista y elegante, pensada para inspirar tranquilidad y promover escapadas de descanso en entornos costeros.

## Descripción del proyecto

Casa Marea es una web estática de una sola página diseñada para promocionar refugios de descanso, con una estética inspirada en la calma, la luz natural y la sensación de pausa. La interfaz combina tipografías serif para titulares, una paleta suave y una navegación clara para destacar estancias, filosofía de marca y contacto.

La página está desarrollada con HTML, CSS y JavaScript puro, sin dependencias ni herramientas de compilación. Está pensada para ser rápida, ligera y fácil de personalizar.

## Funcionalidades

- Diseño responsivo para escritorio y móvil.
- Navegación principal con menú adaptable para pantallas pequeñas.
- Tema claro y oscuro con persistencia en localStorage.
- Hero section con fotografía principal y mensajes de marca.
- Sección de estancias con tarjetas de alojamiento y precios.
- Formulario de newsletter con validación básica y feedback visual.
- Reloj analógico en la interfaz con actualización en tiempo real.
- Enlaces de contacto y CTA orientados a conversión.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Google Fonts
- Imágenes de Unsplash

## Estructura del proyecto

```text
mi-web/
├── index.html         # Estructura principal de la landing page
├── styles.css         # Estilos visuales, tokens de color y responsive design
├── script.js          # Interactividad: menú, tema oscuro, reloj y formulario
├── README.md          # Documentación del proyecto
└── .github/
    └── copilot-instructions.md
```

## Requisitos

- Un navegador moderno (Chrome, Edge, Firefox o Safari).
- Opcionalmente, un servidor local para visualizar la página en entorno más realista.

## Cómo ejecutar el proyecto

### Opción 1: abrir directamente

1. Abre el archivo `index.html` en tu navegador.
2. La web se cargará de forma local sin necesidad de instalar dependencias.

### Opción 2: servirlo con un servidor local

Desde la raíz del proyecto ejecuta:

```bash
python -m http.server 8000
```

Luego abre en tu navegador:

```text
http://localhost:8000
```

## Personalización

Puedes adaptar rápidamente el contenido y la apariencia del sitio:

- Cambia textos y mensajes desde `index.html`.
- Modifica la identidad visual en `styles.css` usando las variables CSS definidas en `:root`.
- Ajusta la lógica de comportamiento en `script.js`, como el tema oscuro o la validación del formulario.

## Diseño y estilo

El proyecto sigue un estilo editorial y sereno con:

- tonos tierra, verde y crema,
- tipografías de alta legibilidad para titulares,
- espacios amplios y una composición visual limpia,
- enfoque en una experiencia premium y relajada.

## Estado del proyecto

Este proyecto se encuentra en una versión de demostración / landing page estática. Está listo para servir como base visual para un sitio de turismo o alojamiento boutique, y puede ampliarse con más secciones, reservas, catálogo de propiedades o integración con backend.

## Licencia

Este proyecto no incluye una licencia definida en el repositorio. Si se va a reutilizar en un entorno profesional, conviene definir una licencia explícita antes de desplegarlo públicamente.
