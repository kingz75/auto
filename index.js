// Function to add items to cart (stored in localStorage)
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { name: productName, price: productPrice };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

// Function to view items in the cart
function viewCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Cart:", cart);
}

S

