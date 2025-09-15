// Configuración de partículas
document.addEventListener('DOMContentLoaded', function () {
    // Esperar a que todo esté cargado
    setTimeout(() => {
        initializePortfolio();
    }, 100);
});

function initializePortfolio() {
    // Inicializar partículas
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00ffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00ffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Cursor personalizado - Solo para dispositivos de escritorio
    const cursor = document.querySelector('.cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    // Verificar si es un dispositivo táctil
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && cursor && cursorTrail) {
        // Solo activar el cursor personalizado en dispositivos de escritorio
        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (cursor) {
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
                cursor.style.opacity = '1';
            }
        });

        function animateTrail() {
            if (cursorTrail) {
                trailX += (mouseX - trailX) * 0.1;
                trailY += (mouseY - trailY) * 0.1;

                cursorTrail.style.left = trailX + 'px';
                cursorTrail.style.top = trailY + 'px';
                cursorTrail.style.opacity = '1';
            }

            requestAnimationFrame(animateTrail);
        }
        animateTrail();

        // Efecto de hover en elementos clicables
        const clickables = document.querySelectorAll('a, button, .clickable');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (cursor) {
                    cursor.style.transform = 'scale(1.5)';
                    cursor.style.borderColor = '#ff00ff';
                }
            });

            el.addEventListener('mouseleave', () => {
                if (cursor) {
                    cursor.style.transform = 'scale(1)';
                    cursor.style.borderColor = '#00ffff';
                }
            });
        });

        // Ocultar cursor al salir de la ventana
        document.addEventListener('mouseleave', function () {
            if (cursor) cursor.style.opacity = '0';
            if (cursorTrail) cursorTrail.style.opacity = '0';
        });

        document.addEventListener('mouseenter', function () {
            if (cursor) cursor.style.opacity = '1';
            if (cursorTrail) cursorTrail.style.opacity = '1';
        });

    } else {
        // En dispositivos táctiles o si no existen los elementos, ocultar cursores
        if (cursor) cursor.style.display = 'none';
        if (cursorTrail) cursorTrail.style.display = 'none';
        document.body.style.cursor = 'default';
    }

    // Navegación suave y activa
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Actualizar navegación activa al hacer scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Efecto de typing en el hero
    const typingText = document.querySelector('.typing-text');
    const texts = [
        'Backend Developer',
        'Full Stack Engineer',
        'Database Specialist',
        'Problem Solver',
        'Code Enthusiast'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    typeWriter();

    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Animación especial para las barras de habilidades
                if (entry.target.classList.contains('skill-card')) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const width = progressBar.getAttribute('data-width');
                        setTimeout(() => {
                            progressBar.style.width = width + '%';
                        }, 300);
                    }
                }

                // Animación para contadores
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Elementos para observar
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .about-card, .contact-card, .stat-number');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });

    // Función para animar contadores
    function animateCounter(element) {
        const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
        const increment = target / 50;
        let current = 0;
        const symbol = element.textContent.replace(/[0-9]/g, '');

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + symbol;
        }, 40);
    }

    // Filtros de proyectos
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remover clase activa de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase activa al botón clickeado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // Formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    // Efecto de focus en inputs
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });

        // Verificar si ya tiene valor al cargar
        if (input.value !== '') {
            input.parentElement.classList.add('focused');
        }
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Animación de envío
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<span>Enviando...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Simular envío (aquí integrarías con tu backend)
            setTimeout(() => {
                submitBtn.innerHTML = '<span>¡Enviado!</span><i class="fas fa-check"></i>';
                submitBtn.style.background = 'linear-gradient(45deg, #00ff88, #00ffff)';

                // Resetear formulario
                setTimeout(() => {
                    this.reset();
                    formInputs.forEach(input => {
                        input.parentElement.classList.remove('focused');
                    });
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 2000);
            }, 2000);
        });
    }

    // Efecto parallax en el scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hologram');

        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translate3d(0, ${rate}px, 0)`;
        });

        // Efecto en la navegación
        const nav = document.querySelector('.nav');
        if (scrolled > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.backdropFilter = 'blur(30px)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
        }
    });

    // Efecto de glitch aleatorio
    function randomGlitch() {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(element => {
            if (Math.random() > 0.95) {
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = 'glitch 2s infinite';
                }, 100);
            }
        });
    }

    setInterval(randomGlitch, 3000);

    // Efecto de ondas en botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Efecto de sonido hover (opcional)
    const hoverElements = document.querySelectorAll('.btn, .social-link, .project-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            // Agregar clase de hover personalizada
            this.classList.add('hover-effect');
        });

        element.addEventListener('mouseleave', function () {
            this.classList.remove('hover-effect');
        });
    });

    // Loading screen (opcional)
    const loadingScreen = document.createElement('div');
    loadingScreen.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, #0c0c0c 0%, #1a0a2e 25%, #16213e 50%, #0f3460 75%, #533a7d 100%); z-index: 10000; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <div style="width: 60px; height: 60px; border: 3px solid #00ffff; border-top: 3px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="color: #00ffff; margin-top: 1rem; font-family: Orbitron, monospace;">Cargando Portfolio...</p>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

    document.body.appendChild(loadingScreen);

    // Remover loading screen después de un tiempo
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);

    // Easter egg - Konami Code
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    document.addEventListener('keydown', function (e) {
        konamiCode.push(e.keyCode);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join(',') === konami.join(',')) {
            // Easter egg activado
            document.body.style.filter = 'hue-rotate(180deg)';

            // Crear mensaje
            const easterEgg = document.createElement('div');
            easterEgg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 255, 255, 0.9);
                color: #000;
                padding: 2rem;
                border-radius: 10px;
                font-family: Orbitron, monospace;
                font-weight: bold;
                z-index: 10001;
                animation: pulse 2s infinite;
            `;
            easterEgg.innerHTML = '🎮 ¡Easter Egg Activado! 🎮<br>¡Eres un verdadero gamer!';

            document.body.appendChild(easterEgg);

            setTimeout(() => {
                document.body.style.filter = '';
                easterEgg.remove();
            }, 3000);
        }
    });

    // Optimización de performance
    let ticking = false;

    function updateScrollEffects() {
        // Aquí irían los efectos que dependen del scroll
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });

    // Prevenir el refresh accidental
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });

    console.log('🚀 Portfolio futurista cargado correctamente!');
    console.log('💫 Desarrollado por Yesid Casallas');
    console.log('🔗 GitHub: https://github.com/SuitsG');
}