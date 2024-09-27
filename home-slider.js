const image = document.getElementById("changeImage");
const slider = document.getElementById("partners-slider");
const slider2 = document.getElementById("reviews-slider");

function i1() {
    image.src = 'images/slider-i0.png';
}

function i2() {
    image.src = 'images/slider-i1.jpg';
}

function i3() {
    image.src = 'images/slider-i2.jpg';
}

function review_left() {
    slider2.scrollBy({
        left: -250,
        behavior: "smooth",
    });
}

function review_right() {
    slider2.scrollBy({
        left: 250,
        behavior: "smooth",
    });
}

function slideleft() {
    slider.scrollBy({
        left: -250,
        behavior: "smooth",
    });
}

function slideright(){
    slider.scrollBy({
        left: 250,
        behavior: "smooth",
    });
}