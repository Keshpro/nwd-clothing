import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
// 1. Framer Motion එකෙන් 'motion' කියන කෑල්ල ගෙන්න ගන්නවා
import { motion } from 'framer-motion';

const ProductSection = ({ addToCart }) => {
  const products = [
    // ... (ඔයාගේ පරණ products ඩේටා ටික මෙතන තියෙන්න ඕන - මම ඉඩ මදි නිසා කෙටි කරා)
    { id: 1, name: "Floral Summer Frock", price: "Rs. 3,500", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1946&auto=format&fit=crop", category: "Casual" },
    { id: 2, name: "Elegant Blue Maxi", price: "Rs. 4,800", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop", category: "Party Wear" },
    { id: 3, name: "White Linen Dress", price: "Rs. 2,900", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976&auto=format&fit=crop", category: "Formal" },
    { id: 4, name: "Red Party Frock", price: "Rs. 5,500", image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1887&auto=format&fit=crop", category: "Party Wear" }
  ];

  // 2. Animation සැකසුම් (Variants)
  
  // මේක මුළු Grid එකටම අදාල සැකසුම
  const containerVariants = {
    hidden: { opacity: 0 }, // පටන් ගද්දි පේන්න නෑ
    visible: {
      opacity: 1, // පේන්න පටන් ගන්නවා
      transition: {
        staggerChildren: 0.2 // ළමයි (Cards) එකින් එක 0.2s පරතරයක් ඇතුව එන්න ඕන
      }
    }
  };

  // මේක තනි තනි Card එකට අදාල සැකසුම
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // පටන් ගද්දි පේන්න නෑ, පික්සල් 50ක් පහලින් තියෙන්නේ
    visible: { 
      opacity: 1, 
      y: 0, // පේන්න පටන් ගන්නවා, තිබ්බ තැනටම උඩට එනවා
      transition: { duration: 0.5 } // එන්න තත්පර 0.5ක් යනවා
    } 
  };

  return (
    <section className="py-16 bg-white overflow-hidden"> {/* overflow-hidden දැම්මා animation පිට පනින එක නවත්තන්න */}
      <div className="container mx-auto px-4">
        
        {/* මාතෘකාවටත් පොඩි animation එකක් දැම්මා */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-2">Trending Collection</h2>
          <p className="text-gray-500">Handpicked designs just for you</p>
        </motion.div>

        {/* 3. Grid එකට animation දාන තැන */}
        {/* සාමාන්‍ය div එක වෙනුවට motion.div පාවිච්චි කරා */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants} // උඩ හදපු සැකසුම් සම්බන්ධ කරා
          initial="hidden" // පටන් ගන්න තත්ත්වය
          whileInView="visible" // ස්ක්‍රීන් එකට ආවම වෙන තත්ත්වය (Scroll කරද්දී වැඩ කරන්න)
          viewport={{ once: true, amount: 0.2 }} // එක පාරයි වැඩ කරන්නේ, 20%ක් පෙනුනම පටන් ගන්නවා
        >
          {products.map((product) => (
            
            // 4. තනි Card එකට animation දාන තැන
            <motion.div 
              key={product.id} 
              variants={itemVariants} // තනි අයිතමයේ සැකසුම්
              className="group border border-gray-100 rounded-lg p-4 hover:shadow-xl transition duration-300 bg-white"
            >
              
              <div className="relative h-80 mb-4 overflow-hidden rounded-md">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-2 left-2 bg-secondary text-white text-xs px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-secondary font-bold text-xl mb-4">{product.price}</p>
                
                <motion.button // Button එකටත් පොඩි click animation එකක්
                  whileTap={{ scale: 0.95 }} // Click කරද්දී පොඩ්ඩක් ඇකිලෙනවා
                  onClick={() => addToCart(product)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-2 rounded hover:bg-gray-800 transition"
                >
                  <FaShoppingCart /> Add to Cart
                </motion.button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductSection;