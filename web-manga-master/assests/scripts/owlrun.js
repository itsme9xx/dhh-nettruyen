$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        nav: true,
        margin: 14,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 3000,
        smartSpeed: 500
        ,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });
});
