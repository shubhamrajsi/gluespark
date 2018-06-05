$("#modal").iziModal();
 $(document).ready(function(){
    $('.tabs').tabs({
      swipeable: true
    });
    $('.review').on('click',function(){
      $('.review-information').slideToggle(500);
      $('.fa-angle-right').toggleClass('rotate');
    });
    $('.sidenav').sidenav();
  });