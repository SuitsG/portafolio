// Verificaciones adicionales para el despliegue en Vercel
(function () {
    'use strict';

    // Verificar compatibilidad del navegador
    function checkBrowserCompatibility() {
        const isModernBrowser =
            'requestAnimationFrame' in window &&
            'addEventListener' in document &&
            'querySelector' in document;

        if (!isModernBrowser) {
            console.warn('Navegador no compatible con todas las características');
            return false;
        }
        return true;
    }

    // Inicialización segura del cursor
    function initializeCursorSafely() {
        if (!checkBrowserCompatibility()) return;

        const cursor = document.querySelector('.cursor');
        const cursorTrail = document.querySelector('.cursor-trail');

        // Verificar que los elementos existen
        if (!cursor || !cursorTrail) {
            console.warn('Elementos del cursor no encontrados');
            return;
        }

        // Verificar que no es un dispositivo táctil
        const isTouchDevice =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia('(hover: none)').matches;

        if (isTouchDevice) {
            cursor.style.display = 'none';
            cursorTrail.style.display = 'none';
            document.body.style.cursor = 'default';
            return;
        }

        // Activar cursor personalizado
        cursor.style.opacity = '1';
        cursorTrail.style.opacity = '1';
        document.body.style.cursor = 'none';
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCursorSafely);
    } else {
        initializeCursorSafely();
    }

    // Verificar periódicamente si los elementos están disponibles
    let retryCount = 0;
    const maxRetries = 10;

    function retryInitialization() {
        if (retryCount >= maxRetries) return;

        const cursor = document.querySelector('.cursor');
        const cursorTrail = document.querySelector('.cursor-trail');

        if (!cursor || !cursorTrail) {
            retryCount++;
            setTimeout(retryInitialization, 500);
            return;
        }

        initializeCursorSafely();
    }

    // Intentar inicialización después de un breve delay
    setTimeout(retryInitialization, 100);

})();