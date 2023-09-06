const pizzaNames = ["Cheese",
                    "Classic Meat",
                    "Vegan",
                    "Green Dream",
                    "Red Dream",
                    "The Date Pizza",
                    "Pineapple"];
const pizzaDetails = ["Sauce, cheese",
                      "Sauce, cheese, pepperoni, sausage",
                      "Sauce, vegetables",
                      "Pesto, cheese, bell pepper, basil",
                      "Sauce, cheese, tomato, red pepper",
                      "Sauce, cheese, onion, garlic",
                      "Sauce, cheese (no pineapple)"];

const menu = function() {``
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);

    const background = document.createElement("div");
    background.id = "background";
    container.appendChild(background);

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    background.appendChild(menuContainer);

    const menuHeader = document.createElement("h3");
    menuHeader.textContent = "Menu";
    menuContainer.appendChild(menuHeader);

    for (let i = 0; i < pizzaNames.length; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        const itemDescription = document.createElement("div");
        itemDescription.classList.add("item-description");
        const itemName = document.createElement("div");
        itemName.textContent = pizzaNames[i];
        itemName.classList.add("item-name", "big-text");
        const itemDetails = document.createElement("div");
        itemDetails.textContent = pizzaDetails[i];
        itemDetails.classList.add("item-details");
        const cart = document.createElement("div");
        cart.classList.add("cart");
        itemDescription.appendChild(itemName);
        itemDescription.appendChild(itemDetails);
        item.appendChild(itemDescription);
        item.appendChild(cart);
        menuContainer.appendChild(item)
    }

    const footer = document.createElement("div");
    footer.id = "footer";
    content.appendChild(footer);
}

export default menu;
