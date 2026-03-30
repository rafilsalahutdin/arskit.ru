// ============================================
// State & Translations
// ============================================
const state = {
    lang: 'ru',
    theme: 'light',
    searching: false
};

const translations = {
    ru: {
        nav_home: 'Главная',
        nav_services: 'Услуги',
        nav_about: 'О нас',
        nav_projects: 'Проекты',
        nav_contact: 'Контакты',
        hero_badge: 'Доступны для проектов',
        hero_title_1: 'Цифровые решения',
        hero_title_2: 'для вашего бизнеса',
        hero_subtitle: 'Разрабатываем инновационные IT-решения: веб-приложения, мобильные приложения, облачные сервисы и автоматизацию бизнес-процессов',
        hero_cta_primary: 'Начать проект',
        hero_cta_secondary: 'Наши работы',
        stat_projects: 'Проектов',
        stat_satisfaction: 'Довольных клиентов',
        stat_years: 'Лет опыта',
        services_title: 'Наши услуги',
        services_subtitle: 'Комплексные IT-решения для развития вашего бизнеса',
        service_1_title: 'Веб-разработка',
        service_1_desc: 'Современные веб-приложения на React, Vue, Node.js с адаптивным дизайном',
        service_2_title: 'Мобильная разработка',
        service_2_desc: 'Нативные и кроссплатформенные приложения для iOS и Android',
        service_3_title: 'Облачные решения',
        service_3_desc: 'Миграция и развертывание в AWS, Azure, Google Cloud',
        service_4_title: 'AI & Автоматизация',
        service_4_desc: 'Интеграция искусственного интеллекта и автоматизация процессов',
        service_more: 'Подробнее',
        about_title: 'Почему выбирают нас',
        about_text: 'Мы команда профессионалов с многолетним опытом создания цифровых продуктов. Используем передовые технологии и лучшие практики разработки.',
        feature_1: 'Agile методология',
        feature_2: 'Прозрачная коммуникация',
        feature_3: 'Гарантия качества',
        feature_4: 'Поддержка 24/7',
        about_cta: 'Узнать больше',
        contact_title: 'Давайте работать вместе',
        contact_text: 'Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом',
        form_name: 'Ваше имя',
        form_email: 'Email',
        form_message: 'Сообщение',
        form_submit: 'Отправить сообщение',
        footer_desc: 'Создаем цифровое будущее сегодня',
        footer_nav: 'Навигация',
        footer_services: 'Услуги',
        footer_social: 'Мы в соцсетях',
        footer_rights: 'Все права защищены'
    },
    uz: {
        nav_home: 'Bosh sahifa',
        nav_services: 'Xizmatlar',
        nav_about: 'Biz haqimizda',
        nav_projects: 'Loyihalar',
        nav_contact: 'Aloqa',
        hero_badge: 'Loyihalar uchun mavjud',
        hero_title_1: 'Raqamli yechimlar',
        hero_title_2: 'biznesingiz uchun',
        hero_subtitle: 'Innovatsion IT-yechimlarni ishlab chiqamiz: veb-ilovalar, mobil ilovalar, bulutli xizmatlar va biznes jarayonlarini avtomatlashtirish',
        hero_cta_primary: 'Loyihani boshlash',
        hero_cta_secondary: 'Bizning ishlar',
        stat_projects: 'Loyihalar',
        stat_satisfaction: 'Mamnun mijozlar',
        stat_years: 'Yillik tajriba',
        services_title: 'Bizning xizmatlar',
        services_subtitle: 'Biznesingizni rivojlantirish uchun kompleks IT-yechimlar',
        service_1_title: 'Veb-dasturlash',
        service_1_desc: 'React, Vue, Node.js da zamonaviy veb-ilovalar, adaptiv dizayn bilan',
        service_2_title: 'Mobil dasturlash',
        service_2_desc: 'iOS va Android uchun native va cross-platform ilovalar',
        service_3_title: 'Bulutli yechimlar',
        service_3_desc: 'AWS, Azure, Google Cloud da migratsiya va joylashtirish',
        service_4_title: 'AI & Avtomatlashtirish',
        service_4_desc: 'Sun\'iy intellekt integratsiyasi va jarayonlarni avtomatlashtirish',
        service_more: 'Batafsil',
        about_title: 'Nima uchun bizni tanlaydilar',
        about_text: 'Biz raqamli mahsulotlar yaratishda ko\'p yillik tajribaga ega bo\'lgan mutaxassislar jamoasimiz. Zamonaviy texnologiyalar va eng yaxshi amaliyotlardan foydalanamiz.',
        feature_1: 'Agile metodologiya',
        feature_2: 'Shaffof kommunikatsiya',
        feature_3: 'Sifat kafolati',
        feature_4: '24/7 qo\'llab-quvvatlash',
        about_cta: 'Ko\'proq bilish',
        contact_title: 'Keling, birga ishlaylik',
        contact_text: 'Loyihangizni muhokama qilishga tayyormiz? Qulay usulda biz bilan bog\'laning',
        form_name: 'Ismingiz',
        form_email: 'Email',
        form_message: 'Xabar',
        form_submit: 'Xabar yuborish',
        footer_desc: 'Bugun raqamli kelajakni yaratamiz',
        footer_nav: 'Navigatsiya',
        footer_services: 'Xizmatlar',
        footer_social: 'Ijtimoiy tarmoqlarda',
        footer_rights: 'Barcha huquqlar himoyalangan'
    }
};

