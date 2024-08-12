let left = document.querySelector('.left');
let right = document.querySelector('.right');
let slide = document.querySelector('.slider');
let sliderNumber = 1;
let images = document.querySelectorAll('.images');

right.addEventListener('click', () =>{
    if( sliderNumber < images.length){
        slide.style.transform = `translateX(-${sliderNumber *600}px) `;
        sliderNumber++;
    }else{
        slide.style.transform = `translateX(0px) `;
        sliderNumber = 1;
    }
    
});
left.addEventListener('click', () =>{
    slide.style.transform = `translateX(-${sliderNumber *600}px) `;
    sliderNumber--;
});