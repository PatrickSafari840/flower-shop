import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();

    // Fetch product details using the id

    return (
        <div>
            <h1>Product Name</h1>
            <img src="product-image-url" alt="Product" />
            <p>Description of the product.</p>
            <p>Price: $XX.XX</p>
            <button>Add to Cart</button>
            <section>
                <h2>Reviews</h2>
                {/* Add your reviews here */}
            </section>
        </div>
    );
}

export default ProductPage;
