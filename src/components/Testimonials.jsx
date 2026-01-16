import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sashini Perera",
      comment: "Absolutely love the quality! The frock fits perfectly and delivery was super fast.",
      rating: 5
    },
    {
      id: 2,
      name: "Amaya De Silva",
      comment: "Great collection for office wear. Highly recommended for Sri Lankan ladies!",
      rating: 5
    },
    {
      id: 3,
      name: "Dilshan Kumar",
      comment: "Bought a gift for my wife. She loved the packaging and the design. Thank you NWD!",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Happy Customers ❤️</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 relative">
              <FaQuoteLeft className="text-4xl text-secondary/20 absolute top-6 right-6" />
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{review.comment}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-xs text-gray-400">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;