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

    current_instructor = 0
    let instructor_entities = document.querySelectorAll(".instructor-entity");
    let thumbs = document.querySelectorAll(".thumb")
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener("click", function (e) {
            thumbs[current_instructor].classList.remove("thumb-active")
            instructor_entities[current_instructor].classList.remove("instructor-active")
            thumbs[i].classList.add("thumb-active")
            instructor_entities[i].classList.add("instructor-active")
            current_instructor = i
        })
    }

    new Splide('#lessons-slider', {
        cover: true,
        heightRatio: 0.5,
        height: 400,
        gap: 10,
        pagination: false,
        breakpoints: {
            992: {
                pagination: true
            },
            768: {
                height: 300,
                pagination: true
            },
            480: {
                height: 250,
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

