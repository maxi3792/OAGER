/**
 * @fileoverview Interactividad Web OAGER
 * @version 0.1
 * @author Juanjo Alonso Sánchez <jj.alonso@esla.com>
 * @copyright cgb@esla.com
 */

//__Menú responsive
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const btnMenuResponsive = document.querySelector(".header__nav-logo .fa-bars");
const btnCloseResponsive = document.querySelector(".header__menu-navegacion-responsive .fa-times");
const cabeceraMenuNav = document.querySelector(".header__menu-navegacion-responsive");
const menuNav = document.querySelector(".header__menu-navegacion");
const itemMenuNav = document.querySelectorAll(".header__nav-item");
const enlaceMenuNav = document.querySelectorAll(".header__nav-item a");
const itemMenuNavResponsive = document.querySelectorAll(".header__nav-item-responsive");
btnMenuResponsive.addEventListener("click",function(){
    body.classList.add("noscroll");
    nav.classList.add("aparecer-menu");
    nav.classList.add("column");
    menuNav.classList.add("column");
    itemMenuNavResponsive.forEach(
        function(item) {
            item.classList.add("visible");
            item.classList.add("padding-tb");
            item.classList.add("uppercase");
            item.classList.add("font-size-max");
        }
    );
    itemMenuNav.forEach(
        function(item) {
            item.classList.add("no-margin");
            item.classList.add("border-inf");
        }
    );
    enlaceMenuNav.forEach(
        function(enlace) {
            enlace.classList.add("no-margin");
        }
    );    
    cabeceraMenuNav.classList.add("visible");    
});
btnCloseResponsive.addEventListener("click",function(){
    body.classList.remove("noscroll");
    nav.classList.remove("aparecer-menu");
    nav.classList.remove("column");
    menuNav.classList.remove("column");
    itemMenuNavResponsive.forEach(
        function(item) {
            item.classList.remove("visible");
            item.classList.remove("padding-tb");
            item.classList.remove("uppercase");
            item.classList.remove("font-size-max");
        }
    );
    itemMenuNav.forEach(
        function(item) {
            item.classList.remove("no-margin");
            item.classList.remove("border-inf");
        }
    );
    enlaceMenuNav.forEach(
        function(enlace) {
            enlace.classList.remove("no-margin");
        }
    );   
    cabeceraMenuNav.classList.remove("visible");
});
