var logo = document.getElementById('logo');

$(document).ready(function() {

    // Navigation Popup
    $("#menupop").click(function() {
        $(".menu-links").toggleClass("show");
    });

    logo.classList.add('slideLeft');

});

