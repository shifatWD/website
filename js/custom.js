$(document).ready(function(){
  

  // testimonial slider
 $('.menu-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 400,
  asNavFor: '.nav-slider',
});
$('.nav-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.menu-slider',
  centerMode: true,
  autoplay: true,
  speed: 400,
  arrows: false,
  vertical:true,
  focusOnSelect: true,
});

// aso animation
AOS.init();

// sticky navbar
window.addEventListener('scroll' ,function(){
  var nav = document.querySelector("nav")
  nav.classList.toggle("sticky", window.scrollY > 30) 
})

// back to top button
$('.back-to-top').click(function(){
  $('html, body').animate({
    scrollTop: 0,
  })
})

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 200){
      $('.back-to-top').show(200)
  }
  else(
    $('.back-to-top').hide(200)
  )
    
  
})


})