

// btns
const allImgBtn = document.getElementById('allBtn');
const photograpyBtn = document.getElementById('photograpybtn');
const designBtn = document.getElementById('designBtn');
const artBtn = document.getElementById('artBtn');
const arrowLeft = document.querySelector('.arrow__left');
const arrowRight = document.querySelector('.arrow__right');
const navBurger = document.querySelector('.burger');
//
const navigation = document.getElementById('nav__');
const allimgs = document.querySelectorAll('.img_box img');
const headerSectionSlider = document.querySelectorAll('.slider__options ');
const auto = true;
const intervalTime = 5000;
let sliderInterval;

// all functions 
$(document).ready(function () {
  $('.slider').slick({
    // fade: true,
    autoplay: true,
    nav: true,
    draggable: false,
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
    header.style.padding = '15px 0';
  } else {
    header.style.background = 'transparent';
    header.style.padding = '30px 0';
  }
}

function goTop() {
  let goTop = document.getElementById('gotop');
  let topPos = window.pageYOffset;
  if (topPos > 250) {
    goTop.style.opacity = '1';
  } else {
    goTop.style.opacity = '0';
  }
}
// shuffle function
function shuffle(arra1) {
  var ctr = arra1.length,
    temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

// ajax req

function loadImgFromJsons(url) {
  const xhrReq = new XMLHttpRequest();
  xhrReq.open('GET', url);
  xhrReq.onload = (function () {
    if (this.status == 200) {
      const dataBase = JSON.parse(this.responseText);
      let ind = 0;
      const imagesArr = shuffle(dataBase.imgUrls);
      allimgs.forEach(img => {
        img.setAttribute('src', imagesArr[ind]);
        img.setAttribute('class', 'img__fluid');
        ind++;
      });
    } else {
      this.onerror();
    }
  });
  xhrReq.onerror = (function () {
    console.log('error 404');
  });
  xhrReq.send();
}
// slider
function nextSlider() {
  const currentClass = document.querySelector('.slider__active');
  currentClass.classList.remove('slider__active');
  if (currentClass.nextElementSibling) {
    currentClass.nextElementSibling.classList.add('slider__active');
  } else {
    headerSectionSlider[0].classList.add('slider__active');
  }
}

function prevtSlider() {
  const currentClass = document.querySelector('.slider__active');
  currentClass.classList.remove('slider__active');
  
  if (currentClass.previousElementSibling) {
    currentClass.previousElementSibling.classList.add('slider__active');
  } else {
    headerSectionSlider[headerSectionSlider.length - 1].classList.add('slider__active');
  }
  setTimeout(() => currentClass.classList.remove('slider__active'));
}

// auto play of slider
if (auto) {
  sliderInterval = setInterval(nextSlider, intervalTime);
}
// add active class navigation
const navItems = document.querySelectorAll('nav .nav__li');
const nav = document.querySelector('nav');
nav.addEventListener('click', function (e) {
  navItems.forEach(function (navli) {
    if (navli.classList.contains('nav__li__active')) {
      navli.classList.remove('nav__li__active');
      let toBeActive = e.target;
      let parent = toBeActive.parentElement
      parent.classList.add('nav__li__active');
      navBurger.classList.remove('open');
      navigation.classList.remove('nav__active');
    }
  });
});

// event listeners //

// btn clicks
photograpyBtn.addEventListener('click', function () {
  loadImgFromJsons('./database/photograpy.json');
});
designBtn.addEventListener('click', function () {
  loadImgFromJsons('./database/design.json');
});
artBtn.addEventListener('click', function () {
  loadImgFromJsons('./database/art.json');
});
allImgBtn.addEventListener('click', function () {
  loadImgFromJsons('./database/all.json');
});
// window load
window.addEventListener('load', function () {
  setTimeout(socIconAnimation, 2000);
  loadImgFromJsons('./database/all.json');
});
// window scrool eventlistener
window.addEventListener('scroll', function (e) {
  headerAnimations();
  goTop();
});
arrowRight.addEventListener('click', function () {
  nextSlider();
  clearInterval(sliderInterval);
  if (auto) {
    sliderInterval = setInterval(nextSlider, intervalTime);
  }
});
arrowLeft.addEventListener('click', function () {
  prevtSlider();
  clearInterval(sliderInterval);
  if (auto) {
    sliderInterval = setInterval(nextSlider, intervalTime);
  }
});
navBurger.addEventListener('click',()=>{
  navBurger.classList.toggle('open');
  navigation.classList.toggle('nav__active');
});