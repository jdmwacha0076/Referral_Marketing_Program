// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/registration/Registration';
import Login from './components/login/Login';
import CommonLayout from './components/shared/CommonLayout';
import ProductsPage from './components/shared/ProductsPage';
import Home from './components/shared/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CommonLayout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
