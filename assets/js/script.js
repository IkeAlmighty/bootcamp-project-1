function getCartItemsFromLocalStorage() {
    // returns a list of cart objects, or an empty list if the cart list hasn't been set in localStorage
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

function addCurrentCartItemToLocalStorage() {
    let cartItems = getCartItemsFromLocalStorage();

    // use the spread operator to add the new item to the list
    cartItems = [...cartItems, currentCartItem];

    // store new list in localStorage under 'cart', overwriting the old list if it exists.
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

let currentCartItem = {};

// get each button viewing item in modal
const popoutButtons = document.getElementsByClassName("show-item-button");

// add an event listener for each button
for (button of popoutButtons) {
    button.addEventListener("click", function (event) {
        // make the modal button visible again:
        modalAddItemButton.style.display = "inline-block";

        const itemName = event.target.parentElement.children[0].textContent;
        const description = event.target.parentElement.children[1].textContent;

        const imgElement = event.target.parentElement.parentElement.children[0];
        const src = imgElement.getAttribute("src");

        currentCartItem = { itemName, description };

        document.getElementById("modal-description").textContent = description;
        document.getElementById("modal-name").textContent = itemName;
        document.getElementById("modal-image").setAttribute("src", src);
    });
}

const modalAddItemButton = document.getElementById("add-item-button");
// add event listener to modal to add the current cart item to localstorage:
modalAddItemButton.addEventListener("click", function () {
    addCurrentCartItemToLocalStorage();
    modalAddItemButton.style.display = "none";
});
