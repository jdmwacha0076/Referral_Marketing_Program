// ProductsPage.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CommonLayout from './CommonLayout';
import '../styles.css';


const ProductsPage = () => {

    const products = [

        { id: 1, name: 'Product 1', price: 20 },
        { id: 2, name: 'Product 2', price: 30 },
        { id: 3, name: 'Product 3', price: 25 },
        { id: 4, name: 'Product 4', price: 15 },
        { id: 5, name: 'Product 5', price: 40 },
        { id: 6, name: 'Product 6', price: 22 },
        { id: 7, name: 'Product 7', price: 18 },
        { id: 8, name: 'Product 8', price: 28 },
        { id: 9, name: 'Product 9', price: 35 },
        { id: 10, name: 'Product 10', price: 26 },
        { id: 11, name: 'Product 11', price: 32 },
        { id: 12, name: 'Product 12', price: 19 },
    ];

    const handlePurchasePaypal = () => {
        // Implement PayPal purchase logic
        console.log('Processing PayPal purchase...');
    };

    const handlePurchaseReferralCode = () => {
        // Implement referral code purchase logic
        console.log('Processing purchase with referral code...');
    };

    return (
        <CommonLayout>

            <div className="product-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <FaShoppingCart size={40} className="product-icon" />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <div className="product-buttons">
                            <button onClick={handlePurchasePaypal}>Purchase with PayPal</button>
                            <button onClick={handlePurchaseReferralCode}>Purchase with Referral Code</button>
                        </div>
                    </div>
                ))}
            </div>
        </CommonLayout>
    );
};

export default ProductsPage;
