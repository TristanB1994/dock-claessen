var logo = document.getElementById('logo');
var logoTwo = document.getElementById('new_logo');
var nav = document.getElementsByTagName('nav')[0];
var foot = document.getElementsByClassName('footerlay')[0];
var cpl = document.getElementsByClassName('CPL')[0];
var cplnew = document.getElementById('cpl');
// banner slides
var banner = document.getElementsByClassName('homebanner')[0];
var slide1 = banner.getElementsByClassName('scroll-banner-1')[0];
var slide2 = banner.getElementsByClassName('scroll-banner-2')[0];
var slide3 = banner.getElementsByClassName('scroll-banner-3')[0];
// let slide3imgs = slide3.getElementsByTagName('img');

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
        bannerMsg1();
    });

});

function newlogo(){
    logoTwo.classList.add('color');
    cplnew.classList.add('color');
    nav.classList.add('blueborder')
    foot.classList.add('Blue')
}

// Banner slides

function bannerMsg1() {
    $(slide1).hide();
    $(slide2).css('display','flex');
    setTimeout(function(){
        bannerMsg2();
    }, 2000);
}

function bannerMsg2() {
    $(slide2).hide();
    $(slide3).css('display','block');
};