import React from 'react';
import HeroSection from '../components/HeroSection';
import MenuPreview from '../components/MenuPreview';
import Testimonials from '../components/Testimonials';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      {/* Editorial "Our Story" Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center relative">
              {/* Image Block with Layered Effect */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-3/5 relative z-0 md:pr-12 md:pb-12"
              >
                <img 
                   src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                   alt="Restaurant Interior" 
                   className="w-full h-[500px] object-cover shadow-2xl"
                />
                {/* Overlapping Detail Image */}
                <div className="absolute -bottom-0 -right-0 w-64 h-64 border-8 border-white shadow-2xl hidden md:block overflow-hidden z-20">
                   <img 
                     src="https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                     alt="Pasta Making Detail" 
                     className="w-full h-full object-cover"
                   />
                </div>
              </motion.div>

              {/* Text Overlay Block */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 bg-cream-bg p-12 md:-ml-24 relative z-10 shadow-xl border-l-4 border-gold-accent mt-8 md:mt-0"
              >
                 <h4 className="text-gold-accent uppercase tracking-[0.2em] text-xs font-bold mb-4">Our Heritage</h4>
                 <h2 className="text-4xl md:text-5xl font-serif text-wine-red mb-8 leading-tight">Tradition meets <br/>Modern Elegance</h2>
                 <p className="text-stone-600 mb-6 leading-relaxed font-light text-lg">
                   Founded in 1995, La Baita del Gusto brings the authentic flavors of the Italian countryside to your table. 
                   Our recipes have been passed down through generations, ensuring every dish tells a story of heritage and love.
                 </p>
                 <p className="text-stone-600 mb-8 leading-relaxed font-light text-lg">
                   We believe in the purity of ingredients and the complexity of simplicity.
                 </p>
                 <Link to="/about" className="inline-flex items-center text-wine-red font-serif italic text-lg hover:text-gold-accent transition-colors group">
                   Discover our full story 
                   <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform"><ArrowRight size={18} /></span>
                 </Link>
              </motion.div>
           </div>
        </div>
      </section>

      <MenuPreview />
      
      {/* Moments Collage Section (Bento Grid) */}
      <section className="py-24 bg-dark-charcoal text-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl font-serif mb-6">
                Unforgettable <span className="text-gold-accent italic">Moments</span>
              </h2>
              <div className="h-px w-24 bg-gold-accent mx-auto opacity-60"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[600px]">
            {/* Left Tall Image - Toasting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-sm h-64 md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Celebration Toast"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>

            {/* Top Middle Image - Chef */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-sm h-64 md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1595291133397-c19a84ac6680?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Chef Plating"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>

            {/* Top Right Image - Atmosphere/Friends */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-sm h-64 md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Friends Dining"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>

            {/* Bottom Content Block - Quote & CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-8 md:row-span-1 bg-wine-red relative flex flex-col items-center justify-center text-center p-8 rounded-sm overflow-hidden h-80 md:h-auto"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              <div className="relative z-10 max-w-lg">
                <p className="text-2xl md:text-3xl font-serif text-white italic mb-8 leading-relaxed">
                  "A dinner at La Baita is not just a meal,<br /> it's a journey through the heart of Italy."
                </p>
                <Link to="/reservations">
                  <Button variant="outline" className="border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-white">
                    Book Your Table
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
    </motion.div>
  );
};

export default Home;