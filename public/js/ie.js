// Show "Not supported" page when Internet Explorer is the browser

// Identify if browser is Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

if(isIE) {
    // Redirect to ie.html
    window.location.assign("ie.html");
}