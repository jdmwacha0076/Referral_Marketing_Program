import React, { useState } from 'react';
import CommonLayout from './CommonLayout';
import '../styless.css';

const agriculturalProducts = [
  {
    id: 1,
    name: 'Maryan Oil Perfume',
    type: 'Cosmetics',
    price: 45000,
    description: 'Indulge in the luxurious scent of Maryan Oil Perfume. This exquisite fragrance is carefully crafted to captivate your senses and leave a lasting impression. The perfume is perfect for any occasion, adding a touch of elegance to your presence. Elevate your personal style with Maryan Oil Perfume and embrace the enchanting essence it brings.',
    image: 'oil.webp',
  },  
  {
    id: 2,
    name: 'Pixel Camera',
    type: 'Electronics',
    price: 765000,
    description: 'Unleash your creativity with the cutting-edge Pixel Camera. Designed for photography enthusiasts and professionals alike, this camera delivers stunning image quality and exceptional performance. Capture every moment with precision and clarity, whether its a scenic landscape or a vibrant cityscape. The Pixel Camera is equipped with advanced features to elevate your photography experience, making it the perfect companion for capturing life\'s unforgettable moments.',
    image: 'camera.jpeg',
  },  
  {
    id: 3,
    name: 'Headphones',
    type: 'Electronics',
    price: 55000,
    description: 'Immerse yourself in the world of sound with our premium Headphones. Whether you are a music lover, gamer, or simply enjoy the clarity of audio, these headphones deliver an exceptional listening experience. Designed for comfort and style, they provide a perfect fit for extended wear. Enjoy crisp highs, deep lows, and immersive sound quality that enhances your favorite music, movies, and games. Elevate your audio experience with our state-of-the-art Headphones.',
    image: 'earphones.webp',
  }, 
  {
    id: 4,
    name: 'Laptop',
    type: 'Electronics',
    price: 3250000,
    description: 'Experience unparalleled performance and versatility with our advanced Laptop. Engineered for productivity and entertainment, this sleek device combines cutting-edge technology with a stylish design. Whether youre a professional on the go or a creative mind seeking powerful computing, our Laptop delivers seamless multitasking, stunning visuals, and a superior user experience. Elevate your work and entertainment with the power and portability of our premium Laptop.',
    image: 'laptop.jpeg',
  },  
  {
    id: 5,
    name: 'Screen/Display',
    type: 'Electronics',
    price: 450000,
    description: 'Immerse yourself in crystal-clear visuals with our advanced Screen/Display. Designed for unparalleled clarity and vibrant colors, this electronics marvel elevates your viewing experience to new heights. Whether youre indulging in your favorite movies, gaming with intensity, or working on creative projects, our high-quality screen ensures every detail is rendered with precision. Enhance your digital world with the brilliance and sharpness of our cutting-edge Screen/Display.',
    image: 'screen.webp',
  },  
  {
    id: 6,
    name: 'T-Shirt',
    type: 'Fashion',
    price: 22000,
    description: 'Elevate your style with our comfortable and trendy T-Shirt. Crafted with care, this fashion essential offers a perfect blend of quality, comfort, and style. The breathable fabric ensures a relaxed fit, making it ideal for any casual occasion. Express yourself with the unique design and vibrant colors of our T-Shirt. Whether youre out for a casual day or looking to make a fashion statement, our T-Shirt is the perfect choice for a versatile and stylish wardrobe.',
    image: 'tshirt.webp',
  },  
  {
    id: 7,
    name: 'Trouser',
    type: 'Fashion',
    price: 25000,
    description: 'Step into style and comfort with our fashionable Trouser. Meticulously crafted for a perfect fit and lasting durability, these trousers redefine your wardrobe essentials. Whether youre dressing up for a formal occasion or adding a touch of sophistication to your everyday look, our trousers offer a versatile and elegant solution. Embrace the combination of style and functionality with our premium Trouser, tailored to suit your modern lifestyle.',
    image: 'trouser.webp',
  },  
  {
    id: 8,
    name: 'Trouser Belt',
    type: 'Fashion',
    price: 15000,
    description: 'Complete your stylish look with our sleek Trouser Belt. Crafted for both fashion and functionality, this accessory adds the perfect finishing touch to your outfits. Made from high-quality materials, our Trouser Belt ensures durability and long-lasting wear. Whether youre dressing up for a formal event or enhancing your casual ensemble, this versatile belt offers a timeless and sophisticated solution. Elevate your fashion game with the subtle charm of our Trouser Belt.',
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
            <p>Price: Tsh:{product.price.toFixed(0)}</p>
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
              <label htmlFor="paymentAmount">Enter Referral Code to Purchase {selectedProduct.name}:</label>
              <input
                type="text"
                id="paymentAmount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                required
              />
              <div className="form-buttons">
                <button type="submit">Purchase Product</button>
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