$(".menubar").on("click",function(){
  $("#menu").toggleClass("active");
  $(".menubar span").toggleClass("active");
  $(".bg_black").toggleClass("active");
});


$('#menu>ul>li').mouseenter(function(){
  $('#menu>ul>li').children('.submenu').removeClass('on');
  $(this).children('.submenu').addClass('on');
});

$('.submenu>li').mouseenter(function(){
  $('.submenu>li').children('.submenu2').removeClass('on');
  $(this).children('.submenu2').addClass('on');
});