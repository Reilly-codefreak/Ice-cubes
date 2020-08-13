//MENU FUNCTIONALITY
const menuBtn = document.getElementById("menu-trigger");
const homeLink = document.getElementById("home");
const serviceLink = document.getElementById("service");
const productLink = document.getElementById("product");
const contactLink = document.getElementById("contact");

menuBtn.addEventListener("click", function menu() {
    document.getElementById("hidden-menu").classList.add("open-menu");
})

homeLink.addEventListener("click", function homepage() {
    window.location.href = "index.html"
    document.getElementById("hidden-menu").style.display = "none";
})

serviceLink.addEventListener("click", function servicepage() {
    window.location.href = "services.html"
    document.getElementById("hidden-menu").style.display = "none";
})
productLink.addEventListener("click", function productpage() {
    window.location.href = "products.html"
    document.getElementById("hidden-menu").style.display = "none";
})
contactLink.addEventListener("click", function contactpage() {
    window.location.href = "contact.html"
    document.getElementById("hidden-menu").style.display = "none";
})