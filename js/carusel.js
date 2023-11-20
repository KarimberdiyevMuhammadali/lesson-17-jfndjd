$(document).ready(function () {
    $(".owl-carousel-1").owlCarousel({
      loop: true,
      nav: true,
      
      navText: [
        "<img src='images/prev-icon.svg'/>",
        "<img src='images/next-icon.svg'/>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });