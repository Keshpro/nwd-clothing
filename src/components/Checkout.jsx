import React, { useState } from 'react';
import Swal from 'sweetalert2'; // ලස්සන Alert පෙන්නන්න
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate();

  // මුළු ගාණ හදාගන්නවා
  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('Rs.', '').replace(',', ''));
    return acc + price;
  }, 0);

  // Form එක Submit කරාම වෙන දේ
  const handleCheckout = (e) => {
    e.preventDefault(); // Page එක refresh වෙන එක නවත්තනවා

    // 1. සාර්ථක බව පෙන්නන මැසේජ් එක
    Swal.fire({
      title: 'Order Placed Successfully!',
      text: 'Thank you for shopping with NWD Clothing 💖',
      icon: 'success',
      confirmButtonColor: '#e1ad01',
    }).then(() => {
      // 2. Cart එක හිස් කරනවා
      clearCart();
      // 3. ආපහු මුල් පිටුවට යවනවා
      navigate('/');
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout 🛍️</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        
        {/* වම් පැත්ත: Shipping Details Form එක */}
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
          <form onSubmit={handleCheckout} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" placeholder="First Name" className="border p-2 rounded w-full focus:outline-none focus:border-secondary" />
              <input required type="text" placeholder="Last Name" className="border p-2 rounded w-full focus:outline-none focus:border-secondary" />
            </div>
            
            <input required type="email" placeholder="Email Address" className="border p-2 rounded w-full focus:outline-none focus:border-secondary" />
            <input required type="text" placeholder="Address" className="border p-2 rounded w-full focus:outline-none focus:border-secondary" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" placeholder="City" className="border p-2 rounded w-full focus:outline-none focus:border-secondary" />
              <input required type="text" placeholder="Phone Number" className="border p-2 rounded w-full focus:outline-none focus:border-secondary" />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Payment Method</h3>
            <div className="space-y-2">
                <div className="flex items-center border p-3 rounded cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" defaultChecked className="mr-2 accent-secondary" />
                    <span>Cash On Delivery (COD)</span>
                </div>
                <div className="flex items-center border p-3 rounded cursor-pointer hover:bg-gray-50 opacity-50">
                    <input type="radio" name="payment" disabled className="mr-2" />
                    <span>Credit/Debit Card (Coming Soon)</span>
                </div>
            </div>

            <button type="submit" className="w-full bg-secondary text-white py-3 rounded font-bold hover:bg-yellow-600 transition mt-4">
              Place Order (Rs. {total.toLocaleString()})
            </button>
          </form>
        </div>

        {/* දකුණු පැත්ත: Order Summary එක */}
        <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-bold mb-4">Your Order</h3>
          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;