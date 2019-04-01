$(document).ready(function(){
    $('.slider').slick({
      // fade: true,
      autoplay:true,
      nav:true,
      draggable:false,
    });
});

window.addEventListener('load',setTimeout);
setTimeout(socIconAnimation,2000);
function socIconAnimation() {
    let socialWrapper = document.getElementById('social__wrapper');
    socialWrapper.style.left = '-5px';
    socialWrapper.classList.add('socAnimation');
};