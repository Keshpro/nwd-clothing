import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // 1. Link import කරා

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold tracking-wider">
          <span className="text-primary">NWD</span>
          <span className="text-secondary">CLOTHING</span>
        </Link>

        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          {/* a tag වෙනුවට Link පාවිච්චි කරා */}
          <li><Link to="/" className="hover:text-secondary cursor-pointer transition">Home</Link></li>
          <li className="hover:text-secondary cursor-pointer transition">Shop</li>
          <li className="hover:text-secondary cursor-pointer transition">New Arrivals</li>
          <li className="hover:text-secondary cursor-pointer transition">Contact</li>
        </ul>

        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-secondary text-xl transition">
            <FaUser />
          </button>
          
          {/* Cart Icon එක Link එකක් කළා */}
          <Link to="/cart" className="relative cursor-pointer">
            <FaShoppingCart className="text-gray-600 hover:text-secondary text-xl transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;