App = {};

(function ($) {
  App.checkWindowSize = () => {
    var width = $(window).width(),
      new_class = width > 992 ? "" : "menu-mobile";

    $("header .navbar ul.submenu")
      .removeClass("menu-mobile")
      .addClass(new_class);

    // var heightPos1 = $('.pos1').height();
    // $('.pos3').css({
    //     'margin-top': -heightPos1 + 300 + 'px'
    // });
  };
  App.calculatorSidebarDetail = () => {
    var $window = $(window);
    var heightPos1 = $(".pos1").height();

    var windowsize = $window.width();
    if (windowsize >= 992) {
      //if the window is greater than 440px wide then turn on jScrollPane..
      $(".pos3").css({
        "margin-top": -heightPos1 + 280 + "px",
      });
    } else if (windowsize < 992) {
      $(".pos3").css({
        "margin-top": 0 + "px",
      });
    } else {
      return;
    }
  };

  // Load First
  $(".carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
        nav: true,
      },
      768: {
        items: 2,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
        nav: true,
      },
      992: {
        items: 1,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        nav: true,
        margin: 0,
      },
    },
  });

  // Các sản phẩm công ty
  $(".products.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
      },
      768: {
        items: 3,
        nav: true,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
      },
      1024: {
        items: 3,
        nav: true,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
      },
    },
  });

  // CEO
  $(".founders.owl-carousel").owlCarousel({
    loop: true,
    // margin: auto,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
      },
      768: {
        items: 3,
        nav: true,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
      },
      992: {
        items: 3,
        nav: true,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        margin: 0,
      },
    },
  });

  // Công ty thành viên
  $(".companies.owl-carousel").owlCarousel({
    loop: true,
    // margin: auto,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
      },
      768: {
        items: 3,
        nav: true,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
      },
      992: {
        items: 3,
        nav: true,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
        margin: 0,
      },
    },
  });

  $(".news-local.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
        nav: true,
      },
      768: {
        items: 1,
        navText: [
          "<img src='./img/arrow-left2.png'>",
          "<img src='./img/arrow-right2.png'>",
        ],
        nav: true,
      },
      992: {
        items: 1,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        nav: true,
        margin: 0,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

  // When resize screen
  $(window).resize(function () {
    App.checkWindowSize();
    App.calculatorSidebarDetail();
  });

  // Run first
  $(document).ready(function () {
    App.checkWindowSize();
    App.calculatorSidebarDetail();
    // Click menu mobile
    // $("header ul.navbar-nav li.nav-item").on("click", function () {
    //   $(this).find("ul.submenu1").addClass("active");
    //   console.log(this);
    // });
    // $("header ul.submenu1 > li").on("click", function () {
    //   $(this).find("ul.submenu2").addClass("active");
    //   console.log(this);
    // });

    $('.navbar-nav .parent').append('<span class="open-menu fa fa-plus"></span>');
    // fix non-scrolling overflow issue on mobile devices
    $('.navbar-nav > ul').wrap('<div class="overflow"></div>');

    $('.open-menu').on('click', function (e) {
      e.preventDefault();
      $(this).prev('ul').slideToggle(250);
      $(this).toggleClass('rotate');
    });

  });
})(jQuery);
