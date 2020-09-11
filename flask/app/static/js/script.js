var logo = document.getElementById('logo');
var logoTwo = document.getElementById('new_logo');
var nav = document.getElementsByTagName('nav')[0];
var foot = document.getElementsByClassName('footerlay')[0];
var cpl = document.getElementsByClassName('CPL')[0];
var cplnew = document.getElementById('cpl');
// banner slides
var banner = document.getElementsByClassName('homebanner')[0];
var slide1 = banner.getElementsByClassName('scroll-banner-1');
var slide2 = banner.getElementsByClassName('scroll-banner-2');
var slide3 = banner.getElementsByClassName('scroll-banner-3');

$(document).ready(function() {

    // Navigation Popup
    $("#menupop").click(function() {
        $(".menu-links").toggleClass("show");
    });

    $(logo).one('animationend', function(event) {
        $(this).remove();
        cpl.remove();
        newlogo()
    })
    $(cplnew).one('animationend', function(event) {
        bannerMsg();
    });

});

function newlogo(){
    logoTwo.classList.add('color');
    cplnew.classList.add('color');
    nav.classList.add('blueborder')
    foot.classList.add('Blue')
}

// Banner slides

function bannerMsg() {
    $(slide1).hide();
    $(slide2).show(50, function(){
        console.log('slide2 ran');
    });
}