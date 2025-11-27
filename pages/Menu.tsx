import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

const categories: Category[] = ['Antipasti', 'Pasta', 'Main Courses', 'Seafood', 'Desserts', 'Wines'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Antipasti');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0] // Smooth, luxury easing
      } 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cream-bg"
    >
      <div className="bg-wine-red text-white py-20 pt-32 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="relative z-10"
         >
           <h1 className="text-6xl md:text-7xl font-serif mb-4">Our Menu</h1>
           <p className="text-gold-accent uppercase tracking-[0.3em] text-sm">Authentic Italian Flavors</p>
         </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-2 text-sm md:text-base font-serif uppercase tracking-wider transition-all duration-300 relative group ${
                activeCategory === cat 
                  ? 'text-wine-red font-bold' 
                  : 'text-stone-400 hover:text-wine-red'
              }`}
            >
              {cat}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-accent transform origin-left transition-transform duration-300 ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
            </button>
          ))}
        </div>

        {/* Menu Grid - Staggered Animation */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group w-full flex gap-4 md:gap-6 items-start"
                >
                   {/* Image Thumbnail */}
                   <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 rounded-sm overflow-hidden shadow-md relative bg-stone-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      {/* Dark overlay on hover for a slight focus effect on text */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                   </div>

                   {/* Item Details */}
                   <div className="flex-grow pt-1">
                      <div className="flex items-baseline justify-between w-full mb-2 relative">
                          <h3 className="text-lg md:text-xl font-serif font-bold text-wine-red pr-2 relative z-10 group-hover:text-gold-accent transition-colors">
                            {item.name}
                          </h3>
                          {/* Dotted Leader */}
                          <div className="flex-grow border-b-2 border-dotted border-stone-300 mx-2 relative -top-1.5 opacity-50"></div>
                          <span className="text-lg font-serif font-bold text-dark-charcoal z-10 relative">
                            {item.price}
                          </span>
                      </div>
                      <p className="text-stone-500 text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                   </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Wine Note */}
        {activeCategory === 'Wines' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-20"
          >
            <p className="text-wine-red font-serif text-lg italic border-y border-gold-accent/30 py-6 inline-block px-12">
              "Wine is the poetry of the earth." <br/>
              <span className="text-sm font-sans not-italic text-stone-500 mt-2 block">
                Ask our sommelier for the full reserve list featuring vintage bottles.
              </span>
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;