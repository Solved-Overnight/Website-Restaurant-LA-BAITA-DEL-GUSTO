import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-wine-red/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
           <div className={`p-2 rounded-full border border-gold-accent transition-colors ${isScrolled ? 'bg-transparent' : 'bg-wine-red'}`}>
             <UtensilsCrossed className="w-6 h-6 text-gold-accent" />
           </div>
           <div className="flex flex-col">
             <span className="text-gold-accent font-serif text-xl tracking-widest font-bold group-hover:text-white transition-colors">LA BAITA</span>
             <span className="text-white text-[10px] tracking-[0.2em] uppercase opacity-80">Del Gusto</span>
           </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-sans text-sm tracking-widest uppercase hover:text-gold-accent transition-colors duration-300 ${
                location.pathname === link.path ? 'text-gold-accent' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservations">
            <button className="px-6 py-2 border border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300 uppercase text-xs tracking-widest font-bold">
              Reserve
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-wine-red flex flex-col items-center justify-center space-y-8 z-40 overflow-hidden"
          >
            <div className="absolute top-6 right-6 text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-2xl font-serif hover:text-gold-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/reservations" className="text-gold-accent text-xl uppercase tracking-widest border-b border-gold-accent pb-1">
              Book a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;