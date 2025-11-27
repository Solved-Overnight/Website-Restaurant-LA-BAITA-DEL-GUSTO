import React from 'react';
import { MENU_ITEMS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuPreview: React.FC = () => {
  const featuredItems = MENU_ITEMS.filter(item => item.featured).slice(0, 3);

  return (
    <section className="py-24 bg-cream-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold-accent uppercase tracking-widest text-xs font-bold mb-3">Culinary Masterpieces</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-wine-red mb-6">Signature Dishes</h2>
          <div className="w-16 h-0.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden mb-6 rounded-sm">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                />
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-serif text-wine-red mb-2 group-hover:text-gold-accent transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-stone-500 mb-4 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-dark-charcoal font-serif text-lg italic">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/menu">
            <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-wine-red hover:text-gold-accent transition-colors pb-1 border-b border-wine-red hover:border-gold-accent">
              View Complete Menu <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;