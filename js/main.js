App = {};

(function ($) {
    // Load First
    $('.carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 1,
                nav: true,
                loop: false
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



