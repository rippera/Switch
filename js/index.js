// btns
const allImgBtn = document.getElementById('allBtn');
const photograpyBtn = document.getElementById('photograpybtn');
const designBtn = document.getElementById('designBtn');
const artBtn = document.getElementById('artBtn');
//
const allimgs = document.querySelectorAll('.img_box img');

$(document).ready(function(){
    $('.slider').slick({
      // fade: true,
      autoplay:true,
      nav:true,
      draggable:false,
    });
});


// setTimeout(socIconAnimation,2000);
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
// ajax req

function loadImgFromJsons(url) {
    
    const xhrReq = new XMLHttpRequest();
    xhrReq.open('GET',url);
    xhrReq.onload = (function () {
      if (this.status == 200) {
        const dataBase = JSON.parse(this.responseText);
        allimgs.forEach(img =>{
          img.setAttribute('src',dataBase.imgUrls[Math.floor(Math.random()*dataBase.imgUrls.length)]);
          img.setAttribute('class','img__fluid');
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

// event listeners //
// btn clicks
photograpyBtn.addEventListener('click',function () {
  loadImgFromJsons('./database/photograpy.json');
});
designBtn.addEventListener('click',function () {
  loadImgFromJsons('./database/design.json');
});
artBtn.addEventListener('click',function () {
  loadImgFromJsons('./database/art.json');
});
allImgBtn.addEventListener('click',function () {
  loadImgFromJsons('./database/all.json');
});
// window load
window.addEventListener('load',function(){
  setTimeout(socIconAnimation,2000);
  loadImgFromJsons('./database/all.json');
});
// window scrool eventlistener
window.addEventListener('scroll',function(){
  headerAnimations();
  goTop();
});