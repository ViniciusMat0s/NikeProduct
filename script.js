const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let current = 4;

function updateCarousel() {
  images.forEach((img, i) => {
    img.classList.remove('main', 'visible');
  });

  const total = images.length;
  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  images[prevIndex].classList.add('visible');
  images[current].classList.add('visible', 'main');
  images[nextIndex].classList.add('visible');

  // Move o carrossel para que a imagem "current" fique no centro da tela
  let totalOffset = 0;
  for (let i = 0; i < current; i++) {
    totalOffset += (i === current - 1) ? imageWidth : imageWidth;
  }

  carousel.style.transform = `translateX(${-totalOffset + offset}px)`;
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  updateCarousel();
}

function nextSlide() {
  current = (current + 1) % images.length;
  updateCarousel();
}

updateCarousel();

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const links = document.querySelector('.links');

  menuToggle.addEventListener('click', () => {
    links.classList.toggle('show');
  });
});
