const slides = document.querySelectorAll('.slide');


for (let slide of slides) {
    slide.addEventListener('click', () => {
        hideInactiveElement();
        slide.classList.add('active');
    });
}

function hideInactiveElement() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}