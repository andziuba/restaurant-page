import mapPin from "../assets/icons/map_pin.svg";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";

const contact = function() {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);

    const background = document.createElement("div");
    background.id = "background";
    container.appendChild(background);

    const contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";
    background.appendChild(contactContainer);

    const contactHeader = document.createElement("h3");
    contactHeader.textContent = "Contact";
    contactContainer.appendChild(contactHeader);

    const name = document.createElement("div");
    name.textContent = "Pizza Place";
    name.classList.add("big-text");
    name.style.fontWeight = "bold";
    name.style.paddingTop = "20px";
    contactContainer.appendChild(name);

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("info");
    contactContainer.appendChild(addressContainer);

    const mapPinIcon = new Image();
    mapPinIcon.src = mapPin;
    addressContainer.appendChild(mapPinIcon);

    const restaurantAddress = document.createElement("div");
    restaurantAddress.textContent = "Pizza Street 123, Pizza City";
    addressContainer.appendChild(restaurantAddress);

    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("info");
    contactContainer.appendChild(phoneContainer);

    const phoneIcon = new Image();
    phoneIcon.src = phone;
    phoneContainer.appendChild(phoneIcon);

    const restaurantPhone = document.createElement("div");
    restaurantPhone.textContent = "123 456 789";
    phoneContainer.appendChild(restaurantPhone);

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("info");
    contactContainer.appendChild(emailContainer);

    const emailIcon = new Image();
    emailIcon.src = email;
    emailContainer.appendChild(emailIcon);

    const restaurantEmail = document.createElement("div");
    restaurantEmail.textContent = "pizzaplace@totallynotfake.com";
    emailContainer.appendChild(restaurantEmail);

    const footer = document.createElement("div");
    footer.id = "footer";
    content.appendChild(footer);
}

export default contact;
