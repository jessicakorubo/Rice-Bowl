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
        rev.style.transform = "translateX(-400px)";
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
    mobile_menu.classList.toggle('active');
});
