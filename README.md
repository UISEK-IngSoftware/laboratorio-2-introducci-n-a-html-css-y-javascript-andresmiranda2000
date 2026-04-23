[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/56ndCR1W)
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/vl4jljH6)
# 💻 Laboratorio 2: Introducción a HTML, CSS y JavaScript - Mi Portafolio Web

## 🎯 Objetivo

Este laboratorio tiene como objetivo introducir a los estudiantes en el desarrollo web usando HTML, CSS y JavaScript, mediante la creación de una página web personal que funcione como portafolio/currículum vitae.

---

## 📁 Estructura del proyecto

El proyecto debe contener **exactamente** los siguientes archivos organizados de la siguiente manera:

```
📂 tu-portafolio/
├── 📄 index.html                    # Página principal con la estructura HTML
├── 📂 assets/                       # Carpeta para recursos del proyecto
│   ├── 🎨 css/
│   │   └── styles.css               # Archivo de estilos CSS
│   ├── ⚡ js/
│   │   └── scripts.js               # Archivo de JavaScript para interactividad
│   └── 🖼️ images/
│       └── tu-foto.jpg              # Tu foto de perfil (REQUERIDA)
└── 📝 README.md                     # Este archivo de instrucciones
```


---

## 📋 Instrucciones paso a paso

### Paso 1: Crear la estructura HTML (index.html)

**Primero crea las carpetas necesarias:**
1. Crea una carpeta llamada `assets`
2. Dentro de `assets`, crea las subcarpetas: `css`, `js` e `images`

**Ahora construye tu HTML paso a paso:**

#### 1.1 Estructura básica del documento
Crea un archivo `index.html` y comienza con la estructura básica de HTML5:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Aquí irá la información del documento -->
</head>
<body>
    <!-- Aquí irá todo el contenido visible -->
</body>
</html>
```

**🤔 Pregunta:** ¿Por qué usamos `lang="es"`? ¿Qué importancia tiene para los navegadores?

#### 1.2 Configurar el HEAD
Dentro de la etiqueta `<head>`, agrega los siguientes elementos **uno por uno**:

1. **Codificación de caracteres** para que funcionen las tildes y ñ
2. **Viewport** para que sea responsive en móviles  
3. **Título** que aparecerá en la pestaña del navegador
4. **Enlace al CSS** que crearemos después

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portafolio - [Tu Nombre]</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
```

**💡 Pista:** Cada elemento tiene una función específica. Investiga qué hace cada `<meta>` tag.

#### 1.3 Crear el HEADER
Dentro del `<body>`, crea un `<header>` que contenga:
- Un título principal (`<h1>`) con tu nombre completo
- Una imagen tuya usando `<img>` (recuerda el atributo `alt`)

```html
<header>
    <h1>[Tu Nombre Completo]</h1>
    <img src="assets/images/tu-foto.jpg" alt="Foto de [Tu Nombre]" id="foto-perfil">
</header>
```

**🎯 Objetivo:** El header debe presentarte como profesional.

#### 1.4 Estructurar el contenido principal con MAIN
Crea una etiqueta `<main>` que contendrá todas las secciones principales:

**Sección 1 - Acerca de mí:**
- Usa `<section>` con un id apropiado
- Incluye un `<h2>` como título de sección
- Agrega un párrafo `<p>` con tu descripción personal

```html
<main>
    <section id="acerca-de">
        <h2>Acerca de mí</h2>
        <p>Escribe aquí una descripción personal profesional...</p>
    </section>
</main>
```

**Sección 2 - Habilidades:**
- Otra `<section>` independiente
- Un `<h2>` con id="toggle-habilidades" (necesario para JavaScript)
- Una lista no ordenada `<ul>` con id="habilidades"
- Varios elementos `<li>` con tus habilidades

