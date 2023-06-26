var testimonialSlide = document.querySelector('.testimonialSlide')
const review = document.querySelectorAll('.review')

var arrowLeft = document.querySelector('.arrowLeft');
var arrowRight = document.querySelector('.arrowRight');

// arrowRight.onclick = function(){
//     if (arrowRight.classList.contains('active')){
//         arrowRight.classList.remove('active');
//         arrowLeft.classList.add('active');
//     }
   
// }

 review.forEach((rev) =>{
        reviewWidth = rev.clientWidth
        console.log(reviewWidth, "review width")
    });

// arrowLeft.onclick = function(){
//     if (arrowLeft.classList.contains('active')){
//         arrowLeft.classList.remove('active');
//         arrowRight.classList.add('active')
//     }
//    review.forEach((rev) =>{
//         rev.style.transform = "translateX(0)";
//     });
    
// }
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

// For our testimonial slider 
let x = 0;
reviewSlideWidth = reviewWidth + 40;
arrowRight.onclick = function(){
    
    if ( x >= -(reviewSlideWidth*3)){
        x = x - reviewSlideWidth;
        testimonialSlide.style.left = x + "px"
        console.log(x)
        if (x == -(reviewSlideWidth*3)){
            console.log(x, "when stopped")
            console.log("it is review * 3")
            arrowRight.classList.remove('active')
        }
        
    }
    if  (x <= 0 ){
        arrowLeft.classList.add("active");

    }
        
}

arrowLeft.onclick = function () {
    
    if (x <= -(reviewSlideWidth) ){
        arrowRight.classList.add("active");
    }
    if (x <=-reviewWidth){
            x = x + reviewSlideWidth;
        testimonialSlide.style.left = x + "px";
        if (x == 0){
            arrowLeft.classList.remove("active")
        } 
    }
    
}


console.log(testimonialSlide.clientWidth, "Testimonial length")