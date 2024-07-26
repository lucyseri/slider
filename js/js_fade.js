const container = document.querySelector('.container');
const gallery = document.querySelector('ul.gallery');
const galleryImg = document.querySelectorAll('li.gallery-img');
const pager = document.querySelector('.pager');
const pagerBtn = document.querySelectorAll('li.pager-btn');
const arrows = document.querySelector('.arrows');
const arrow = document.querySelectorAll('span.arrow-btn i')

//height of container & ul.gallery
let galleryHeight = 0;
for(let a = 0; a < galleryImg.length; a++){
  if(galleryHeight < galleryImg[a].offsetHeight){
    galleryHeight = galleryImg[a].offsetHeight;
  } 
}
container.style.height = galleryHeight + "px";
gallery.style.height = galleryHeight + "px";

//function - img fade
function fadeImgFn(num){
  galleryImg.forEach((el, idx)=>{
    if(idx == num){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  });
};
//function - active pager
function pagerActiveFn(num){
  for(let b = 0; b < galleryImg.length; b++){
    pagerBtn[b].classList.remove('active');
  };
  pagerBtn[num].classList.add('active');
};
//auto fade
let fadeCount = 0;
function autoFadeFn(){
  if(fadeCount >= galleryImg.length){
    fadeCount = 0;
  }else if(fadeCount < 0){
    fadeCount = galleryImg.length - 1;
  };
  fadeImgFn(fadeCount);
  pagerActiveFn(fadeCount);
  fadeCount++;
};
(()=>{autoFadeFn()})();
let fadeInt = setInterval(autoFadeFn, 3000);

//arrow btn
arrows.addEventListener('click', arrowBtnFn);
arrows.addEventListener('mouseover', arrowBtnFn);
arrows.addEventListener('mouseout', arrowBtnFn);
function arrowBtnFn(e){
  arrow.forEach((el, idx)=>{
    if(e.target == el){
      if(e.type == 'click'){
        if(idx == 0){
          fadeCount--;
          if(fadeCount < 0) fadeCount = galleryImg.length - 1;
        }else if(idx == 1){
          fadeCount++;
          if(fadeCount >= galleryImg.length) fadeCount = 0;
        }
        fadeImgFn(fadeCount);
        pagerActiveFn(fadeCount);
      }else if(e.type == "mouseover"){
        clearInterval(fadeInt);
      }else if(e.type == "mouseout"){
        fadeInt = setInterval(autoFadeFn, 3000);
      }
    }
  })
};
//pager-btn
pager.addEventListener('click', pagerFn);
pager.addEventListener('mouseover', pagerFn);
pager.addEventListener('mouseout', pagerFn);
function pagerFn(e){
  pagerBtn.forEach((el, idx)=>{
    if(e.target == el){
      if(e.type == 'click'){
        pagerActiveFn(idx);
        fadeImgFn(idx);
      }else if(e.type == 'mouseover'){
        clearInterval(fadeInt);
      }else if(e.type == 'mouseout'){
        fadeInt = setInterval(autoFadeFn, 3000);
      }
    }
  });
};