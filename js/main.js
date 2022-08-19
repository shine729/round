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

$('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
  ]
});