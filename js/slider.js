let slideIndex = 0;

function showSlides() {
    const slidesContainer = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slides img').length;
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlides();
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.slides img').length;
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlides();
}

// Automatic slide change
setInterval(() => {
    nextSlide();
}, 10000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', showSlides);
