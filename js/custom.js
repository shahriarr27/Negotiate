$(document).ready(function(){
  var owl = $('.banner-carousel');
  owl.owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    mouseDrag:false,
    smartSpeed: 1000,
    autoplayTimeout:7000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
       0:{
          items: 1
       },
       768:{
          items: 1
       },
       769:{
         items: 1
      }
    }
  });
  
  owl.on('changed.owl.carousel',function(event){
    var item=event.item.index-2;

    $('h2').removeClass('animated zoomInUp');
    $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated zoomInUp');
 });



$('.num').countUp({
  delay: 70,
  time: 3000,
});

$('.carousel-testimonial').owlCarousel({
  autoplay: true,
  center: true,
  loop: true,
  items:1,
  stagePadding: 0,
  smartSpeed:1000,
  nav: false,
  navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
  responsive:{
    0:{
      items: 1
    },
    600:{
      items: 1
    },
    1000:{
      items: 3
    }
  }
});

var siteScroll = function() {
  $(window).on('scroll',function(){
    if($(window).scrollTop()>700){
        $('#go-top').addClass('go-top-after');
    }
    else{
        $('#go-top').removeClass('go-top-after');
    }
  });
};
siteScroll();

});
