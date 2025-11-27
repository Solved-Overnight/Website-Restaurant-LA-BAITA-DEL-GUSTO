import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-wine-red text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-gold-accent uppercase tracking-widest text-xs font-bold mb-3">Guest Experience</h4>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Words from our Patrons</h2>
          <div className="flex justify-center gap-2 text-gold-accent">
             {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-sm border border-white/10 relative hover:bg-white/10 transition-colors duration-300"
            >
              <div className="absolute -top-5 left-8 bg-gold-accent text-wine-red p-2">
                <Quote size={24} />
              </div>
              
              <p className="text-stone-200 font-serif italic text-lg mb-8 leading-relaxed">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center font-serif text-gold-accent font-bold">
                   {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white tracking-wide">{t.name}</h4>
                  <span className="text-xs uppercase tracking-widest text-gold-accent/80">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;