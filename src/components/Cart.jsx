import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {

    // මුළු එකතුව (Total) හදන ගණිතය
    const total = cart.reduce((acc, item) => {
        // "Rs. 3,500" වගේ තියෙන එකෙන් "Rs." සහ "," අයින් කරලා නම්බර් එකක් කරනවා
        const price = parseFloat(item.price.replace('Rs.', '').replace(',', ''));
        return acc + price;
    }, 0);

    return (
        <div className="container mx-auto px-4 py-8 min-h-[60vh]">
            <h2 className="text-3xl font-bold mb-8">Your Shopping Cart</h2>

            {cart.length === 0 ? (
                // Cart එක හිස් නම් මේක පෙන්නනවා
                <div className="text-center py-10">
                    <p className="text-gray-500 text-xl mb-4">Your cart is empty 😔</p>
                    <Link to="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition">
                        Start Shopping
                    </Link>
                </div>
            ) : (
                // Cart එකේ බඩු තියෙනවා නම් මේක පෙන්නනවා
                <div className="flex flex-col md:flex-row gap-8">

                    {/* බඩු ලිස්ට් එක (Left Side) */}
                    <div className="md:w-2/3 space-y-4">
                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-gray-500">{item.category}</p>
                                        <p className="text-secondary font-bold">{item.price}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-red-500 hover:text-red-700 p-2"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* බිල් එක (Right Side) */}
                    <div className="md:w-1/3">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>Rs. {total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between text-xl font-bold mb-6">
                                <span>Total</span>
                                <span>Rs. {total.toLocaleString()}</span>
                            </div>
                            <Link to="/checkout" className="block w-full text-center bg-secondary text-white py-3 rounded font-bold hover:bg-yellow-600 transition">
                                Checkout Now
                            </Link>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Cart;