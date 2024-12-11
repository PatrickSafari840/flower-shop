import React from 'react';

function HomePage() {
    return (
        <div>
            <header>
                <h1>Welcome to Our Shop</h1>
                <p>Your one-stop shop for all things great!</p>
                <button>Shop Now</button>
            </header>
            <section>
                <h2>Product Categories</h2>
                {/* Add your product categories here */}
            </section>
            <section>
                <h2>Featured Products</h2>
                {/* Add your featured products here */}
            </section>
            <section>
                <h2>Testimonials</h2>
                {/* Add your testimonials here */}
            </section>
        </div>
    );
}

export default HomePage;
