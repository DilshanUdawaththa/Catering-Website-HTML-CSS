// JavaScript for Toggle menu

var navLinks =document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
    document.getElementById("nav-heading").style.letterSpacing = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
    document.getElementById("nav-heading").style.letterSpacing = "4px";
}