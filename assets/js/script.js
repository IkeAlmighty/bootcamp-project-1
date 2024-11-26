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

function openModal(description) {
    const modal = document.getElementById("modal");

    // set classes for modal
    modal.children[0].textContent = description;
}
