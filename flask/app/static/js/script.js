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

if (slide3) {
    var BrandSlides = []
    var bannerSlideShow = document.getElementsByClassName('bannerSlideShow');
    for (var i = 0; i < bannerSlideShow.length; i++) {
        BrandSlides.push(bannerSlideShow[i]);
    };
}

var shrimp = document.getElementsByClassName('grindexshrimp')[0];
var brandbanner = document.getElementById('brandbanner');

// Pdf Presentation

// loading pdf
var pdfSource = document.getElementById('my_pdf_viewer');

var pdfState = {
    pdf: null,
    currentPage: 1,
    zoom: 1
};

function render() {
    pdfState.pdf.getPage(pdfState.currentPage).then((page) => {
        var canvas = document.getElementById('pdf_renderer');
        var ctx = canvas.getContext('2d');
        var viewport = page.getViewport(pdfState.zoom);
        canvas.height= viewport.height;
        canvas.width= viewport.width;
        page.render({
            canvasContext: ctx,
            viewport: viewport
        })
    })
}

if (pdfSource) {

    pdfPath = pdfSource.dataset['target'];

    pdfjsLib.getDocument(pdfPath).then((pdf) => {
        pdfState.pdf = pdf;
        render();
    })
}

// Page changes
var backpage = document.getElementById('go_previous')

if (backpage) {
    backpage.addEventListener('click', (e) => {
    if(pdfState.pdf == null || pdfState.currentPage == 1) return;
    pdfState.currentPage -= 1;
    document.getElementById('current_page').value = pdfState.currentPage;
    render();
    });
};

var nextpage = document.getElementById('go_next')

if (nextpage) {
    nextpage.addEventListener('click', (e) => {
    if(pdfState.pdf == null || pdfState.currentPage >= pdfState.pdf._pdfInfo.numPages) return;
    pdfState.currentPage += 1;
    document.getElementById('current_page').value = pdfState.currentPage;
    render();
    });
};

var currentpage = document.getElementById('current_page')

if (currentpage) {
    currentpage.addEventListener('keypress', (e) => {
    if(pdfState.pdf == null) return;
    
    var code = e.key || e.which
    
    if (code=='Enter'){
        var desiredPage = document.getElementById('current_page').valueAsNumber;

        if(desiredPage >= 1 && desiredPage<= pdfState.pdf._pdfInfo.numPages) {
            pdfState.currentPage = desiredPage;
            document.getElementById('current_page').value = desiredPage;
            render();
        } 
    }
    });
};

// Contact

var red = document.getElementsByClassName('red');
// let slide3imgs = slide3.getElementsByTagName('img');
// var links = [].concat([].slice.call(document.getElementsByClassName('salesformat')),[].slice.call(document.getElementsByClassName('officeformat')));

var deets = document.getElementsByClassName('CTAs');

// timer for slideshow
var interval = 3000;

$(document).ready(function() {

    // Navigation Popup
    $("#menupop").click(function() {
        $(".menu-links").toggleClass("show");
    });

    // primary pageload trigger
    
    $(logo).one('animationend', function(event) {
        $(this).remove();
        if (cpl) {
            cpl.remove();
        };
        // captures nav, foot, red, deets, GPG objects to render new styles
        newlogo();
    });
    
    // triggers homepage animations on company logo
    // if (cplnew) {
    //     $(cplnew).one('animationend', function(event) {
    //         bannerMsg1();
    //     });
    // };

    $("a[href='/brands']").on('click', function(e) {
        if (screen.width < 900) {
            e.preventDefault();
            let sub = $("#brand-subs")
            if (sub.css('display') == 'flex') {
                sub.css('display','none')
            } else {
                sub.css('display','flex')
            }
        }
    });
    
});

function newlogo(){
    // Major items
    logoTwo.classList.add('color');
    nav.classList.add('blueborder');
    foot.classList.add('Blue');
    // Homepage
    
    if (cplnew) {
        cplnew.classList.add('color');
    }

    // if (cplnew) {
    //     cplnew.classList.add('color');
    //     $(slide1).hide();
    //     bannerMsg1();
    // };
    // if (shrimp) {
    //     $(shrimp).hide();
    //     $(brandbanner).css('display','grid');
    // }
    
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

    // handbook page
    $('#GPG').css("background-color","#2ebf1a");
}

// Banner slides

function bannerMsg1() {
    $(slide2).css('display','flex');
    var interval = 3000;
    setTimeout(function(){
        bannerMsg2();
    }, interval)
};

function bannerMsg2() {
    $(slide2).hide();
    $(slide3).css('display', 'block') 
    var interval = 2500;
    p = Promise.resolve(); 
    for (let i=0; i<BrandSlides.length;i++){
        p = p.then(_ => new Promise(resolve =>
            setTimeout(function(){
                bannerMsg3(i)
                setTimeout(function(){
                    if(i==7){
                        resolve();
                    } else {
                        $(BrandSlides[i]).hide();
                        resolve();
                    }
                }, interval)
            }, 0.1)
            ));
    };
};

function bannerMsg3(k) {
    $(BrandSlides[k]).show();
};

