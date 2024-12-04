const cartItemsElement = document.getElementById('cart-items')
let cartItemsList = getCartItemsFromLocalStorage();

if (cartItemsList.length === 0){
    cartItemsElement.innerHTML = "No pastries here :/";
} 
else {
    // Display selected items in a list//
    // create an element to list a single item in the array at a time//
    for(let item of cartItemsList){
        let pastry = document.createElement('li');
        pastry.classList.add('border');
        pastry.classList.add('rounded');
        pastry.classList.add('my-1');
        // { itemName: "BANNANAN MUFFIN", description: "Morfin" }
        pastry.textContent = item.itemName;
        cartItemsElement.appendChild(pastry)
    }
    // Add the created elements to the container cartItemsElement//
}