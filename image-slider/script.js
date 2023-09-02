const previousButton = document.getElementById("previous-image");
const nextButton = document.getElementById("next-image");
const sliderImages = document.querySelector("#image-slider").children;
const sliderButtons = document.querySelector("#image-navigation").children;

let currentImageDivIndex;
let nextImageDivIndex;
let previousImageDivIndex;

previousButton.addEventListener("click", () => {
    loadImageCarousel(previousImageDivIndex);
})

nextButton.addEventListener("click", () => {
    loadNextImage();
})

for (let i=0 ; i< sliderButtons.length; i++) {
    sliderButtons[i].addEventListener("click", () => {
        loadImageCarousel(i);
    })
}

const loadImageCarousel = (_currentImageDivIndex = 0) => {      
    currentImageDivIndex = _currentImageDivIndex;        
    loadImage(currentImageDivIndex);    
    updateImageIndexes();
}

const loadNextImage = () => {
    loadImageCarousel(nextImageDivIndex);
}

const loadImage = (nextImageDivIndex) => {    
    for(let i = 0; i < sliderImages.length; i ++){
        if(i == nextImageDivIndex){
            sliderImages[i].classList.remove("hidden");
            sliderButtons[i].classList.add("dot-filled");
        } else{
            sliderImages[i].classList.add("hidden");
            sliderButtons[i].classList.remove("dot-filled");
        }
    }
}

const updateImageIndexes = () => {
    nextImageDivIndex = findNextImageDivIndex(currentImageDivIndex, sliderImages.length);
    previousImageDivIndex = findPreviousImageDivIndex(currentImageDivIndex, sliderImages.length);
}

const findNextImageDivIndex = (currentImageDivIndex, sliderImagesTotalNumber) => {
    let nextImageDivIndex;
    if(sliderImagesTotalNumber == 1){
        nextImageDivIndex == 0;
    } else if (sliderImagesTotalNumber > 1) {
        if(currentImageDivIndex >= (sliderImagesTotalNumber - 1)){
            nextImageDivIndex = 0;
        }
        else {
            nextImageDivIndex = currentImageDivIndex + 1;
        }
    }
    return nextImageDivIndex;
}

const findPreviousImageDivIndex = (currentImageDivIndex, sliderImagesTotalNumber) => {
    let previousImageDivIndex;
    if(sliderImagesTotalNumber == 1){
        previousImageDivIndex == 0;
    } else if (sliderImagesTotalNumber > 1) {
        if(currentImageDivIndex > 0 && currentImageDivIndex < sliderImagesTotalNumber){
            previousImageDivIndex = currentImageDivIndex - 1;
        }
        else {
            previousImageDivIndex = sliderImagesTotalNumber - 1;
        }
    }
    return previousImageDivIndex;
}

loadImageCarousel();
setInterval(loadNextImage, 2000);