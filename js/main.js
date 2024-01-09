let currentIndex = 0;
let slides = document.getElementsByClassName('slide');

document.getElementById('arrow-left').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});

document.getElementById('arrow-right').addEventListener('click', function () {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[n].style.display = 'block';
}

showSlide(currentIndex);