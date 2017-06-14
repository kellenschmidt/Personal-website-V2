// Required for wow.js
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 160,
    mobile: true,
    live: true
})
wow.init();

// Fade out animation for title content when scrolling down
var titleHeightFromTopStart = $('#name-and-description')[0].getBoundingClientRect().top;
$(window).scroll(function (i, obj) {
    var paddingTop = 0;
    // Number of pixels between top of elements and top of viewport
    var mainHeightFromTop = $('#mainContent')[0].getBoundingClientRect().top;
    var titleHeightFromTop = $('#name-and-description')[0].getBoundingClientRect().top;
    // Fraction of title page still showing on viewport
    var fractionShowing = mainHeightFromTop / $(window).height();
    // Set opacity of title content
    $('#name-and-description').css('opacity', fractionShowing);
    // Add padding-top to title content so it scroll up more slowly
    var padding = (titleHeightFromTopStart-titleHeightFromTop)/1.55;
    $('#name-and-description').css('padding-top', padding);
});

// Smooth scroll on down arrow click
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});