document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO CARROSSEL ---
    const carousel = document.querySelector('.carousel');
    // Verificação para garantir que o carrossel exista antes de executar o código
    if (carousel) {
        const images = carousel.querySelectorAll('img');
        let current = 4; // Imagem inicial

        function updateCarousel() {
            if (images.length === 0) return; // Não faz nada se não houver imagens

            images.forEach((img) => {
                img.classList.remove('main', 'visible');
            });

            const total = images.length;
            // Garante que os índices sejam sempre válidos
            const prevIndex = (current - 1 + total) % total;
            const nextIndex = (current + 1) % total;

            if (images[prevIndex]) images[prevIndex].classList.add('visible');
            if (images[current]) images[current].classList.add('visible', 'main');
            if (images[nextIndex]) images[nextIndex].classList.add('visible');
        }

        function prevSlide() {
            current = (current - 1 + images.length) % images.length;
            updateCarousel();
        }

        function nextSlide() {
            current = (current + 1) % images.length;
            updateCarousel();
        }
        
        // Adiciona os eventos aos botões do carrossel
        const leftButton = document.querySelector('.nav.left');
        const rightButton = document.querySelector('.nav.right');

        if(leftButton) leftButton.addEventListener('click', prevSlide);
        if(rightButton) rightButton.addEventListener('click', nextSlide);

        // Inicia o carrossel
        updateCarousel();
    }


    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuToggle = document.getElementById('menu-toggle');
    const links = document.querySelector('.links');

    // Verifica se os elementos do menu existem
    if (menuToggle && links) {
        menuToggle.addEventListener('click', () => {
            links.classList.toggle('show');
        });
    }

});