```html
<section>
    <h2 id="toggle-habilidades">Habilidades</h2>
    <ul id="habilidades">
        <li>[Habilidad 1]</li>
        <li>[Habilidad 2]</li>
        <li>[Habilidad 3]</li>
    </ul>
</section>
```

**Sección 3 - Educación:**
- `<section>` para agrupar información educativa
- `<h2>` con id="toggle-educacion"
- Un `<div>` con id="educacion" que contenga tu información académica

```html
<section>
    <h2 id="toggle-educacion">Educación</h2>
    <div id="educacion">
        <h3>[Nombre de tu institución]</h3>
        <p><strong>Carrera:</strong> [Tu carrera]</p>
        <p><strong>Período:</strong> [Año] - Presente</p>
    </div>
</section>
```

**🤔 Reflexión:** ¿Por qué usamos `<section>` en lugar de `<div>`? ¿Cuál es la diferencia semántica?

#### 1.5 Crear el FOOTER
Al final del `<body>`, antes de cerrar, agrega un `<footer>` con:
- Enlaces a tu email usando `mailto:`
- Enlaces a redes sociales (LinkedIn, GitHub, etc.)

```html
<footer>
    <p>Contacto:</p>
    <a href="mailto:tu-email@ejemplo.com">📧 Email</a>
    <a href="https://linkedin.com/in/tu-perfil" target="_blank">💼 LinkedIn</a>
    <a href="https://github.com/tu-usuario" target="_blank">💻 GitHub</a>
</footer>
```

**⚠️ Importante:** Recuerda que todos los enlaces deben usar `<a href="...">`.

#### 1.6 Conectar JavaScript
Justo antes de cerrar `</body>`, agrega la referencia a tu archivo JavaScript que crearemos después:

```html
    <script src="assets/js/scripts.js"></script>
</body>
</html>
```

**🎯 Resultado esperado:** Al final de este paso debes tener un archivo HTML completo y bien estructurado, sin estilos pero con contenido organizado semánticamente.

**✅ Verificación:** Abre tu archivo en el navegador. Debe verse sin estilos pero con toda la información claramente organizada.

### Paso 2: Aplicar estilos con CSS (assets/css/styles.css)

Crea un archivo `styles.css` **dentro de la carpeta `assets/css/`** para dar estilo a tu portafolio:

**Construye tu CSS paso a paso:**

#### 2.1 Reset básico y configuración global
Comienza con un reset básico para eliminar los estilos predeterminados del navegador:

```css
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**🤔 Pregunta:** ¿Por qué es importante hacer un reset CSS? ¿Qué hace `box-sizing: border-box`?

#### 2.2 Estilos del body y tipografía general
Define la tipografía base y colores principales de tu sitio:

```css
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
```

**💡 Pista:** `line-height: 1.6` mejora la legibilidad. ¿Qué hace `max-width` y `margin: 0 auto`?

#### 2.3 Estilos para el header
Estiliza tu encabezado para que sea visualmente atractivo:

```css
header {
    text-align: center;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

header h1 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 2.5rem;
}

#foto-perfil {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #3498db;
}
```

**🎯 Objetivo:** El header debe verse profesional y ser el punto focal de tu portafolio.

#### 2.4 Estilos para las secciones principales
Dale formato a tus secciones de contenido:

```css
main {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

section {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
}

section:last-child {
    border-bottom: none;
}

h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

h3 {
    color: #34495e;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}
```

**🤔 Reflexión:** ¿Por qué usamos `section:last-child` para quitar el borde inferior?

#### 2.5 Estilos para listas y elementos interactivos
Crea estilos para las listas y elementos que tendrán funcionalidad JavaScript:

```css
/* Estilos para la lista de habilidades */
#habilidades {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

#habilidades li {
    background-color: #3498db;
    color: white;
    padding: 0.8rem;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
}

/* Estilos para elementos interactivos */
#toggle-habilidades, #toggle-educacion {
    cursor: pointer;
    color: #3498db;
    transition: color 0.3s ease;
}

