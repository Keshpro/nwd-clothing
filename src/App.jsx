import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

// අලුත් Components Import කරා
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart! 🛍️`);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="bg-white min-h-screen font-sans flex flex-col">
        <Navbar cartCount={cart.length} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Categories /> {/* 1. වර්ග පෙන්නන කොටස */}
                <ProductSection addToCart={addToCart} />
                <Testimonials /> {/* 2. Reviews කොටස */}
                <Newsletter />   {/* 3. Email කොටස */}
              </>
            } />

            <Route path="/cart" element={
              <Cart cart={cart} removeFromCart={removeFromCart} />
            } />
            
            <Route path="/checkout" element={
              <Checkout cart={cart} clearCart={clearCart} />
            } />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App