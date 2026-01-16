import React from 'react';
import { FaShippingFast, FaStar, FaShieldAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-200 py-12 md:py-20 overflow-hidden">
      
      {/* 1. Background Blobs (පසුබිමේ තියෙන බොඳ වුන පාට රවුම්) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* --- Text Content (වම් පැත්ත) --- */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          
          {/* Badge */}
          <div className="inline-block bg-white px-4 py-1 rounded-full shadow-sm mb-4 border border-gray-100">
            <span className="text-secondary font-bold text-sm tracking-wide">🔥 #1 FASHION STORE IN LANKA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            Level Up Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-600">
              Style Game
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Discover the latest trends in women's fashion. 
            From casual frocks to elegant evening wear, we define the new you.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-12">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Collection
            </button>
            <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition">
              View Lookbook
            </button>
          </div>

          {/* Stats Bar (පහළින් තියෙන පොඩි විස්තර ටික) */}
          <div className="flex justify-center md:justify-start gap-8 border-t border-gray-300 pt-8">
            <div className="flex items-center gap-2">
              <FaShippingFast className="text-2xl text-secondary" />
              <div className="text-left">
                <p className="font-bold text-primary text-sm">Free Shipping</p>
                <p className="text-xs text-gray-500">On all orders</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-2xl text-secondary" />
              <div className="text-left">
                <p className="font-bold text-primary text-sm">Secure Payment</p>
                <p className="text-xs text-gray-500">100% Protected</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- Image Section (දකුණු පැත්ත) --- */}
        <div className="md:w-1/2 relative flex justify-center">
          
          {/* Main Image */}
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
              alt="Model" 
              className="w-[380px] h-[550px] object-cover rounded-t-[150px] rounded-b-[20px] shadow-2xl border-4 border-white"
            />
            
            {/* Floating Card (පාවෙන කාඩ් එක) */}
            <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full">
                <FaStar className="text-green-600" />
              </div>
              <div>
                <p className="font-bold text-gray-800">Top Rated</p>
                <p className="text-xs text-gray-500">5k+ Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Decorative Pattern (පින්තූරේ පිටිපස්සේ තියෙන තිත් රටාව) */}
          <div className="absolute top-10 -right-4 w-full h-full border-2 border-secondary rounded-t-[150px] rounded-b-[20px] -z-0 transform translate-x-4 translate-y-4"></div>

        </div>

      </div>
    </section>
  );
};

export default Hero;