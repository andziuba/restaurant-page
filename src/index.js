import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";
import firstLoad from "./first_load";
import removeContent from "./remove_content";

// buttons on the homepage
const setupHomepageButtons = function() {
    let contactButtonHomepage = document.getElementById("contact-button-homepage");
    let menuButtonHomepage = document.getElementById("menu-button-homepage");
    contactButtonHomepage.addEventListener("click", function() {
        removeContent();
        contact();
    });

    menuButtonHomepage.addEventListener("click", function() {
        removeContent();
        menu();
    });
}

firstLoad();
setupHomepageButtons();

// header buttons
const homepageButton = document.getElementById("homepage-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

homepageButton.addEventListener("click", function () {
    removeContent();
    home();
    setupHomepageButtons();
});

menuButton.addEventListener("click", function () {
    removeContent();
    menu();
});

contactButton.addEventListener("click", function () {
    removeContent();
    contact();
});
