// Initialize Cloudinary
var cl = cloudinary.Cloudinary.new({cloud_name: "kellenscloud", secure: true});

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

// Apply cloudinary URL to background-image
var imageUrl = cl.url("background-050", standard);
$(".title-page-wallpaper").css("background-image", "url(" + imageUrl + ")");
