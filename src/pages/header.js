const header = function() {
    const content = document.getElementById("content");
    
    const header = document.createElement("div");
    header.id = "header";
    content.appendChild(header);
    
    const nameContainer = document.createElement("div");
    header.appendChild(nameContainer);

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Pizza Place";
    nameContainer.appendChild(restaurantName);

    const restaurantType = document.createElement("h2");
    restaurantType.textContent = "Restaurant";
    nameContainer.appendChild(restaurantType);

    const pageMenu = document.createElement("ul");
    header.appendChild(pageMenu);

    const homepage = document.createElement("li");
    homepage.id = "homepage-button";
    const homepageAnchor = document.createElement("a");
    homepageAnchor.textContent = "Home";
    homepageAnchor.setAttribute("href", "#");
    homepage.appendChild(homepageAnchor);
    pageMenu.appendChild(homepage);

    const menu = document.createElement("li");
    menu.id = "menu-button";
    const menuAnchor = document.createElement("a");
    menuAnchor.textContent = "Menu";
    menuAnchor.setAttribute("href", "#");
    menu.appendChild(menuAnchor);
    pageMenu.appendChild(menu);

    const contact = document.createElement("li");
    contact.id = "contact-button";
    const contactAnchor = document.createElement("a");
    contactAnchor.textContent = "Contact";
    contactAnchor.setAttribute("href", "#");
    contact.appendChild(contactAnchor);
    pageMenu.appendChild(contact);
}

export default header;
