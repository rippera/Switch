$(document).ready(function(){
    $('.slider').slick({
      // fade: true,
      autoplay:true,
      nav:true,
      draggable:false,
    });
});

document.addEventListener('load',setTimeout);
setTimeout(socIconAnimation,2000);
function socIconAnimation() {
    let socialWrapper = document.getElementById('social__wrapper');
    socialWrapper.style.left = '-5px';
    socialWrapper.classList.add('socAnimation');
};

function headerAnimations() {
  let header = document.querySelector('.header__fixed');
  let topPos = window.pageYOffset;
  if (topPos > 100) {
    header.style.background = 'rgba(0,0,0,0.9)';
    header.style.padding    = '15px 0';
  }else{
    header.style.background = 'transparent';
    header.style.padding    = '30px 0';
  }
}

function goTop() {
  let goTop = document.getElementById('gotop');
  let topPos = window.pageYOffset;
  if (topPos > 250){
    goTop.style.opacity = '1';
  }else{
    goTop.style.opacity = '0';
  }
}
window.addEventListener('scroll',function(){
  headerAnimations();
  goTop();
});

