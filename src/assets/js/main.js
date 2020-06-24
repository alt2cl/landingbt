//Codigo personalizado js

// var topLimit = jQuery('#scroll-ad-position').offset().top;

// console.log('limite top', topLimit)

//const elem2 = jQuery('#fixedElement');


jQuery("#owl-demo").owlCarousel({
    loop:true,
    margin:0,
  
    responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:2,
              nav:true,
              loop:false
          }
      }
});