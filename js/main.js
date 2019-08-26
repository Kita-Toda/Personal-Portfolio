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
