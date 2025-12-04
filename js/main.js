(function ($) {
    "use strict";

    /*================ Date and Time Picker ================*/

    // تاریخ شمسی
    $('#date').persianDatepicker({
        format: 'YYYY/MM/DD',
        observer: true,
        autoClose: true,
        initialValue: false
    });

    // زمان شمسی (ساعت و دقیقه)
    $('#time').persianDatepicker({
        format: 'HH:mm',
        onlyTimePicker: true,  // فقط ساعت و دقیقه
        observer: true,
        autoClose: true,
        initialValue: false
    });

    /*================ Testimonials Carousel ================*/
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);
