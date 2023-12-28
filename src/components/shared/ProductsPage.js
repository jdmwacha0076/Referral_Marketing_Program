import React, { useState } from 'react';
import CommonLayout from './CommonLayout';
import '../styless.css';

const agriculturalProducts = [
  {
    id: 1,
    name: 'Wheat',
    type: 'Grain',
    price: 2.5,
    description: 'High-quality wheat harvested in Farmville. Perfect for baking and cooking.',
    image: 'oil.webp',
  },
  {
    id: 2,
    name: 'Wheat',
    type: 'Grain',
    price: 2.5,
    description: 'High-quality wheat harvested in Farmville. Perfect for baking and cooking.',
    image: 'camera.jpeg',
  },
  {
    id: 3,
    name: 'Wheat',
    type: 'Grain',
    price: 2.5,
    description: 'High-quality wheat harvested in Farmville. Perfect for baking and cooking.',
    image: 'earphones.webp',
  },
  {
    id: 4,
    name: 'Wheat',
    type: 'Grain',
    price: 2.5,
    description: 'High-quality wheat harvested in Farmville. Perfect for baking and cooking.',
    image: 'laptop.jpeg',
  },
  {
    id: 5,
    name: 'Wheat',
    type: 'Grain',
    price: 2.5,
    description: 'High-quality wheat harvested in Farmville. Perfect for baking and cooking.',
    image: 'screen.webp',
  },
  {
    id: 6,
    name: 'Apples',
    type: 'Fruit',
    price: 3.0,
    description: 'Fresh and juicy apples grown in Green Fields. Ideal for snacks and desserts.',
    image: 'tshirt.webp',
  },
  {
    id: 7,
    name: 'Apples',
    type: 'Fruit',
    price: 3.0,
    description: 'Fresh and juicy apples grown in Green Fields. Ideal for snacks and desserts.',
    image: 'trouser.webp',
  },
  {
    id: 8,
    name: 'Apples',
    type: 'Fruit',
    price: 3.0,
    description: 'Fresh and juicy apples grown in Green Fields. Ideal for snacks and desserts.',
    image: 'belt.jpeg',
  },
];

const AgriculturePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePurchasePaypal = () => {
    // Implement PayPal API integration for payment
    console.log('Processing PayPal purchase for:', selectedProduct, 'Amount:', paymentAmount);
    // Reset state after processing
    setShowPaymentForm(false);
    setPaymentAmount('');
  };

  return (
    <CommonLayout>
      <div className="agricultural-product-container">
        {agriculturalProducts.map((product) => (
          <div key={product.id} className="agricultural-product-card">
            <img
              src={process.env.PUBLIC_URL + `/images/${product.image}`}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>Type: {product.type}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
            <div className="product-buttons">
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setShowPaymentForm(true);
                }}
              >
                Purchase with Code or Link
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPaymentForm && (
        <div className="overlay">
          <div className="modal">
            <form
              className="payment-form"
              onSubmit={(e) => {
                e.preventDefault();
                handlePurchasePaypal();
              }}
            >
              <label htmlFor="paymentAmount">Enter Amount for {selectedProduct.name}: $</label>
              <input
                type="text"
                id="paymentAmount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                required
              />
              <div className="form-buttons">
                <button type="submit">Submit Payment</button>
                <button onClick={() => setShowPaymentForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </CommonLayout>
  );
};

export default AgriculturePage;