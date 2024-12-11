import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUsPage';
import CartPage from './pages/CartPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
