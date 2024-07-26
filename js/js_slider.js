const container = document.querySelector('.container');
const slider = document.querySelector('#slider');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prev');
const pager = document.querySelector('.pager')
const nextBtn = document.querySelector('#next');
let pagerHTML = "";
let slideHeight = 0;
let slideCount = slide.length;
let currentIndex = 0;
let timer = undefined;

//가장 긴 높이 구해서 컨테이너에 높이 주기
for(let i = 0; i < slideCount; i++){
  if(slideHeight < slide[i].offsetHeight){
    slideHeight = slide[i].offsetHeight;
  }
}
container.style.height = slideHeight + "px";
slider.style.height = slideHeight + "px";

//슬라이드가 있으면 가로로 배열하기
for(let a = 0; a < slideCount; a++){
  slide[a].style.left = a*100 + "%";
  //pagerHTML.push(`<span data-idx="${a}">${a+1}</span>`)
  pagerHTML+=`<span data-idx="${a}">${a+1}</span>`;
  pager.innerHTML = pagerHTML;
}
const pagerBtn = document.querySelectorAll('.pager > span');

//슬라이드 이동 함수

//버튼 클릭 이후 슬라이드 이동시키기 + pagerBtn바꾸기 함수
function gotoSlide(idx){
  slider.style.left = -100*idx + "%";
  currentIndex = idx;
  for(let y = 0; y < pagerBtn.length; y++){
    pagerBtn[y].classList.remove('active');
  }
  pagerBtn[idx].classList.add('active');
}
gotoSlide(0);
//버튼 클릭 이후 슬라이드 이동시키기 - prev
prevBtn.addEventListener('click', function(){
  /** 
   * 
  //첫 슬라이드 일 때 - 방법1
  nextBtn.classList.remove('disabled');
  gotoSlide(currentIndex - 1);
  if(currentIndex <= 0){
    prevBtn.classList.add('disabled');
  }else{
    prevBtn.classList.remove('disabled');
  }
  */
  //첫 슬라이드 일 때 - 방법2
  if(currentIndex <= 0){
    gotoSlide(slideCount-1);
    currentIndex = slideCount -1;
  }else{
    gotoSlide(currentIndex-1);
  }
});
//버튼 클릭 이후 슬라이드 이동시키기 - next
nextBtn.addEventListener('click', function(){
  //마지막 슬라이드 일 때 - 방법1
  /** 
   * 
  gotoSlide(currentIndex + 1);
  prevBtn.classList.remove('disabled');
  if(currentIndex >= slideCount-1){
    nextBtn.classList.add('disabled');
  }else{
    nextBtn.classList.remove('disabled');
  }
  */
  //마지막 슬라이드 일 때 - 방법2
  if(currentIndex >= slideCount-1){
    gotoSlide(0);
    currentIndex = 0;
  }else{
    gotoSlide(currentIndex + 1);
  }
});
//자동 슬라이드
function autoGoSlider(){
  timer = setInterval(function(){
    let nextIdx = (currentIndex + 1) % slideCount;
    gotoSlide(nextIdx);
  }, 2000);
};
autoGoSlider();

function autoStopSlider(){
  clearInterval(timer);
}
var autoSlider = setInterval(function(){
}, 2000);
container.addEventListener('mouseover', function(){
  autoStopSlider();
});
container.addEventListener('mouseout', function(){
  autoGoSlider();
});

//pager
for(let x = 0; x < pagerBtn.length; x++){
  pagerBtn[x].addEventListener('click', function(e){
    //index가져오기 - 방법1
    /* 
    let pagerNum = e.target.getAttribute('data-idx');
    */
   //index가져오기 - 방법2
    let pagerNum = e.target.innerText -1;
    gotoSlide(pagerNum);
  });
};