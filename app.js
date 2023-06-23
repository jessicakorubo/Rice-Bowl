const testimonialSlide = document.querySelector('.testimonialSlide')
const review = document.querySelectorAll('.review')

const arrowLeft = document.querySelector('.arrowLeft svg');
const arrowRight = document.querySelector('.arrowRight svg');

arrowRight.onclick = function(){
    if (arrowLeft.classList.contains('active')){
        arrowLeft.classList.remove('active');
        arrowRight.classList.add('active');
    }
    review.forEach((rev) =>{
        rev.style.transform = "translateX(-450px)";
    });
}


arrowLeft.onclick = function(){
    if (arrowRight.classList.contains('active')){
        arrowRight.classList.remove('active');
        arrowLeft.classList.add('active')
    }
   review.forEach((rev) =>{
        rev.style.transform = "translateX(0)";
    });
    
}
const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener('click',()=> {
    console.log('activeee')
    hamburger.classList.toggle('active');
   mobile_display.classList.toggle('active')
});

const menuBar = document.querySelector('.navbarNone')

document.addEventListener('scroll', ()=> {
    if (window.scrollY > 100){
        menuBar.style.backgroundColor = "rgb(41, 119, 215)";
    }
    else {
        menuBar.style.backgroundColor = "rgb(183, 183, 245)";
    }
})


// Making the menu active

const mobile_display = document.querySelector('.nav-mobile-wrap');

