$(function(){
  $('#source li:last').prependTo('#source');
  $('#source').css('margin-left', '-500px');
});
btn();
function btn(){
  $('#next').on('click', function(e){
    // $('#next, #prev').hide();
    $('#source').animate({marginLeft: '-=500px'},300,'swing', function(){
      $('#source li:first').appendTo('#source');
      $('#source').css('margin-left', '-500px');
      // $('#next, #prev').show();
    });
  });
  $('#next, #prev').on('mouseenter', function(e){
    clearInterval(sliderIn);
  });
  $('#next, #prev').on('mouseleave', function(e){
    let sliderIn = setInterval(aniGallery, 3000);
  });
  $('#prev').on('click', function(e){
    // $('#next, #prev').hide();
    $('#source').animate({marginLeft: '+=500px'},300,'swing', function(){
      $('#source li:last').prependTo('#source');
      $('#source').css('margin-left', '-500px');
      // $('#next, #prev').show();
    });
  });
}
function aniGallery(){
  // $('#next, #prev').hide();
  $('#source').animate({marginLeft: '-=500px'},300,'swing', function(){
    $('#source li:first').appendTo('#source');
    $('#source').css('margin-left', '-500px');
    // $('#next, #prev').show();
  });
}
aniGallery();
let sliderIn = setInterval(aniGallery, 3000);