document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO MODO CLARO/ESCURO ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Verifica o tema salvo no localStorage ou a preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

    // Aplica o tema inicial
    applyTheme(currentTheme);

    // Evento de clique no botão de alternância
    themeToggle.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // --- LÓGICA DO MENU MÓVEL ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});
