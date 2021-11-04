    // scroll to top js

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $(".scroll_to_top").fadeIn();
      } else {
          $(".scroll_to_top").fadeOut();
      }
  });

  $(".scroll_to_top").click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 500);
  });


    // sticky top js

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $(".bd-header").addClass("header_bg_hover");
      } else {
          $(".bd-header").removeClass("header_bg_hover");
      }
  });


  // Smooths scrolling
  $('body').scrollspy({
      target: ".bd-header",
      offset: 50
  });
