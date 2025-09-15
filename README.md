# 🚀 Portfolio Futurista - Yesid Casallas

Portfolio web futurista con efectos visuales avanzados, cursor personalizado y animaciones interactivas.

## 🌟 Características

- **Diseño futurista** con efectos neón y glassmorphism
- **Cursor personalizado** con trail animado
- **Partículas interactivas** de fondo
- **Animaciones de scroll** y parallax
- **Totalmente responsivo** para todos los dispositivos
- **Filtros de proyectos** dinámicos
- **Formulario de contacto** funcional
- **Efectos de typing** en tiempo real

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con variables CSS y Flexbox/Grid
- **JavaScript ES6+** - Interactividad y animaciones
- **Particles.js** - Efectos de partículas
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografías (Orbitron & Rajdhani)

## 🚀 Despliegue en Vercel

### Paso 1: Preparar el repositorio
```bash
git init
git add .
git commit -m "Initial commit: Portfolio futurista"
git branch -M main
git remote add origin https://github.com/SuitsG/portfolio-futurista.git
git push -u origin main
```

### Paso 2: Configurar Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa el repositorio `portfolio-futurista`
4. Vercel detectará automáticamente que es un sitio estático
5. Haz clic en "Deploy"

### Paso 3: Configuración automática
El archivo `vercel.json` incluido configurará automáticamente:
- Cache de archivos estáticos
- Compresión gzip
- Headers de seguridad

## 📱 Compatibilidad

### Navegadores soportados:
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos:
- ✅ Desktop (cursor personalizado activo)
- ✅ Tablet (cursor deshabilitado)
- ✅ Mobile (optimizado para touch)

## 🔧 Desarrollo local

### Instalar y ejecutar:
```bash
# Clonar repositorio
git clone https://github.com/SuitsG/portfolio-futurista.git
cd portfolio-futurista

# Servir localmente
python -m http.server 8000
# O con Node.js
npx serve .
```

Visita `http://localhost:8000`

## 📁 Estructura del proyecto

```
portfolio-futurista/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript principal
├── cursor-fix.js       # Fix para cursor en producción
├── vercel.json         # Configuración de Vercel
└── README.md          # Documentación
```

## 🐛 Solución de problemas comunes

### El cursor no aparece en producción:
- ✅ **Solucionado** con `cursor-fix.js`
- Detección automática de dispositivos táctiles
- Fallback seguro para navegadores no compatibles

### Las partículas no cargan:
- Verificar que particles.js se carga desde CDN
- Comprobar consola del navegador para errores

### Problemas de rendimiento:
- El cursor se desactiva automáticamente en móviles
- Partículas optimizadas para diferentes dispositivos
- Animaciones con `will-change` para mejor performance

## 🎨 Personalización

### Cambiar colores:
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #00ffff;    /* Cyan principal */
    --secondary-color: #ff00ff;  /* Magenta secundario */
    --accent-color: #00ff88;     /* Verde acento */
}
```

### Modificar partículas:
Ajusta la configuración en `script.js`:
```javascript
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80  // Número de partículas
        }
    }
});
```

## 📈 Optimizaciones incluidas

- ⚡ Lazy loading de imágenes
- 🗜️ CSS minificado en producción
- 🚀 Preconnect para fonts
- 📱 Responsive images
- 🔄 Service Worker ready

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Agregar nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Yesid Casallas**
- GitHub: [@SuitsG](https://github.com/SuitsG)
- LinkedIn: [Yesid Casallas](https://www.linkedin.com/in/yesidcasallas/)
- Instagram: [@dcsuitsc](https://www.instagram.com/dcsuitsc/)
- YouTube: [@Suitcs](https://www.youtube.com/@Suitcs)

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