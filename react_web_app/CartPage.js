import React from 'react';

function CartPage() {
    // Manage cart items in state

    const handlePurchase = () => {
        alert("Thank you for your purchase!");
        // Handle purchase logic here
    };

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {/* Map through cart items and display them */}
            </ul>
            <p>Total: $XX.XX</p>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    );
}

export default CartPage;
