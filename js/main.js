App = {};

(function ($) {
    // Load First
    $('.carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots:false,
        responsive: {
            0: {
                items: 2,
                navText: ["<img src='../img/arrow-left.png'>","<img src='../img/arrow-right.png'>"],
                nav: true
            },
            768: {
                items: 2,
                navText: ["<img src='../img/arrow-left.png'>","<img src='../img/arrow-right.png'>"],
                nav: true
            },
            992: {
                items: 1,
                navText: ["<img src='../img/arrow-left.png'>","<img src='../img/arrow-right.png'>"],
                nav: true,
                margin: 0
            }
        }
    });

    $('.founders').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

})(jQuery);



