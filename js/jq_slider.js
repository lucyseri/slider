$(function(){
  $('#source li:last').prependTo('#source');
  $('#source').css('margin-left', '-500px');
});
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
btn();
function btn(){
 $('#next').on('click', function(e){
   // $('#next, #prev').hide();
   $('#source').animate({marginLeft: '-=500px'},300,'swing', function(){
     $('#source li:first').appendTo('#source');
     $('#source').css('margin-left', '-500px');
     console.log(e.type);
     // $('#next, #prev').show();
   });
 });
 $('#prev').on('click', function(e){
   // $('#next, #prev').hide();
   $('#source').animate({marginLeft: '+=500px'},300,'swing', function(){
     $('#source li:last').prependTo('#source');
     $('#source').css('margin-left', '-500px');
     console.log(e.type);
     // $('#next, #prev').show();
   });
 });
  $('#next, #prev').on('mouseenter', function(e){
    clearInterval(sliderIn);
    console.log(e.type);
  });
  $('#next, #prev').on('mouseleave', function(e){
    sliderIn = setInterval(aniGallery, 3000);
    console.log(e.type);
  });
}