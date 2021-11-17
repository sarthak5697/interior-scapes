$(document).ready(function() {
   $('.customer-img').slick({
     slidesToShow: 1,
    slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [{
  breakpoint: 768,
  settings: {
    slidesToShow: 1
  }
  }, {
  breakpoint: 520,
  settings: {
    slidesToShow: 1
  }
  }]
});
});

