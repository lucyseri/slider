//reset
var slideCount = $("#source>li").length;
var firstSlide = slideCount - 3;
function reset() {
  $("#source>li:gt(" + firstSlide + ")").prependTo("#source");
  $("#source").css("margin-left", "-500px");
}
reset();

//function - pager
function pagerFn(num) {
  for (var a = 0; a < slideCount; a++) {
    $(".pager-btn").eq(a).removeClass("active");
  }
  $(".pager-btn").eq(num).addClass("active");
}

//fungtion - timer
var currentCount = 0;
function aniGallery() {
  $("#source").animate({ marginLeft: "-=500px" }, 300, "swing", function () {
    $("#source li:first").appendTo("#source");
    $("#source").css("margin-left", "-500px");
    if (currentCount >= slideCount) currentCount = 0;
    pagerFn(currentCount);
    currentCount++;
  });
}
aniGallery();
let sliderIn = setInterval(aniGallery, 3000);

//arrow btn
function btn() {
  $("#next").on("click", function (e) {
    $("#source").animate({ marginLeft: "-=500px" }, 300, "swing", function () {
      $("#source li:first").appendTo("#source");
      $("#source").css("margin-left", "-500px");
      if (currentCount >= slideCount) currentCount = 0;
      pagerFn(currentCount);
      currentCount++;
    });
  });
  $("#prev").on("click", function (e) {
    $("#source").animate({ marginLeft: "+=500px" }, 300, "swing", function () {
      $("#source li:last").prependTo("#source");
      $("#source").css("margin-left", "-500px");
      currentCount--;
      if (currentCount < 0) currentCount = slideCount - 1;
      pagerFn(currentCount - 1);
    });
  });
  $("#next, #prev").on("mouseenter", function (e) {
    clearInterval(sliderIn);
  });
  $("#next, #prev").on("mouseleave", function (e) {
    sliderIn = setInterval(aniGallery, 3000);
  });
}
btn();

//pager btn
function pagerBtn() {
  $(".pager-btn").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var idx = $(this).index();
    var dataIdx = $("#source li[data-idx=" + idx + "]").index();
    
    if(idx >= currentCount){
      console.log(idx+"/"+currentCount);
      $("#source>li:lt(" + dataIdx + ")").appendTo("#source");
      currentCount = idx;
      reset();
      aniGallery();
    }else{
      console.log(idx+"/"+currentCount);
      $("#source>li:lt(" + dataIdx + ")").appendTo("#source");
      currentCount = idx;
      $("#source").css("margin-left", "-500px");
      $("#source").animate({ marginLeft: "+=500px" }, 300, "swing", function () {
        $("#source li:last").prependTo("#source");
        $("#source").css("margin-left", "-500px");
      });
    }


  });
  $(".pager-btn").mouseenter(function () {
    clearInterval(sliderIn);
  });
  $(".pager-btn").mouseleave(function () {
    sliderIn = setInterval(aniGallery, 3000);
  });
}
pagerBtn();
