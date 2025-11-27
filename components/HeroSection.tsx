import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect: Move background down slower than scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Subtle fade out as user scrolls away
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark-charcoal">
      {/* Background Image with Ken Burns Effect & Parallax */}
      <motion.div 
        style={{ 
          y,
          opacity,
          backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute -top-[20%] left-0 w-full h-[140%] bg-cover bg-center bg-no-repeat z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mb-6"
        >
           <div className="h-16 w-[1px] bg-gold-accent mb-6 opacity-60"></div>
           <span className="text-gold-accent text-xs md:text-sm tracking-[0.4em] uppercase font-semibold">
             Est. 1995 • Roma, Italy
           </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white font-bold mb-6 tracking-tight leading-tight"
        >
          LA BAITA
          <span className="block text-3xl md:text-5xl lg:text-6xl font-light italic mt-2 text-gold-accent/90 font-serif">
            Del Gusto
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl mx-auto mb-12"
        >
          <p className="text-stone-200 text-lg md:text-xl font-light leading-relaxed font-sans tracking-wide">
            Where culinary excellence meets timeless Italian elegance.
            Experience the art of fine dining in the heart of Rome.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <Link to="/reservations"><Button variant="primary">Reserve a Table</Button></Link>
          <Link to="/menu"><Button variant="outline">View Our Menu</Button></Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer hover:text-gold-accent transition-colors z-10"
        onClick={() => {
           window.scrollTo({
             top: window.innerHeight,
             behavior: 'smooth'
           });
        }}
      >
        <span className="block text-[10px] uppercase tracking-widest mb-2 text-center">Scroll</span>
        <ChevronDown size={24} className="mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;