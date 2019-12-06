/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function() {
  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function() {
    // show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav
      $("nav").addClass("white-nav-top");
    } else {
      // Hide white nav
      $("nav").removeClass("white-nav-top");
    }
  }
});

// PARTICLES

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "/tomsisserman.github.io/particles/particles.json", function() {
  console.log("callback - particles.js config loaded");
});

// TYPYING EFFECT ( typed.js )

if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
    strings: typed_strings.split(","),
    typeSpeed: 40,
    loop: true,
    backDelay: 1100,
    backSpeed: 40
  });
}

// Smooth Scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top -37
      },
      1250,
      "easeInOutExpo"
    );
  });
});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    // $("#home-heading-1").addClass("animated fadeInDown");
    // $("#home-heading-2").addClass("animated fadeInLeft");
    // $("#home-text").addClass("animated zoomIn");
    // $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});


$(function () {

  // Show mobile nav
  $("#mobile-nav-open-btn").click(function () {
      $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
      $("#mobile-nav").css("height", "0%");
  });

});
