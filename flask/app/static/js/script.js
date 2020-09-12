// Major Dom items

var logo = document.getElementById('logo');
var logoTwo = document.getElementById('new_logo');
var nav = document.getElementsByTagName('nav')[0];
var foot = document.getElementsByClassName('footerlay')[0];

// Index page items
var cpl = document.getElementsByClassName('CPL')[0];
var cplnew = document.getElementById('cpl');

// banner slides
var banner = document.getElementsByClassName('homebanner')[0];
if (banner) {
    var slide1 = banner.getElementsByClassName('scroll-banner-1')[0];
    var slide2 = banner.getElementsByClassName('scroll-banner-2')[0];
    var slide3 = banner.getElementsByClassName('scroll-banner-3')[0];
}

// Contact

var red = document.getElementsByClassName('red');
// let slide3imgs = slide3.getElementsByTagName('img');
// var links = [].concat([].slice.call(document.getElementsByClassName('salesformat')),[].slice.call(document.getElementsByClassName('officeformat')));

var deets = document.getElementsByClassName('CTAs');

$(document).ready(function() {

    // Navigation Popup
    $("#menupop").click(function() {
        $(".menu-links").toggleClass("show");
    });

    $(logo).one('animationend', function(event) {
        $(this).remove();
        if (cpl) {
            cpl.remove();
        };
        newlogo();
    });
    if (cplnew) {
        $(cplnew).one('animationend', function(event) {
            bannerMsg1();
        });
    };
});

function newlogo(){
    // Major items
    logoTwo.classList.add('color');
    nav.classList.add('blueborder');
    foot.classList.add('Blue');
    // Homepage
    if (cplnew) {
        cplnew.classList.add('color');
    };
    // Contact page
    if (red) {
        for (var i = 0; i < red.length; i++) {
            red[i].classList.add('blue');
        };
    };
    if (deets) {
        for (x in deets) {
            if (deets[x].classList) {
                deets[x].classList.add('blue');
            };
        }
    };
    $('#GPG').css("background-color","rgb(0, 148, 129)");
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