#toggle-habilidades:hover, #toggle-educacion:hover {
    color: #2980b9;
    text-decoration: underline;
}

/* Clases para mostrar/ocultar elementos */
.oculto {
    display: none !important;
}

.visible {
    display: block;
}
```

**💡 Pista:** `transition` crea animaciones suaves. ¿Qué hace `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`?

#### 2.6 Estilos para el footer
Finaliza con los estilos del pie de página:

```css
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
    border-radius: 10px;
    margin-top: 2rem;
}

footer p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

footer a {
    color: #3498db;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

footer a:hover {
    color: #5dade2;
    text-decoration: underline;
}
```

#### 2.7 Responsive design (opcional pero recomendado)
Agrega estilos para dispositivos móviles:

```css
/* Responsive design para móviles */
@media (max-width: 768px) {
    body {
        padding: 10px;
    }
    
    header h1 {
        font-size: 2rem;
    }
    
    #foto-perfil {
        width: 120px;
        height: 120px;
    }
    
    #habilidades {
        grid-template-columns: 1fr;
    }
    
    footer a {
        display: block;
        margin: 0.5rem 0;
    }
}
```

**🎯 Resultado esperado:** Un portafolio con diseño moderno, responsive y elementos interactivos listos para JavaScript.

**✅ Verificación:** Recarga tu página en el navegador. Debe verse estilizada, profesional y adaptarse a diferentes tamaños de pantalla.

### Paso 3: Agregar interactividad con JavaScript (assets/js/scripts.js)

Crea un archivo `scripts.js` **dentro de la carpeta `assets/js/`** para agregar funcionalidad interactiva:

**Construye tu JavaScript paso a paso:**

#### 3.1 Configuración inicial y espera del DOM
Comienza con la estructura básica que espera a que el DOM esté completamente cargado:

```javascript
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - JavaScript funcionando');
    
    // Aquí irá todo nuestro código
});
```

**🤔 Pregunta:** ¿Por qué es importante esperar a que el DOM esté cargado? ¿Qué pasaría si no lo hacemos?

#### 3.2 Seleccionar elementos del DOM
Obtén referencias a los elementos HTML que necesitas manipular:

```javascript
// Seleccionar elementos para la funcionalidad de habilidades
const toggleHabilidades = document.getElementById('toggle-habilidades');
const habilidades = document.getElementById('habilidades');

// Seleccionar elementos para la funcionalidad de educación
const toggleEducacion = document.getElementById('toggle-educacion');
const educacion = document.getElementById('educacion');

// Verificar que los elementos existen
if (!toggleHabilidades || !habilidades) {
    console.error('No se encontraron los elementos de habilidades');
}

