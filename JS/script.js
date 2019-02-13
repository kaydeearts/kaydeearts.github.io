//$( window ).scroll(function() {
//  $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
//    console.log("scroll!");
//});
var growWorkBox = true;
var sloganGone = false;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 20) {
        $('#introName').css("opacity", .5 - $(window).scrollTop() / 10);
        $('#introMajor').css("opacity", .5 - $(window).scrollTop() / 10);
        $('#introSlogan').animate({
            color: "blue",
            left: ".9%",
        }, 1000);
    }

    if ($(window).scrollTop() > 150) {
        $('#introSlogan').css("opacity", .5 - $(window).scrollTop() / 2);
    }
    if ($(window).scrollTop() > 350) {
        $('#introSlogan').css("opacity", 0);
    }

    if ($(window).scrollTop() > 450) {

        //        $('#technicalProjectsSub').css("opacity", $(window).scrollTop() /1000);
        $('#technicalProjectsSub').animate({
            color: "blue",
            left: "80%",
            opacity: "1",
        }, 1000);
        $('#digitalArtProjectsSub').animate({
            left: "-81%",
            opacity: "1",
        }, 1000);
        //        $('#works2').html('<div class="box"></div>');
        $('.box').css("opacity", 1);
        $('#artWorks').css("opacity", 1);
        growBox = true;
        $(".box").animate({
            width: "40%",
        }, 1000);
        $(".box").animate({
            height: "130%",
        }, 2000);        
        
        $("#artWorks").animate({
            width: "85%",
        }, 1000);
        $("#artWorks").animate({
            height: "70%",
        }, 2000);
        //        $("#designBox").animate({
        //            width: "30%",
        //        }, 1000);
        //        $("#designBox").animate({
        //            height: "200%",
        //        }, 2000);
        growWorkBox = false;
        $("#imgDesc").css("opacity", 1);
        $("#artWorks").css("opacity", 1);
        $("#imgDesc").css("opacity", 1);
        $("#experienceInformation").css("opacity", 1);
    }

    if ($(window).scrollTop() < 20) {
        $('#introName').css("opacity", 1);
        $('#introMajor').css("opacity", 1);
        $('#introSlogan').css("opacity", 1);
        //        $('#works2').css("opacity", 0);
        //        $('#technicalProjectsSub').css("opacity", 0);
        //        $('#introSlogan').animate({
        //            color: "blue",
        //            left: "-.7%",
        //            opacity: "1",
        //        }, 1000);
    }

});


$(function () {
    console.log("inside $");
    initPage();
})

function initPage() {
    initPicSlider();
    console.log("inside initpage");
}


function initPicSlider() {
    console.log("inside slider");
    //    $('.autoplay').slick({
    //        slidesToShow: 3,
    //        slidesToScroll: 1,
    //        autoplay: true,
    //        autoplaySpeed: 2000,
    //        arrows: true,
    //        adaptiveHeight: true,
    //        dots: true,
    //    });
    $('.autoplay').slick({
        dots: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 300,

        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
}





//SCROLLDOWNMENU
//$(document).ready(function () {
//    $('a[href^="#"]').on('click', function (e) {
//        e.preventDefault();
//
//        var target = this.hash;
//        var $target = $(target);
//
//        $('html, body').animate({
//            'scrollTop': $target.offset().top
//        }, 500, 'swing');
//    });
//
//    $('.autoplay').slick({
//        slidesToShow: 3,
//        slidesToScroll: 1,
//        autoplay: true,
//        autoplaySpeed: 2000,
//    });
//});

// Get the button that opens the modal
var btn = document.querySelectorAll(".modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

////////////////////////////////

window.sr = ScrollReveal({
    origin: 'bottom'
});
sr.reveal('.first', {
    duration: 3000
});
sr.reveal('.second', {
    duration: 3500
});
