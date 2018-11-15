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
        
        slidesToShow: 3,
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
            btn[i].onclick = function(e) {
                e.preventDefault();
                modal = document.querySelector(e.target.getAttribute("href"));
                modal.style.display = "block";
            }
        }

        // When the user clicks on <span> (x), close the modal
        for (var i = 0; i < spans.length; i++) {
            spans[i].onclick = function() {
                for (var index in modals) {
                    if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
                }
            }
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                for (var index in modals) {
                    if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
                }
            }
        }