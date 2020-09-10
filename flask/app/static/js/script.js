var logo = document.getElementById('logo');
var logoTwo = document.getElementById('new_logo');
var nav = document.getElementsByTagName('nav')[0];
var foot = document.getElementsByClassName('footerlay')[0];
var cpl = document.getElementsByClassName('CPL')[0];
var cplnew = document.getElementById('cpl');

$(document).ready(function() {

    // Navigation Popup
    $("#menupop").click(function() {
        $(".menu-links").toggleClass("show");
    });

    logo.classList.add('slideLeft');
    $(logo).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", 
    function(event) {
        $(this).remove();
        cpl.remove();
        newlogo();
    });

});

function newlogo(){
    logoTwo.classList.add('color');
    cplnew.classList.add('color');
    nav.classList.add('blueborder')
    foot.classList.add('Blue')
}