
var cookieTitle = "Cookies."; // Title
var cookieDesc = "By using this website, you automatically accept that we use cookies."; // Description
var cookieLink = '<a href="cookiepolicy.html" target="_blank">What for?</a>'; // Cookiepolicy link
var cookieButton = "Understood"; // Button text



function cookieCFadeIn(elem, display) {
    var el = document.getElementById(elem);
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};


function cookieCFadeOut(elem) {
    var el = document.getElementById(elem);
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .02) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};



function cookieConsent() {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + cookieTitle + '</a></div><div class="cookieDesc"><p>' + cookieDesc + ' ' + cookieLink + '</p></div><div class="cookieButton"><a onClick="cookieD();">' + cookieButton + '</a></div></div>';
    cookieCFadeIn("cookieConsentContainer");
}

function cookieD() {
    cookieCFadeOut("cookieConsentContainer");
}

window.onload = function() { cookieConsent(); };
