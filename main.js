/////////////////////////////////////////////////////////////
//////////navbar active factive link functionality//////////
/////////////////////////////////////////////////////////////
let humburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");
let navLinksItems = document.querySelectorAll(".nav-links li a");


navLinksItems.forEach(link => {

    link.addEventListener("click", function () {

        navLinksItems.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

        navLinks.classList.remove("open");
        humburger.querySelector(".fa-bars").style.display="block";
        humburger.querySelector(".fa-xmark").style.display="none";

    });


});


//////////////////////////////////////////////////////
///////////// hamburger menu functionality///////////
//////////////////////////////////////////////////////
humburger.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {

        humburger.querySelector(".fa-bars").style.display = "none";

        humburger.querySelector(".fa-xmark").style.display = "block";

    } else {

        humburger.querySelector(".fa-bars").style.display = "block";

        humburger.querySelector(".fa-xmark").style.display = "none";

    }

});


//////////////////////////////////////////////////////
///////////// hamburger menu functionality close///////
//////////////////////////////////////////////////////



///////////////////////////////////////////////////////
////////////////// hero slider functionality start//////
///////////////////////////////////////////////////////

let images = [

    "Hero1.webp",

    "Hero2.webp",

    "Hero3.webp"

];

let index = 0;

let slide = document.getElementById("slide");

let dots = document.querySelectorAll(".dot");

let timer;


function changeImages() {

    index = (index + 1) % images.length;

    slide.src = images[index];

    dots.forEach(dot => dot.classList.remove("active"));

    dots[index].classList.add("active");

}


dots.forEach((dot, dotIndex) => {

    dot.addEventListener("click", function () {

        index = dotIndex;

        slide.src = images[index];

        dots.forEach(dot => {

            dot.classList.remove("active");

        });

        dot.classList.add("active");

        clearInterval(timer);

        timer = setInterval(changeImages, 10000);

    });

});


timer = setInterval(changeImages, 10000);

////////////////////////////////////////////////////////////////////////
/////////////////// hero slider functionality close//////////////////////
///////////////////////////////////////////////////////////////////////


