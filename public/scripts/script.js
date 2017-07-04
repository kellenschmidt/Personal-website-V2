// Required for wow.js
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 150,
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
    // Opacity determined by fraction of title page still showing on viewport multiplied by constant
    var newOpacity = mainHeightFromTop / $(window).height();
    // Set opacity of title content
    $('#name-and-description').css('opacity', newOpacity*newOpacity);
    // Add padding-top to title content so it scroll up more slowly
    var newPadding = (titleHeightFromTopStart-titleHeightFromTop)/1.45;
    $('#name-and-description').css('padding-top', newPadding);
});

// Smooth scroll on down arrow click
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            var ratio = 90/1030*$(window).height();
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top-ratio
                }, 800);
                return false;
            }
        }
    });
});

// Enable tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// Collapse navigation bar when link is clicked
$(function(){ 
    $('.navbar-nav a:not([data-toggle])').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});

// Card carousel manual controls
$(function() {
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
});

// Modal for "projects" and "work experience"
$('#learnMoreModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var header = button.attr('id'); // Extract info from data-* attributes
    var body = '<h4>Achievements</h4><ul><li>Did great stuff</li><li>Made boatloads of cash</li></ul>';
    var githubLink = 'https://github.com/kellenschmidt/kellenschmidt.com';
    var bgColor = 'purple';
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').html(header);
    modal.find('.modal-body').html(body);
    modal.find('.modal-footer a').attr('href', githubLink);
    modal.find('.modal-footer button').css('background-color', bgColor);
})