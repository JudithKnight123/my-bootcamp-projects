$(document).ready(function(){

    var hasMultipleSlides = false;

    if (document.querySelectorAll('.custom__hero').length > 1) {
        hasMultipleSlides = true;
    }
    $('.swb__header--carousel.owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        autoplayTimeout:3000,
        dots: hasMultipleSlides,
        loop: hasMultipleSlides,
        autoplay: hasMultipleSlides,
        mouseDrag: hasMultipleSlides,
        touchDrag: hasMultipleSlides
    });
    $('.swb__category--carousel.owl-carousel').owlCarousel({
        items: 2,
        nav: true,
        margin:10,
        autoplayTimeout:3500,
        dots: false,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                stagePadding: 40,
            },
            768: {
                items:3
            },
            1024: {
                items:4
            },
            1300: {
                items:5
            }
        }

    });
});