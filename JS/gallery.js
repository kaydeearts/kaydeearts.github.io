//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//    showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//    showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    if (n > slides.length) {
//        slideIndex = 1
//    }
//    if (n < 1) {
//        slideIndex = slides.length
//    }
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex - 1].style.display = "block";
//    dots[slideIndex - 1].className += " active";
//}


//
//EUREKA
var modal = document.getElementsByClassName('EurekaModal');
var btn = document.getElementsByClassName("Eureka");
getModal();

////SBUHacks
//var modal = document.getElementById('SBUHacksModal');
//var btn = document.getElementById("SBUHacks");
//getModal();
//
////Linda Her
//var modal = document.getElementById('LindaHerModal');
//var btn = document.getElementById("LindaHer");
//getModal();
//
//OCEAN
var modal = document.getElementById('OceanModal');
var btn = document.getElementById("Ocean");
getModal();
//
////ASTRO
//var modal = document.getElementById('AstroModal');
//var btn = document.getElementById("Astro");
//getModal();
//
////MOUNTAINS
//var modal = document.getElementById('MountainsModal');
//var btn = document.getElementById("Mountains");
//getModal();
//
////SHIP
//var modal = document.getElementById('ShipModal');
//var btn = document.getElementById("Ship");
//getModal();
//
////SUNSET
//var modal = document.getElementById('SunsetModal');
//var btn = document.getElementById("Sunset");
//getModal();
//
////STORMCLOUDS
//var modal = document.getElementById('StormCloudsModal');
//var btn = document.getElementById("StormClouds");
//getModal();
//
////SKETCH
//var modal = document.getElementById('SketchModal');
//var btn = document.getElementById("Sketch");
//getModal();
//
////CAVERN
//var modal = document.getElementById('CavernModal');
//var btn = document.getElementById("Cavern");
//getModal();
//
////SUNSET
//var modal = document.getElementById('SunsetModal');
//var btn = document.getElementById("Sunset");
//getModal();
//
////DEER
//var modal = document.getElementById('DeerModal');
//var btn = document.getElementById("Deer");
//getModal();
//
//
////STATUE
//var modal = document.getElementById('StatueModal');
//var btn = document.getElementById("Statue");
//getModal();


function getModal() {
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}




