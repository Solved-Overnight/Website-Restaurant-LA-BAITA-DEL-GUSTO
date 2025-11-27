import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
           <h1 className="text-6xl md:text-7xl font-serif mb-4">Our Story</h1>
           <p className="text-gold-accent uppercase tracking-[0.3em] text-sm">Tradition since 1995</p>
         </motion.div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Chef Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="md:w-1/2 relative">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-gold-accent rounded-lg transform -translate-x-4 -translate-y-4 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Chef Marco" 
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-gold-accent font-bold uppercase tracking-widest mb-2">The Chef</h3>
            <h2 className="text-4xl font-serif text-wine-red mb-6">Marco Bellini</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Born in Tuscany, Chef Marco spent his childhood in his grandmother's kitchen, learning the secrets of hand-rolled pasta and slow-cooked sauces. After training in Michelin-starred restaurants across Europe, he returned to his roots to open La Baita del Gusto.
            </p>
            <p className="text-stone-600 leading-relaxed font-serif italic text-lg">
              "Cooking is not just about ingredients, it's about memory, emotion, and the joy of sharing."
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white p-12 rounded-lg shadow-lg border-t-4 border-gold-accent text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-wine-red mb-6">Our Philosophy</h2>
          <p className="text-stone-600 mb-8 leading-relaxed text-lg">
            We believe that authentic Italian cuisine relies on three simple pillars: quality ingredients, traditional techniques, and time. We source our tomatoes from San Marzano, our olive oil from local groves, and our truffles directly from hunters in Umbria. There are no shortcuts in our kitchen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
             <div className="flex flex-col items-center">
               <span className="text-4xl mb-4">🌿</span>
               <h4 className="font-bold text-wine-red">Fresh Ingredients</h4>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-4xl mb-4">🍝</span>
               <h4 className="font-bold text-wine-red">Handmade Daily</h4>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-4xl mb-4">🍷</span>
               <h4 className="font-bold text-wine-red">Curated Wines</h4>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;