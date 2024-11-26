function getCartItemsFromLocalStorage() {
    // returns a list of cart objects, or an empty list if the cart list hasn't been set in localStorage
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

function addCartItemToLocalStorage(pastryOrTeaItem) {
    let cartItems = getCartItemsFromLocalStorage();

    // use the spread operator to add the new item to the list
    cartItems = [...cartItems, pastryOrTeaItem];

    // store new list in localStorage under 'cart', overwriting the old list if it exists.
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

// get each button viewing item in modal
const popoutButtons = document.getElementsByClassName("show-item-button");

const pastriesData = {
    "Pastry 1": { description: "pastry 1 descrip" },
};

for (button of popoutButtons) {
    button.addEventListener("click", function (event) {
        const key = event.target.parentElement.children[0].textContent;
        const description = pastriesData[key].description;

        document.getElementById("modal-description").textContent = description;
        document.getElementById("modal-name").textContent = key;
    });
}
