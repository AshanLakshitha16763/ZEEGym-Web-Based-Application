'use strict';



// ---------- Add Event On Element
const addEventOnElem = function(elem, type, callback){
    if(elem.length > 1){
        for (let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    } else{
        elem.addEventListener(type, callback);
    }
}




// ---------- Navbar Toggle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavebar = function(){
    navbar.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavebar);

const closeNavbar = function (){
    navbar.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);


// ---------- Header and Back Top Btn Active

