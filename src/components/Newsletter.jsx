import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Fashion Community</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Subscribe to get updates on new arrivals, special offers and receive <span className="text-secondary font-bold">10% OFF</span> your first order!
        </p>

        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary w-full"
          />
          <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition shadow-lg whitespace-nowrap">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;