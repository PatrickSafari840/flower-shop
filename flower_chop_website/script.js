// Simple cart functionality using localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart() {
    const product = {
        name: 'Product Name',
        price: 19.99,
        quantity: 1
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

function loadCart() {
    const cartList = document.getElementById('cart-list');
    const totalAmount = document.getElementById('total-amount');
    let total = 0;

    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });

    totalAmount.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Thank you for your purchase!');
    loadCart();
}

// Load cart items on cart page
if (document.getElementById('cart-list')) {
    loadCart();
}
