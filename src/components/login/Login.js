// src/components/login/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {

    try {

      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful
        console.log('Login successful!');
        // Navigate to the home page
        navigate('/home');
      } else {
        // Login failed
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container">
      <h2>Login to Referral Marketing Program</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/">Register</Link>
      </p>
    </div>
  );
};

export default Login;
