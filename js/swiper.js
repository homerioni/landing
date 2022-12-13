// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const catalog_slider = new Swiper('.catalog-slider__slider', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    breakpoints: {
        0: {
            slidesPerView: 1.05,
            spaceBetween: rem(2),
        },
        769: {
            slidesPerView: 3,
            spaceBetween: rem(9.5),
        },
    },

    autoplay: {
        delay: 5000,
    },

});