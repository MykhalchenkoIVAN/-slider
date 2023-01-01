'use sctrict'

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider_btn_left');
const btnRight = document.querySelector('.slider_btn_right');

let currentSlide = 0;
const slidesNumber = slides.length;


const moveToSlide = function (slide) {
    slides.forEach(
        (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
    );
};

moveToSlide(0);

const nextSlide = function () {
    if (currentSlide === slidesNumber - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    moveToSlide(currentSlide);
};

const previousSlide = function () {
    if (currentSlide === 0) {
        currentSlide = slidesNumber - 1;
    } else {
        currentSlide--;
    }

    moveToSlide(currentSlide);
};

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
});
