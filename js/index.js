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
// animations
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
// window scrool eventlistener
window.addEventListener('scroll',function(){
  headerAnimations();
  goTop();
});

// ajax req
const photoBtn = document.getElementById('photoBtn');
const allimgs = document.querySelectorAll('.img_box img');
function loadImgs(url) {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open('GET',url);
    xhrReq.onload = (function () {
      if (this.status == 200) {
       const dataBase = JSON.parse(this.responseText);
      //  let num = Math.floor(Math.random() * 10 +1);
      allimgs.forEach(function(img){
        img.setAttribute('src',dataBase.imgUrls[0].img__url0);
        img.setAttribute('class','img__fluid fadeD');
      });
      }else{
        this.onerror();
      }
    });
    xhrReq.onerror = (function(){
      console.log('error 404');
    });
    xhrReq.send();
}
photoBtn.addEventListener('click',function () {
  loadImgs('./database/img.json');
})