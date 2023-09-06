const home = function() {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
    
    const about = document.createElement("div");
    about.id = "about";
    container.appendChild(about);

    const firstText = document.createElement("div");
    firstText.textContent = "We are open now!";
    firstText.classList.add("big-text");
    about.appendChild(firstText);

    const secondText = document.createElement("div");
    secondText.textContent = "The best pizza in the city";
    secondText.classList.add("huge-text");
    about.appendChild(secondText);

    const thirdText = document.createElement("div");
    thirdText.textContent = "Now also available to order online";
    about.appendChild(thirdText);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons";
    about.appendChild(buttonsContainer);

    const reserveButton = document.createElement("button");
    reserveButton.id = "contact-button-homepage";
    const reserveText = document.createElement("span");
    reserveText.textContent = "Reserve";
    const reserveBottomText = document.createElement("span");
    reserveBottomText.textContent = "Reserve a table";
    reserveBottomText.classList.add("small-text");
    reserveButton.appendChild(reserveText);
    reserveButton.appendChild(reserveBottomText);
    buttonsContainer.appendChild(reserveButton);

    const menuButton = document.createElement("button");
    menuButton.id = "menu-button-homepage";
    const menuText = document.createElement("span");
    menuText.textContent = "Menu";
    const menuBottomText = document.createElement("span");
    menuBottomText.textContent = "View menu and order";
    menuBottomText.classList.add("small-text");
    menuButton.appendChild(menuText);
    menuButton.appendChild(menuBottomText);
    buttonsContainer.appendChild(menuButton);

    const footer = document.createElement("div");
    footer.id = "footer";
    content.appendChild(footer);
}

export default home;
