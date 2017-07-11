// Required for wow.js
wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 100,
    mobile: true,
    live: true
});
wow.init();

// Fade out animation for title content when scrolling down
var titleHeightFromTopStart = $("#name-and-description")[0].getBoundingClientRect().top;
$(window).scroll(function (i, obj) {
    var paddingTop = 0;
    // Number of pixels between top of elements and top of viewport
    var mainHeightFromTop = $("#mainContent")[0].getBoundingClientRect().top;
    var titleHeightFromTop = $("#name-and-description")[0].getBoundingClientRect().top;
    // Opacity determined by fraction of title page still showing on viewport multiplied by constant
    var newOpacity = mainHeightFromTop / $(window).height();
    // Set opacity of title content
    $("#name-and-description").css("opacity", newOpacity*newOpacity);
    // Add padding-top to title content so it scroll up more slowly
    var newPadding = (titleHeightFromTopStart-titleHeightFromTop)/1.45;
    $("#name-and-description").css("padding-top", newPadding);
});

// Smooth scroll on down arrow click
$(function () {
    $("a[href*='#']:not([href='#'])").click(function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            var ratio = 90/1030*$(window).height();
            if (target.length) {
                $("html, body").animate({
                scrollTop: target.offset().top-ratio
                }, 800);
                return false;
            }
        }
    });
});

// Enable tooltips
$(function () {
    $("[data-toggle='tooltip']").tooltip();
});

// Collapse navigation bar when link is clicked
$(function(){ 
    $(".navbar-nav a:not([data-toggle])").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });
});

// Card carousel manual controls
$(function() {
    $(".next").click(function(){ $(".carousel").carousel("next");return false; });
    $(".prev").click(function(){ $(".carousel").carousel("prev");return false; });
});

// Modal for "projects" and "work experience"
$("#learnMoreModal").on("show.bs.modal", function($event) {
    var $button = $($event.relatedTarget); // Button that triggered the modal
    var $id = $button.attr("id");
    var $modal = $(this);
    
    // Display Material Design loading spinner
    $modal.find(".modal-body").html("<div class='text-center'><svg class='spinner' width='65px' height='65px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'><circle class='path' fill='none' stroke-width='6' stroke-linecap='round' cx='33' cy='33' r='30'></circle></svg></div>");
    // Set button to default color
    $modal.find(".modal-footer button").css("background-color", "buttonface");

    //AJAX request to get content for modal from API and set modal content in callback
    $.ajax({
        "url": "https://api.kellenschmidt.com/modal/" + $id,
        "type": "GET",
        "dataType": "json",
        "timeout": 10000,
        "data": {},
        "success": function($data) {
            // Update the modal"s content
            $modal.find(".modal-title").html($data.header);
            $modal.find(".modal-body").html($data.body);
            $modal.find(".modal-footer a").attr("href", $data.github_link);
            $modal.find(".modal-footer button").css("background-color", $data.accent_color);
        },
        "error": function($jqXHR, $textStatus, $errorThrown) {
            // Display error message
            $modal.find(".modal-title").html("Ajax request failed: " + $textStatus + ", " + $errorThrown);
            $modal.find(".modal-body").html("<h4>Response</h4><br><plaintext>" + $jqXHR.responseText + "</plaintext>");
        }
    });
});