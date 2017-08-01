// Initialize Cloudinary
var cl = cloudinary.Cloudinary.new({cloud_name: "kellenscloud", secure: true});

// Set basic configuration for transformation
var background = {crop: "scale", fetch_format: "auto", quality: "auto", width: 2500};

// Apply cloudinary URL to background-image
var imageUrl = cl.url("background-050", background);

// Determine if browser is iPhone Safari
    var ua = window.navigator.userAgent;
    var iPhone = !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iPhoneSafari = iPhone && webkit && !ua.match(/CriOS/i);

    // If device/browser is iPhone Safari then set background-attachment to compatible value
    if(iPhoneSafari) {
        $(".background-fallback-image").css("background-image", "url(" + imageUrl + ")");
        $(".background-fallback-image").css("display", "inherit");
    } else {
        $(".title-page-wallpaper").css("background-image", "url(" + imageUrl + ")");
        $(".background-fallback-image").css("display", "none");
    }


// Set configuration for chip transformation
var chip = {crop: "scale", radius: "max", fetch_format: "auto", quality: "auto", width:"120"};

// Get image name from id and apply cloudinary URL to src
$(".chip img").each(function() {
    var imageUrl = cl.url($(this).attr("id"), chip);
    $(this).attr("src", imageUrl);
    $(this).attr("width", 40);
});

// Set basic configuration for transformation
var standard = {crop: "scale", fetch_format: "auto", quality: "auto"};

// Get image name from id and apply cloudinary URL to src
$(".img-fluid").each(function() {
    var imageUrl = cl.url($(this).attr("id"), standard);
    $(this).attr("src", imageUrl);
});
