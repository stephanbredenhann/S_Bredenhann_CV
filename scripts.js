let images = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];
let currentIndex = 0;
let carouselInterval;

function showImage() {
    const carouselImage = document.getElementById("carousel-image");
    carouselImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
    resetTimer(); 
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
    resetTimer(); 
}

function startCarousel() {
    carouselInterval = setInterval(nextImage, 20000); 
}

function resetTimer() {
    clearInterval(carouselInterval);
    startCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
    showImage();
    startCarousel();
});
