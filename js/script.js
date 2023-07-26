$(function(){
  //menu
  $('.mainmenu>li').mouseover(function(){
    $(this).find('.mainmenu_item').stop().slideDown();
  })
  $('.mainmenu>li').mouseleave(function(){
    $(this).find('.mainmenu_item').stop().slideUp();
  })

  //slide
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //end
})