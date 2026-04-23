document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM cargado - JavaScript funcionando');

    const toggleHabilidades = document.getElementById('toggle-habilidades');
    const habilidades = document.getElementById('habilidades');
    const toggleEducacion = document.getElementById('toggle-educacion');
    const educacion = document.getElementById('educacion');

    if (!toggleHabilidades || !habilidades) {
        console.error('No se encontraron los elementos de habilidades');
    }

    if (!toggleEducacion || !educacion) {
        console.error('No se encontraron los elementos de educacion');
    }

    function toggleElement(element) {
        if (element.classList.contains('oculto')) {
            element.classList.remove('oculto');
            element.classList.add('visible');
            return 'mostrado';
        }

        element.classList.remove('visible');
        element.classList.add('oculto');
        return 'ocultado';
    }

    if (toggleHabilidades && habilidades) {
        toggleHabilidades.addEventListener('click', function () {
            const estado = toggleElement(habilidades);
            console.log('Habilidades ' + estado);
        });
    }

    if (toggleEducacion && educacion) {
        toggleEducacion.addEventListener('click', function () {
            const estado = toggleElement(educacion);
            console.log('Educacion ' + estado);
        });
    }

    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        header.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }

    const sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.addEventListener('click', function () {
            this.scrollIntoView({ behavior: 'smooth' });
        });
    });

    function mostrarBienvenida() {
        const nombre = document.querySelector('h1');
        const nombreTexto = nombre ? nombre.textContent.trim() : 'visitante';
        console.log('Bienvenido al portafolio de ' + nombreTexto + '!');
    }

    function debugElementos() {
        console.log('=== DEBUG: Elementos encontrados ===');
        console.log('Toggle Habilidades:', toggleHabilidades);
        console.log('Lista Habilidades:', habilidades);
        console.log('Toggle Educacion:', toggleEducacion);
        console.log('Div Educacion:', educacion);
        console.log('===================================');
    }

    mostrarBienvenida();
    debugElementos();

    window.addEventListener('error', function (e) {
        console.error('Error en JavaScript:', e.error);
    });
});
