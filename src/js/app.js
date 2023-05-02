// jquery inport
import $ from "jquery";

// Bootstrap import
import 'bootstrap';

import 'slick-carousel/slick/slick';

$(window).scroll(function() {
 
   // jquary for sticky header    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass("sticky-nav");
    } else {
      $(".navbar").removeClass("sticky-nav");
    }
   });


function myFunction(x) {
   //   navbar closing on nav-links
   if (x.matches) { // If media query matches
      $(".nav-link").click(function (){
         if($('#navbarSupportedContent').hasClass('show')){
            $('#navbarSupportedContent').removeClass('show');
            $('.navbar-toggler').removeClass('active');
            $('body').removeClass("overflow-hidden");
         }
         else{
            $('#navbarSupportedContent').removeClass('show');
            $('.navbar-toggler').addClass('active');
            $('body').addClass("overflow-hidden");
         }
      });
   
      // navbar-toggler button function
      $(".navbar-toggler").click(function (){
         $(this).toggleClass("active");
         $('body').toggleClass("overflow-hidden");
   
      });
   } else {
      $('body').removeClass("overflow-hidden");
   }
 }
 
//  resize media quary for nav-expand to body overflow 
 var x = window.matchMedia("(max-width: 991px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes



//   for animated scroll scroll
  function scrollNav() {

   $('.navbar .nav-link').click(function(){  
     $('html, body').stop().animate({
       scrollTop: $( $(this).attr('href') ).offset().top - 120
     }, 700);
     return false;
   });
 };

 
 $('.yoga-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  speed: 400,
  responsive: [
   {
     breakpoint: 992,
     settings: {
       dots: true,
     }
   }
 ]
});


