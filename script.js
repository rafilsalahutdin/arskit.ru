// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-card, .pixel-input, .pixel-textarea');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});

// ===== SMOOTH SCROLL =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ===== TILT EFFECT FOR CARDS =====
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(-4px, -4px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translate(0)';
    });
});

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('[data-count]');
let counted = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===== SCROLL OBSERVER =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate counters when about section is visible
            if (entry.target.closest('#about') && !counted) {
                animateCounters();
                counted = true;
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.fade-in, .service-card, .stat-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#5cb85c' : '#e94560'};
        color: white;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.7rem;
        border: 4px solid white;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.5);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== TYPEWRITER EFFECT FOR CODE =====
const codeLines = document.querySelectorAll('.code-line');
const originalTexts = [];

codeLines.forEach(line => {
    originalTexts.push(line.innerHTML);
    line.textContent = '';
});

function typeWriterEffect() {
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            line.innerHTML = originalTexts[index];
            line.style.opacity = '0';
            line.style.animation = 'fadeIn 0.5s forwards';
        }, index * 500);
    });
}

// Add fadeIn animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        to { opacity: 1; }
    }
`;
document.head.appendChild(fadeInStyle);

// Start typewriter when monitor is visible
const monitorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriterEffect();
            monitorObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const monitor = document.querySelector('.monitor-screen');
if (monitor) {
    monitorObserver.observe(monitor);
}

// ===== PARALLAX EFFECT FOR OFFICE =====
const officeRoom = document.querySelector('.office-room');

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 968 && officeRoom) {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;

        officeRoom.style.transform = `rotateX(60deg) rotateZ(-45deg) rotateY(${x}deg) translateY(${y}px)`;
    }
});

// ===== GLITCH EFFECT RANDOM TRIGGER =====
const glitchElement = document.querySelector('.glitch');

setInterval(() => {
    if (glitchElement && Math.random() > 0.95) {
        glitchElement.style.animation = 'none';
        setTimeout(() => {
            glitchElement.style.animation = '';
        }, 100);
    }
}, 2000);

// ===== EASTER EGG - KONAMI CODE =====
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s ease infinite';
    showNotification('🎮 EASTER EGG ACTIVATED! 🎮', 'success');

    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// ===== SCREEN FLICKER EFFECT =====
const screens = document.querySelectorAll('.screen');

screens.forEach(screen => {
    setInterval(() => {
        if (Math.random() > 0.95) {
            screen.style.opacity = '0.8';
            setTimeout(() => {
                screen.style.opacity = '1';
            }, 100);
        }
    }, 2000);
});

//console.log('%c PixelIT - IT Solutions ', 'background: #e94560; color: white; font-size: 20px; font-family: "Press Start 2P"');
//console.log('%c Built with ❤️ in pixel art style ', 'color: #e94560; font-size: 12px');
