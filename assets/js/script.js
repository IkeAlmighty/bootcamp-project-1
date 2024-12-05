let currentCartItem = {};
const modalAddItemButton = document.getElementById("add-item-button");

// get each button viewing item in modal
const popoutButtons = document.getElementsByClassName("show-item-button");

// add an event listener for each button to propery display the modal onclick
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

function getCartItemsFromLocalStorage() {
    // returns a list of cart objects, or an empty list if the cart list hasn't been set in localStorage
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

// adds the object stored in global currentCartItem to localStorage
function addCurrentCartItemToLocalStorage() {
    let cartItems = getCartItemsFromLocalStorage();

    // use the spread operator to add the new item to the list
    cartItems = [...cartItems, currentCartItem];

    // store new list in localStorage under 'cart', overwriting the old list if it exists.
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function updateVisualDisplay() {
    // update the cart amount on the visual display
    let cartAmount = document.getElementById("cart-amount");
    let cartItems = getCartItemsFromLocalStorage();
    let howLong = cartItems.length;
    cartAmount.innerHTML = howLong;
}

// add event listener to modal to add the current cart item to localstorage:
modalAddItemButton.addEventListener("click", function () {
    addCurrentCartItemToLocalStorage();
    modalAddItemButton.style.display = "none";

    updateVisualDisplay();
});

// initialize the cart size visual display to the right number
updateVisualDisplay();
