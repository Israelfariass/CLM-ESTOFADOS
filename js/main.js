// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleMenu);

// Slider simples para Antes & Depois
let current = 0;
const slider = document.querySelector('.slider-images');
if (slider) { // Adiciona uma verificação para evitar erros se o elemento não existir
    const totalSlides = slider.children.length;
    setInterval(() => {
        current = (current + 1) % totalSlides;
        slider.style.transform = `translateX(-${current * 100 / totalSlides}%)`; // Ajuste para funcionar com o width
    }, 4000);
}


// Fade-in no scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Opcional: para a animação acontecer só uma vez
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});