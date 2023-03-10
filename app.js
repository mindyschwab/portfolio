// **** navbar scroll***
// resource used for navbar scroll: https://www.youtube.com/watch?v=t1rEsuB3t2Y
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', navColor);

function navColor() {
    if (document.documentElement.scrollTop > 52) {
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')
    }
}

// ***** Project Image Carousel****
let currentImgIndex = 0;
let previousImgIndex = 0;

const descriptions = document.getElementsByClassName('project-descr');
const images = document.getElementsByClassName('project-image');
const back = document.getElementById('back-button')
const forward = document.getElementById('forward-button')

forward.addEventListener('click', () => {
    carousel(1)
})

const prev = document.querySelector('.prev')
back.addEventListener('click', (event) => {
    carousel(-1)
})

function carousel(imgIdexChange) {
    previousImgIndex = currentImgIndex
    // adds or subtracts 1 based on the button that was clicked(1 or -1 passed into the event listener which calls the cycle function)
    currentImgIndex = currentImgIndex + imgIdexChange

    descriptions[previousImgIndex].style.display = 'none';
    images[previousImgIndex].style.display = 'none';
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }
    else if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }
    images[currentImgIndex].style.display = 'block';
    descriptions[currentImgIndex].style.display = 'block';
}
