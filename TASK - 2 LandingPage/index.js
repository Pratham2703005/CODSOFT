const slides = document.querySelectorAll(".slide");
const leftButton = document.querySelector(".ltn");
const rightButton = document.querySelector(".rtn");

var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const updateButtons = () => {
    if (counter === 0) {
        leftButton.classList.add("disabled");
    } else {
        leftButton.classList.remove("disabled");
    }
    if (counter === slides.length - 1) {
        rightButton.classList.add("disabled");
    } else {
        rightButton.classList.remove("disabled");
    }
};

const slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${(counter * 100) % (slides.length * 100)}%)`;
    });
    updateButtons();
};
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.setAttribute('target', '_blank');
    });
});

const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImg();
    }
};

const gonext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImg();
    }
};

rightButton.addEventListener("click", gonext);
leftButton.addEventListener("click", goPrev);

// Initial call to update button states
updateButtons();