if (!toggleEducacion || !educacion) {
    console.error('No se encontraron los elementos de educación');
}
```

**💡 Pista:** `getElementById` busca elementos por su ID. ¿Por qué verificamos que los elementos existan?

#### 3.3 Función para alternar visibilidad de la sección (toggle)
Crea una función reutilizable para mostrar/ocultar elementos:

```javascript
// Función reutilizable para alternar visibilidad
function toggleElement(element) {
    if (element.classList.contains('oculto')) {
        element.classList.remove('oculto');
        element.classList.add('visible');
        return 'mostrado';
    } else {
        element.classList.remove('visible');
        element.classList.add('oculto');
        return 'ocultado';
    }
}
```

**🎯 Objetivo:** Esta función permite reutilizar código y mantener la lógica organizada.

#### 3.4 Event listeners para habilidades
Agrega la funcionalidad de clic para la sección de habilidades:

```javascript
// Event listener para toggle de habilidades
if (toggleHabilidades && habilidades) {
    toggleHabilidades.addEventListener('click', function() {
        const estado = toggleElement(habilidades);
        console.log('Habilidades ' + estado);
    });
}
```

**🤔 Reflexión:** ¿Cómo mejora la experiencia del usuario poder mostrar/ocultar secciones?

#### 3.5 Event listeners para educación
Agrega la funcionalidad de clic para la sección de educación:

```javascript
// Event listener para toggle de educación
if (toggleEducacion && educacion) {
    toggleEducacion.addEventListener('click', function() {
        const estado = toggleElement(educacion);
        console.log('Educación ' + estado);
    });
}
```

#### 3.6 Funcionalidad adicional (opcional pero recomendada)
Agrega efectos visuales y mejoras en la experiencia de usuario:

```javascript
// Agregar efectos visuales al header
const header = document.querySelector('header');
if (header) {
    header.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    header.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Agregar animación suave al scroll hacia secciones
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('click', function() {
        this.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mostrar mensaje de bienvenida
function mostrarBienvenida() {
    const nombre = document.querySelector('h1').textContent;
    console.log(`¡Bienvenido al portafolio de ${nombre}!`);
    
    // Opcional: mostrar una alerta de bienvenida
    // alert(`¡Bienvenido al portafolio de ${nombre}!`);
}

// Llamar la función de bienvenida
mostrarBienvenida();
```

**💡 Pista:** `querySelector` y `querySelectorAll` son más flexibles que `getElementById`. ¿Cuál es la diferencia?

#### 3.7 Manejo de errores y debugging
Agrega código para manejar errores y facilitar el debugging:

```javascript
// Función para debug - mostrar todos los elementos interactivos
function debugElementos() {
    console.log('=== DEBUG: Elementos encontrados ===');
    console.log('Toggle Habilidades:', toggleHabilidades);
    console.log('Lista Habilidades:', habilidades);
    console.log('Toggle Educación:', toggleEducacion);
    console.log('Div Educación:', educacion);
    console.log('===================================');
}

// Llamar debug solo en desarrollo (puedes comentar esta línea en producción)
debugElementos();

// Manejo global de errores
window.addEventListener('error', function(e) {
    console.error('Error en JavaScript:', e.error);
});
```

**🎯 Resultado esperado:** Un portafolio completamente interactivo con funcionalidades de mostrar/ocultar, efectos visuales y manejo de errores.

**✅ Verificación:** 
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Console"
3. Haz clic en los títulos "Habilidades" y "Educación"
4. Verifica que las secciones se muestran/ocultan correctamente
5. Comprueba que no hay errores en la consola

### Paso 4: Conectar todos los archivos

Asegúrate de que en tu `index.html`:

1. **CSS esté enlazado** en el `<head>` con la ruta correcta:
```html
<link rel="stylesheet" href="assets/css/styles.css">
```

2. **JavaScript esté enlazado** antes del cierre de `</body>` con la ruta correcta:
```html
<script src="assets/js/scripts.js"></script>
```

3. **Las imágenes** tengan la ruta correcta:
```html
<img src="assets/images/tu-foto.jpg" alt="Descripción de la imagen">
```

> **Nota importante:** Es fundamental que respetes esta estructura de carpetas y las rutas relativas para que tu proyecto funcione correctamente.

---

## 🚀 Entrega del laboratorio

### Paso 1: Clonar el repositorio
Clona el repositorio desde GitHub Classroom:

```bash
git clone <URL-del-repositorio>
cd <nombre-del-repositorio>
```

### Paso 2: Desarrollar tu portafolio
1. **Crea la estructura de carpetas** como se indica en el diagrama anterior
2. Crea los archivos `index.html`, `assets/css/styles.css` y `assets/js/scripts.js` siguiendo las instrucciones
3. **REQUERIDO:** Agrega tu foto en `assets/images/` (formato: jpg, jpeg, png, gif o webp)

### Paso 3: Configurar token de acceso (solo primera vez)
Si es la primera vez que usas GitHub:
1. Ve a: https://github.com/settings/tokens
2. Genera un **token clásico** con permisos para repositorios
3. Guarda el token en un lugar seguro (lo necesitarás para autenticarte)

### Paso 4: Subir tu trabajo
```bash
git add .
git commit -m "Laboratorio 2: Portafolio web completado"
git push origin main
```

---

## 🤖 Sistema de Autocalificación

Este laboratorio cuenta con un **sistema automático de calificación** que se ejecuta cada vez que subes tu código a GitHub. Las pruebas verifican:

### 📋 Criterios de evaluación automática

| Categoría | Peso | Qué se evalúa |
|-----------|------|---------------|
| **HTML Estructura** | 25% | DOCTYPE, elementos semánticos, IDs correctos, enlaces bien formados |
| **Assets y Enlaces** | 20% | Estructura de carpetas, archivos CSS/JS existentes, rutas correctas |
| **Contenido Personal** | 30% | Información personalizada, sin placeholders, contenido sustancial |
| **JavaScript Funcionalidad** | 25% | Toggle de secciones, event listeners, sin errores en consola |

### 🎯 Puntuación y calificaciones

- **90-100%**: A - Excelente trabajo
- **80-89%**: B - Buen trabajo  
- **70-79%**: C - Satisfactorio
- **60-69%**: D - Mínimo aceptable
- **0-59%**: F - Necesita mejoras

### ✅ Cómo funciona

1. **Automático**: Se ejecuta al hacer `git push` a tu repositorio
2. **Inmediato**: Resultados disponibles en 2-3 minutos
3. **Detallado**: Reporte específico de qué aprobar y qué mejorar
4. **Múltiples intentos**: Puedes corregir y volver a subir

### 📊 Ver tus resultados

1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **"Actions"**
3. Selecciona la ejecución más reciente
4. Revisa el reporte detallado

### 🔧 Ejecutar pruebas localmente (opcional)

Si tienes Node.js instalado, puedes probar tu trabajo antes de subirlo:

```bash
# Instalar dependencias
npm install

# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas específicas
npm run test:html      # Solo HTML
npm run test:assets    # Solo assets
npm run test:content   # Solo contenido
npm run test:javascript # Solo JavaScript
```

### 🆘 Solución de problemas comunes

**❌ "Archivo no encontrado"**
- Verifica que los archivos estén en las rutas correctas
- Revisa que las carpetas `assets/css`, `assets/js` existan

**❌ "JavaScript no funciona"**
- Abre las herramientas de desarrollador (F12)
- Revisa la consola para ver errores
- Verifica que los IDs coincidan exactamente

**❌ "Contenido no personalizado"**
- Reemplaza TODOS los placeholders como `[Tu Nombre]`
- Asegúrate de que el contenido sea sustancial
- Personaliza email y enlaces de redes sociales

**❌ "CSS no se aplica"**
- Verifica la ruta: `href="assets/css/styles.css"`
- Asegúrate de que el archivo CSS existe
- Revisa que no haya errores de sintaxis en CSS

**❌ "Foto de perfil no encontrada"**
- Agrega una imagen en `assets/images/` con formato válido (jpg, jpeg, png, gif, webp)
- Verifica que la ruta en HTML sea `src="assets/images/nombre-archivo.extensión"`
- Asegúrate de que el archivo de imagen existe y no está vacío

---

## 🆘 Ayuda y recursos

### Recursos recomendados:
- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Problemas comunes:
- **CSS no se aplica**: Verifica que el enlace en HTML sea `href="assets/css/styles.css"`
- **JavaScript no funciona**: Verifica que la ruta sea `src="assets/js/scripts.js"` y abre las herramientas de desarrollador (F12) para ver errores
- **Imágenes no cargan**: Asegúrate de que estén en `assets/images/` y la ruta sea correcta
- **Git no funciona**: Asegúrate de estar en el directorio correcto del proyecto

### ¿Necesitas ayuda?
- Consulta con el profesor durante las clases
- Revisa los recursos en línea mencionados
- Trabaja con tus compañeros (pero entrega trabajo individual)
