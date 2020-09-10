var logo = document.getElementById('logo');
var logoTwo = document.getElementById('new_logo');
var nav = document.getElementsByTagName('nav')[0];
var foot = document.getElementsByClassName('footerlay')[0];

$(document).ready(function() {

    // Navigation Popup
    $("#menupop").click(function() {
        $(".menu-links").toggleClass("show");
    });

    logo.classList.add('slideLeft');
    $(logo).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", 
    function(event) {
        $(this).remove();
        newlogo();
    });

});

function newlogo(){
    // logoTwo.classList.add('color');
    logoTwo.classList.add('color');
    nav.classList.add('blueborder')
    foot.classList.add('Blue')
}