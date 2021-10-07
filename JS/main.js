const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-images');
const botonAnterior = document.querySelector('.btn-anterior');
const botonSiguiente = document.querySelector('.btn-siguiente');

let index = 0;

let interval = setInterval(carouselMove, 2000);

function carouselMove() {
    index++;
    carouselTranslate();
}

function carouselTranslate() {

    if (index > carouselItems.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = carouselItems.length - 1;
    }

    carousel.style.transform = `translateX(-${index * 700}px)`;
}

botonAnterior.addEventListener('click', () => {
    clearInterval(interval);
    index--;
    carouselTranslate();
})

botonSiguiente.addEventListener('click', () => {
    clearInterval(interval);
    carouselMove();
})

