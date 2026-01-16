import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Casual Wear",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      itemCount: "120+ Items"
    },
    {
      id: 2,
      title: "Formal Elegance",
      image: "https://images.unsplash.com/photo-1548550130-1b796642d992?q=80&w=1000&auto=format&fit=crop",
      itemCount: "85+ Items"
    },
    {
      id: 3,
      title: "Party Glam",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
      itemCount: "50+ Items"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Shop by Category</h2>
          <p className="text-gray-500">Find the perfect style for any occasion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <motion.div 
              key={cat.id}
              whileHover={{ y: -10 }} // මවුස් එක ගෙනිච්චම උඩට යනවා
              className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            >
              {/* Image */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              
              {/* Overlay (කළු පාට සෙවනැල්ල) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-1">{cat.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{cat.itemCount}</p>
                <button className="w-fit text-sm font-semibold border-b-2 border-secondary pb-1 hover:text-secondary transition">
                  Explore Now &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;