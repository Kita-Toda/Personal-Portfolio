// BLOG

$(document).ready(function() {
  // console.log("jQuery working"); TESTING
  $(".content .blog.box").hover(function() {
    // console.log("Hovered Success"); TESTING
    $(".text-content .blog.box h2").stop();
    $(".text-content .blog.box h2").animate(
      {
        top: "-60px"
      },
      1000
    );
  });
  $(".content .blog.box").mouseleave(function() {
    // console.log("Hovered Success"); TESTING
    $(".text-content .blog.box h2").stop();
    $(".text-content .blog.box h2").animate(
      {
        top: "0px"
      },
      1000
    );
  });
});

// ABOUT

$(document).ready(function() {
  // console.log("jQuery working"); TESTING
  $(".content .about.box").hover(function() {
    // console.log("Hovered Success"); TESTING
    $(".text-content .about.box h2").stop();
    $(".text-content .about.box h2").animate(
      {
        right: "-90px"
      },
      1000
    );
  });
  $(".content .about.box").mouseleave(function() {
    // console.log("Hovered Success"); TESTING
    $(".text-content .about.box h2").stop();
    $(".text-content .about.box h2").animate(
      {
        right: "-22px"
      },
      1000
    );
  });
});

// CONTACT

$(document).ready(function() {
  // console.log("jQuery working"); TESTING
  $(".content .contact.box").hover(function() {
    // console.log("Hovered Success"); TESTING
    $(".text-content .contact.box h2").stop();
    $(".text-content .contact.box h2").animate(
      {
        left: "-110px"
      },
      1000
    );
  });
  $(".content .contact.box").mouseleave(function() {
    // console.log("Hovered Success"); TESTING
    $(".text-content .contact.box h2").stop();
    $(".text-content .contact.box h2").animate(
      {
        left: "-22px"
      },
      1000
    );
  });
});

// PORTFOLIO

$(document).ready(function() {
  // console.log("jQuery working"); TESTING
  $(".content .portfolio.box").hover(function() {
    // console.log("Hovered Success"); TESTING
    $(".text-content .portfolio.box h2").stop();
    $(".text-content .portfolio.box h2").animate(
      {
        bottom: "-50px"
      },
      1000
    );
  });
  $(".content .portfolio.box").mouseleave(function() {
    // console.log("Hovered Success"); TESTING
    $(".text-content .portfolio.box h2").stop();
    $(".text-content .portfolio.box h2").animate(
      {
        bottom: "0px"
      },
      1000
    );
  });
});

// SMOOTH SCROLL

$("#about-button").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#about-section").offset().top
    },
    1000
  );
});
// ADD THE BLOG BUTTON
// $("#about-button").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#about-section").offset().top
//     },
//     1000
//   );
// });
// ADD THE CONTACT BUTTON
// $("#about-button").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#about-section").offset().top
//     },
//     1000
//   );
// });
// ADD THE PORTFOLIO BUTTON
// $("#about-button").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#about-section").offset().top
//     },
//     1000
//   );
// });

// PARALLAX
// var aboutSection = document.getElementById('about-section');
// var parallaxInstance = new Parallax(aboutSection);

var japaneseAnimationPlayed = false;

$(window).scroll(function(e){
  // console.log('scrolling');
  var scrollPosition = $(window).scrollTop() + 500;
  var moveSpeed = 0.5;
  var scrollMod = (scrollPosition * moveSpeed);
  $('.skills-container').css({"background-position-y":scrollMod});

  // Add animation on scrolling to element
  var aboutSectionPosition = $("#about-section").offset().top;
  var grewUpPosition = $(".grew-up").first().offset().top;
  var livedInPosition = $(".lived-in").first().offset().top;
  var japaneseSubtitlePosition = $(".japanese-subtitle").first().offset().top;

  if(scrollPosition >= (aboutSectionPosition-100)){
    $('.about-section__heading').addClass('animate__fadeInDown');
  }
  if(scrollPosition >= (grewUpPosition-100)){
    $('.grew-up').addClass('animate__fadeInLeft');
  }
  if(scrollPosition >= (livedInPosition-100)){
    $('.lived-in').addClass('animate__fadeInRight');
  }
  if(scrollPosition >= (japaneseSubtitlePosition-100)){
    if(japaneseAnimationPlayed == false){
    $('.japanese-subtitle').addClass('animate__animated');
    $('.japanese-subtitle').addClass('animate__fadeIn');
    $('.japanese-subtitle').addClass('animation-shown');
    $('.english-subtitle').addClass('animation-shown');
    japaneseAnimationPlayed = true;
    }
  }
    
  
  console.log(scrollPosition);
  console.log('about section');
  console.log(aboutSectionPosition);
});

$(document).ready(function(){
  $('.japanese-subtitle').on('mouseenter', function(){
    $('.japanese-subtitle').removeClass('animate__animated');
    $('.japanese-subtitle').removeClass('animate__fadeIn');
  });
});