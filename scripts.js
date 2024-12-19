let cart = [];

function addToCart(book) {
    cart.push(book);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert(book + ' has been added to the cart!');
}

function updateCartDisplay() {
    const cartCount = cart.length;
    document.getElementById("cart-count").innerText = cartCount;
}

function viewCart() {
    let cartContent = cart.map(item => item).join(', ');
    if (cartContent === '') {
        alert("Your cart is empty!");
    } else {
        alert(`Your Cart:\n\n${cartContent}`);
    }
}

function clearCart() {
    sessionStorage.removeItem('cart');
    cart = [];
    updateCartDisplay();
    alert("Your cart has been cleared!");
}

function processOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items before processing the order.");
    } else {
        alert("Your order has been processed successfully!");
        sessionStorage.removeItem('cart');
        cart = [];
        updateCartDisplay();
    }
}

function processOrderAfterEmpty() {
    if (cart.length === 0) {
        alert("Your order has already been processed or your cart is empty.");
    }
}

function viewSessionStorage() {
    alert(`Cart data before processing the order: \n${JSON.stringify(cart, null, 2)}`);
}

function viewSessionStorageAfterOrder() {
    alert(`Cart data after processing the order: \n${JSON.stringify(cart, null, 2)}`);
}

function showConfirmation(event) {
    event.preventDefault();
    const message = document.getElementById('subscribe-message');
    message.style.display = 'block';
    document.getElementById('email').value = '';
}
