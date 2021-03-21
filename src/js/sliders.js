document.addEventListener('DOMContentLoaded', function () {
    new Splide('#price-slider', {
        perPage: 3,
        gap: 0,
        pagination: false,
        breakpoints: {
            992: {
                perPage: 2,
                arrows: false,
            },
            768: {
                perPage: 1,
                arrows: false,
                pagination: true,
            }
        }
    }).mount();

    var secondarySlider = new Splide('#instructor-thumb-slider', {
        fixedWidth: 100,
        height: 60,
        gap: 10,
        cover: true,
        isNavigation: true,
        arrows: false,
        focus: 'center',
        pagination: false,
        breakpoints: {
            480: {
                gap: 5,
                fixedWidth: 66,
                height: 40
            }
        },
    }).mount();

    var primarySlider = new Splide('#instructor-slider', {
        type: 'fade',
        heightRatio: 0.5,
        pagination: false,
        height: 360,
        arrows: false,
        cover: true,
        breakpoints: {
            480: {
                height: "auto"
            }
        }
    }); // do not call mount() here.

    primarySlider.sync(secondarySlider).mount();

    new Splide('#lessons-slider', {
        cover: true,
        heightRatio: 0.5,
        height: 400,
        gap: 10,
        pagination: false,
        breakpoints: {
            992: {
                pagination: true
            }
        },
        classes: {
            prev: "splide__arrow--prev-1",
            next: "splide__arrow--next-1"
        }
    }).mount(window.splide.Extensions);

    new Splide('#tech-slider', {
        perPage: 4,
        gap: 20,
        pagination: false,
        breakpoints: {
            992: {
                perPage: 3,
            },
            768: {
                perPage: 2,
                arrows: false,
                pagination: true,
            },
            480: {
                perPage: 1,
                arrows: false,
                pagination: true
            }
        }
    }).mount();

    new Splide('#review-slider', {
        perPage: 4,
        gap: 20,
        pagination: false,
        breakpoints: {
            992: {
                perPage: 2,
            },
            768: {
                perPage: 2,
                arrows: false,
                pagination: true,
            },
            576: {
                perPage: 1,
                pagination: true
            }
        }
    }).mount(window.splide.Extensions);
});

