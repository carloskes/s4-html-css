# s4-html-css · Dashboard de nómina (NETTPLUS)

Página web hecha con HTML y CSS básico para la asignatura de Ingeniería Web. Contiene el acta de constitución del proyecto "Dashboard de nómina" y el levantamiento de información de la reunión con el cliente NETTPLUS.

**Equipo:** Carlos Correa, Emilio Cueva y Jorge Díaz.

## Qué muestra la página

Es una sola página (`index.html`) con una barra de navegación que lleva a cada sección:

1. Datos generales del proyecto
2. Propósito y justificación
3. Alcance preliminar
4. Resultados esperados y beneficios
5. Requisitos de alto nivel
6. Hitos
7. Riesgos
8. Supuestos y restricciones
9. Costos preliminares
10. Interesados principales
11. Levantamiento de información (reunión con el cliente)
12. Tecnologías que vamos a usar
13. Tecnología para más adelante: API de ZKTeco

Al final hay un botón "Volver arriba".

## Estructura del repositorio

```
s4-html-css/
├── proyectoweb/
│   ├── index.html
│   ├── css/
│   │   └── estilos.css
│   └── img/
│       └── Logo.png
├── img/
├── .gitignore
└── README.md
```

- `proyectoweb/index.html`: contenido y estructura de la página.
- `proyectoweb/css/estilos.css`: todos los estilos, en un solo archivo.
- `proyectoweb/img/Logo.png`: logo que se muestra en el encabezado.
- `img/`: imágenes sueltas que venían del proyecto inicial.

## Detalles técnicos

**HTML**
- Documento HTML5 en español (`lang="es"`) con codificación UTF-8.
- Etiquetas semánticas: `header`, `nav`, `main`, `section`, `article`, `footer`.
- La navegación usa enlaces internos (anclas): cada enlace del menú apunta a un `id` de una sección, por ejemplo `href="#requisitos"` lleva a `<section id="requisitos">`. No usa JavaScript.
- El CSS se enlaza en el `head` con `<link rel="stylesheet" href="css/estilos.css">`.
- Incluye la etiqueta `viewport` para que se vea bien en celular.

**CSS**
- Un solo archivo con reglas por etiqueta (`body`, `h1`, `section`...) y por clase (`.encabezado`, `.barra-navegacion`, `.tarjeta`, `.boton`, `.pie`).
- Clases principales:
  - `.contenedor`: centra el contenido y limita su ancho a 1000 px.
  - `.encabezado` y `.cabecera`: franja azul con el logo y el título, acomodados con Flexbox.
  - `.barra-navegacion`: menú horizontal con Flexbox; si no caben los enlaces, pasan a otra línea.
  - `.tarjeta`: cuadro con borde verde a la izquierda para cada `article`.
  - `.boton`: botón verde con efecto al pasar el mouse (`:hover`).
  - `.pie`: pie de página.
- Los colores salen del logo: azul `#004e75` y verde `#6eb44d`. Los colores corporativos definitivos los entrega el cliente.
- Desplazamiento suave entre secciones con `scroll-behavior: smooth`.
- Diseño adaptable con una regla `@media (max-width: 650px)` para pantallas pequeñas.
- Tipografía: Arial, con Helvetica y sans-serif como respaldo.

## Cómo verla

1. Clonar o descargar el repositorio.
2. Abrir `proyectoweb/index.html` en el navegador (no necesita servidor ni instalación).

## Control de versiones

El proyecto se fue guardando por etapas con Git: estructura inicial, contenido del `index.html`, hoja de estilos, enlace del CSS con las clases y, al final, este README.
