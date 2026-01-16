import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold tracking-wider mb-4">
              NWD<span className="text-secondary">CLOTHING</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We bring the latest fashion trends to Sri Lanka. 
              Quality and elegance in every stitch. Shop with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-secondary cursor-pointer transition">Home</li>
              <li className="hover:text-secondary cursor-pointer transition">Shop All</li>
              <li className="hover:text-secondary cursor-pointer transition">New Arrivals</li>
              <li className="hover:text-secondary cursor-pointer transition">Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 No. 123, Matale</li>
              <li>📞 +94 77 123 4567</li>
              <li>✉️ hello@nwdclothing.lk</li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition"><FaFacebookF /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition"><FaInstagram /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary transition"><FaWhatsapp /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Developer Section Included) */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} NWD Clothing. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <span>Developed with  by</span>
            <a 
              href="#" 
              className="text-secondary font-bold hover:text-white transition cursor-pointer"
            >
              Keshan Panditharathna
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;