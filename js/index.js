//MENU FUNCTIONALITY
var menuBtn = document.getElementById("menu-trigger");
var homeLink = document.getElementById("home");
var serviceLink = document.getElementById("service");
var productLink = document.getElementById("product");
var contactLink = document.getElementById("contact");
menuBtn.addEventListener("click", function menu() {
    document.getElementById("hidden-menu").classList.add("open-menu");
});
homeLink.addEventListener("click", function homepage() {
    window.location.href = "index.html";
    document.getElementById("hidden-menu").style.display = "none";
});
serviceLink.addEventListener("click", function servicepage() {
    window.location.href = "services.html";
    document.getElementById("hidden-menu").style.display = "none";
});
productLink.addEventListener("click", function productpage() {
    window.location.href = "products.html";
    document.getElementById("hidden-menu").style.display = "none";
});
contactLink.addEventListener("click", function contactpage() {
    window.location.href = "contact.html";
    document.getElementById("hidden-menu").style.display = "none";
});
