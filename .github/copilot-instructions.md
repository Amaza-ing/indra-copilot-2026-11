# Instrucciones para el desarrollo de Casa Marea

## Objetivo del proyecto

Este proyecto es una landing page estática para una marca boutique de alojamientos junto al mar. La prioridad es mantener una experiencia visual premium, serena y elegante, con un enfoque en la calma, la naturaleza y la sensación de pausa.

La web debe seguir una estética minimalista, editorial y cálida, con contenido en español y una clara intención comercial.

## Principios de trabajo

- Mantén el código simple, legible y fácil de mantener.
- Prioriza HTML semántico, CSS limpio y JavaScript funcional sin dependencias externas innecesarias.
- No añadas frameworks ni librerías si no son estrictamente necesarias.
- Mantén un enfoque de “landing page” ligera, rápida y centrada en la conversión.
- Cuando modifiques estilos, conserva la coherencia visual del proyecto: paleta suave, tipografía editorial y espacios generosos.

## Estilo visual

- Utiliza colores oscuros para el fondo del Header y pequeñas secciones.
- Usa una paleta cálida con tonos tierra, verde oliva, marino y crema.
- Mantén una estructura visual clara con sections, encabezados, CTA y bloques de contenido bien definidos.
- Preserva la identidad “slow living” del proyecto: calma, lujo discreto y sensación de descanso.
- Cuando añadas nuevos elementos, asegúrate de que encajen visualmente con la narrativa de la marca.

## HTML

- Usa etiquetas semánticas (`header`, `main`, `section`, `footer`, `nav`, `article`, `form`, etc.).
- Mantén el contenido accesible: textos alternativos en imágenes, labels en formularios y botones con texto claro.
- Evita divs innecesarias cuando un elemento semántico aporta más claridad.
- Escribe textos y mensajes en español, salvo que exista una razón explícita para otro idioma.

## CSS

- Guarda los colores, tipografías y espaciaciones en variables CSS cuando tengan sentido reutilizable.
- Mantén una estructura modular y consistente en los estilos.
- Diseña para móvil primero y adapta la composición para escritorio con media queries bien definidas.
- Mantén un equilibrio entre minimalismo y detalle visual; evita sobrecargas ornamentales.
- Revisa que el contraste y la legibilidad sigan siendo correctos en modo oscuro y claro.

## JavaScript

- Mantén el comportamiento funcional y ligero.
- Usa código claro y reutilizable: funciones pequeñas y nombres descriptivos.
- Si agregas interactividad, asegúrate de no romper la navegación ni la accesibilidad.
- Validaciones del formulario deben ser robustas pero simples.
- Si se implementa tema oscuro, debe persistir con `localStorage` y respetar el estado inicial.

## Accesibilidad

- Asegura que los botones, enlaces y inputs sean navegables por teclado.
- Usa `aria-label` solo cuando sea necesario para clarificar la intención.
- Mantén la interacción visual clara para hover, focus y estados activos.
- Las animaciones deben ser sutiles y no afectar negativamente a la legibilidad.

## Mantenimiento y buenas prácticas

- No introduzcas archivos innecesarios ni dependencias extra sin necesidad.
- Cuando realices cambios, mantén el contenido del proyecto consistente con la marca.
- Antes de cerrar una tarea, revisa que no se hayan roto secciones existentes ni la experiencia responsive.
- Si se añaden nuevas secciones, procura que sigan la misma narrativa visual del sitio.
- Si se actualiza texto o contenido, mantén la coherencia entre HTML, estilos y mensajes visuales.

## Recomendaciones concretas para seguir desarrollando el proyecto

- Mantén la estructura de una sola página, con navegación interna clara.
- Mejorar la conversión con CTA visualmente consistentes y bien ubicados.
- Añadir contenido solo si refuerza la intención de marca: tranquilidad, exclusividad, riqueza sensorial y descanso.
- Prioriza contenido útil y elegante antes que elementos puramente decorativos.
- Si se implementan nuevas secciones (reservas, testimonios, galería, detalles de estancia, FAQ), deben conservar la misma identidad visual y tono editorial.

## Criterios de aceptación para cambios

Un cambio se considera correcto si:

- no rompe la navegación ni la estructura general,
- mantiene el diseño coherente con la identidad de Casa Marea,
- funciona correctamente en distintos tamaños de pantalla,
- conserva la accesibilidad básica,
- y no añade complejidad innecesaria al proyecto.

## Nota final

Este proyecto debe continuar como una experiencia visual calmada, premium y útil. Cada cambio debe reforzar la sensación de descanso y la claridad de marca, sin introducir ruido visual ni complejidad técnica innecesaria.
