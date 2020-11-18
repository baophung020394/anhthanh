App = {};

(function ($) {

    // App.checkWindowSize = () => {
    //     var width = $(window).width(),
    //         new_class = width > 1199 ? "" : "carousel-company owl-carousel";

    //     $(".products").removeClass("carousel-company owl-carousel owl-loaded owl-drag").addClass(new_class);
        
    // };

    
    // Load First
    $('.carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                navText: ["<img src='../img/arrow-left.png'>", "<img src='./img/arrow-right.png'>"],
                nav: true
            },
            768: {
                items: 2,
                navText: ["<img src='../img/arrow-left.png'>", "<img src='./img/arrow-right.png'>"],
                nav: true
            },
            992: {
                items: 1,
                navText: ["<img src='../img/arrow-left.png'>", "<img src='./img/arrow-right.png'>"],
                nav: true,
                margin: 0
            }
        }
    });

    $('.products.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            1024: {
                items: 3,
                nav: false
            }
        }
    });

    $('.founders.owl-carousel').owlCarousel({
        loop: true,
        // margin: auto,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 3,
                nav: false,
                margin: 0
            }
        }
    });

    $('.companies.owl-carousel').owlCarousel({
        loop: true,
        // margin: auto,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 3,
                nav: false,
                margin: 0
            }
        }
    });
   
    // When resize screen
    $(window).resize(function () {
        // App.checkWindowSize();
    });

     // Run first
     $(document).ready(function () { 
        // App.checkWindowSize();

        // $('.carousel-company').owlCarousel({
        //     loop: true,
        //     margin: 10,
        //     responsiveClass: true,
        //     responsive: {
        //         0: {
        //             items: 2,
        //             nav: false
        //         },
        //         768: {
        //             items: 3,
        //             nav: false
        //         },
        //         1024: {
        //             items: 3,
        //             nav: false
        //         }
        //     }
        // });
     });
  
})(jQuery);



