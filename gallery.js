export const images = [...document.querySelectorAll('.modal-images')];

export const popup = document.querySelector('.popup');
export const closeBtn = document.querySelector('.close-btn');
export const imageName = document.querySelector('.image-name');
export const largeImage = document.querySelector('.large-image');
export const imageIndex = document.querySelector('.index');
export const leftArrow = document.querySelector('.left-arrow');
export const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

 images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
});

const updateImage = (i) => {
    let path = `img/img${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
};

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
});

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
});