// ============================================
// DOM Elements
// ============================================
const elements = {
    header: document.getElementById('header'),
    nav: document.getElementById('nav'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    searchBox: document.getElementById('searchBox'),
    searchBtn: document.getElementById('searchBtn'),
    searchInput: document.getElementById('searchInput'),
    langSwitch: document.getElementById('langSwitch'),
    langCurrent: document.querySelector('.lang__current'),
    themeToggle: document.getElementById('themeToggle'),
    contactForm: document.getElementById('contactForm'),
    serviceCards: document.querySelectorAll('.service-card')
};

// ============================================
// Functions
// ============================================

// Change Language
function changeLanguage() {
    state.lang = state.lang === 'ru' ? 'uz' : 'ru';
    updateLanguage();
}

function updateLanguage() {
    // Update language button
    elements.langCurrent.textContent = state.lang.toUpperCase();

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[state.lang][key]) {
            element.textContent = translations[state.lang][key];
        }
    });

    // Update placeholders
    const searchInput = document.querySelector('.search__input');
    if (searchInput) {
        searchInput.placeholder = state.lang === 'ru' ? 'Поиск...' : 'Qidiruv...';
    }

    // Save to localStorage
    localStorage.setItem('lang', state.lang);
}

// Toggle Theme
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    elements.nav.classList.toggle('active');
    elements.mobileMenuBtn.classList.toggle('active');
}

// Toggle Search
function toggleSearch() {
    elements.searchBox.classList.toggle('active');
    state.searching = !state.searching;

    if (state.searching) {
        elements.searchInput.focus();
    }
}

// Handle Scroll
function handleScroll() {
    // Header scroll effect
    if (window.scrollY > 50) {
        elements.header.classList.add('header--scrolled');
    } else {
        elements.header.classList.remove('header--scrolled');
    }

    // Fade in animations
    document.querySelectorAll('.fade-in').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Smooth Scroll
function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle Form Submit
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = state.lang === 'ru' ? 'Отправка...' : 'Yuborilmoqda...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.textContent = state.lang === 'ru' ? 'Отправлено!' : 'Yuborildi!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            e.target.reset();
        }, 2000);
    }, 1500);
}

// Add hover effect to service cards
function initServiceCards() {
    elements.serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
        card.classList.add('fade-in');
    });
}

// ============================================
// Event Listeners
// ============================================

// Language Switch
elements.langSwitch.addEventListener('click', changeLanguage);

// Theme Toggle
elements.themeToggle.addEventListener('click', toggleTheme);

// Mobile Menu
elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Search
elements.searchBtn.addEventListener('click', toggleSearch);

elements.searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = elements.searchInput.value;
        if (query) {
            console.log('Search:', query);
            // Implement search functionality
        }
    }
});

// Close search on outside click
document.addEventListener('click', (e) => {
    if (!elements.searchBox.contains(e.target) && state.searching) {
        elements.searchBox.classList.remove('active');
        state.searching = false;
    }
});

// Navigation Links
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        smoothScroll(href);

        // Close mobile menu
        elements.nav.classList.remove('active');
        elements.mobileMenuBtn.classList.remove('active');
    });
});

// Contact Form
if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleFormSubmit);
}

// Scroll Events
window.addEventListener('scroll', handleScroll);

// Hero Buttons
document.querySelectorAll('.hero__actions .btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.getAttribute('data-i18n') === 'hero_cta_secondary') {
            smoothScroll('#services');
        } else {
            smoothScroll('#contact');
        }
    });
});

// ============================================
// Initialization
// ============================================
function init() {
    // Load saved preferences
    const savedLang = localStorage.getItem('lang');
    const savedTheme = localStorage.getItem('theme');

    if (savedLang) {
        state.lang = savedLang;
    }

    if (savedTheme) {
        state.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', state.theme);
    }

    // Initialize
    updateLanguage();
    initServiceCards();

    // Initial scroll check
    handleScroll();

    // Add fade-in class to sections
    document.querySelectorAll('.services, .about, .contact').forEach(section => {
        section.classList.add('fade-in');
    });
}

// Run initialization
document.addEventListener('DOMContentLoaded', init);

// Console Easter Egg
console.log('%c TechPro IT Solutions ', 'background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Ready to transform your business! 🚀', 'color: #6366f1; font-size: 14px;');