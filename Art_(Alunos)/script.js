// ================= CARROSSEL DE PROJETOS =================
// Seleciona os elementos do carrossel
const carouselSlides = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentSlide = 0;
let autoSlideInterval;

// Função para exibir o slide atual
function showSlide(slideIndex) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });

    // Ajusta o índice do slide para garantir que ele esteja dentro dos limites
    if (slideIndex < 0) currentSlide = slides.length - 1;
    else if (slideIndex >= slides.length) currentSlide = 0;
    else currentSlide = slideIndex;

    // Exibe o slide atual
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.display = 'flex';
    updateSlidePosition();
}

// Função para atualizar a posição do carrossel
function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth;
    carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Função para avançar para o próximo slide
function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoSlide(); // Reinicia o intervalo de transição automática
}

// Função para voltar ao slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoSlide(); // Reinicia o intervalo de transição automática
}

// Função para iniciar a transição automática dos slides
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Avança o slide a cada 5 segundos
}

// Função para reiniciar a transição automática
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Adiciona eventos de clique aos botões de navegação do carrossel
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Inicializa o carrossel ao carregar a página
window.addEventListener('load', () => {
    showSlide(currentSlide);
    startAutoSlide();
});

// Atualiza a posição do carrossel ao redimensionar a janela
window.addEventListener('resize', () => {
    updateSlidePosition();
});

// Pausa a transição automática ao passar o mouse sobre o carrossel
carouselSlides.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Retoma a transição automática ao remover o mouse do carrossel
carouselSlides.parentElement.addEventListener('mouseleave', startAutoSlide);


