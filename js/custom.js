/* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function () {
  $(".preloader").fadeOut(1000); // set duration in brackets
});

$(document).ready(function () {
  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  /* Navbar */

  $(window).scroll(function () {
    var t = $(this).scrollTop();
    t > $(this).height() / 4
      ? $(".navbar").addClass("nav-fix")
      : $(".navbar").removeClass("nav-fix"),
      $(window).height(),
      $(document).height(),
      $("footer").height();
  });

  /* Smoothscroll js
  -----------------------------------------------*/
  $(function () {
    $(".navbar-default a").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function () {
    $("#home").vegas({
      slides: [{ src: "/images/background.svg" }],
      timer: false,
      transition: ["zoomIn"],
      animation: ["kenburns"],
    });
  });

  $(function () {
    $("#product").vegas({
      slides: [{ src: "/images/product-bg.svg" }],
      timer: false,
      animation: ["kenburns"],
    });
  });

  $(function () {
    $("#gallery").vegas({
      slides: [{ src: "/images/why-bg.svg" }],
      timer: false,
    });
  });

  /* Team carousel
  -----------------------------------------------*/
  $(document).ready(function () {
    $("#team-carousel").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      slideSpeed: 300,
      itemsDesktop: [1199, 2],
      itemsTablet: [768, 1],
      itemsTabletSmall: [985, 2],
      itemsMobile: [479, 1],
    });
  });

  /* Back to Top
    -----------------------------------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".go-top").fadeIn(200);
    } else {
      $(".go-top").fadeOut(200);
    }
  });
  // Animate the scroll to top
  $(".go-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();
});
