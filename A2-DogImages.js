const imageUrls = [];
const url = "https://dog.ceo/api/breeds/image/random";
let currentImage = 0;
const carouselImage = document.getElementById("image");
const counter = document.getElementById("counter");

// Fetching dog images
async function fetchDogImages() {
  for (let i = 0; i < 10; i++) {
    const res = await fetch(url);
    const data = await res.json();
    imageUrls.push(data.message);
  }

carouselImage.src = imageUrls[0];
updateCounter();
}

// Next image 
function nextImage() {
  currentImage = (currentImage + 1) % imageUrls.length;
  carouselImage.src = imageUrls[currentImage];
}

// Previous image 
function prevImage() {
    currentImage = (currentImage - 1 + imageUrls.length) % imageUrls.length;
    carouselImage.src = imageUrls[currentImage];
    updateCounter();
}

// Place Counter
function updateCounter() {
    counter.textContent = `Image ${currentImage + 1} of ${imageUrls.length}`;
  }

fetchDogImages();