import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import { AnimatePresence, motion } from 'framer-motion';

// TOGGLE WATERMARK VISIBILITY HERE
const SHOW_WATERMARK = true;

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showFullWatermark = !isScrolled || isHovered;

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-dark-charcoal relative">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/contact" element={<Reservations />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        
        {/* Watermark Section */}
        {SHOW_WATERMARK && (
          <div 
            className="fixed bottom-6 right-6 z-[9999] cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div 
              layout
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/60 backdrop-blur-md border border-white/10 h-9 pl-3 pr-4 rounded-full shadow-2xl flex items-center gap-3 overflow-hidden"
              style={{ borderRadius: 9999 }}
            >
              <motion.div 
                layout
                className="w-1.5 h-1.5 flex-shrink-0 rounded-full bg-gold-accent animate-pulse shadow-[0_0_8px_rgba(197,160,89,0.6)]" 
              />
              
              <AnimatePresence mode="popLayout" initial={false}>
                {showFullWatermark ? (
                  <motion.p
                    layout="position"
                    key="full"
                    initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-[10px] font-medium text-stone-300 uppercase tracking-[0.2em] leading-none whitespace-nowrap"
                  >
                    Made By <span className="text-white font-bold">Solved Overnight</span>
                  </motion.p>
                ) : (
                  <motion.p
                    layout="position"
                    key="short"
                    initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-[10px] font-bold text-white uppercase tracking-[0.2em] leading-none whitespace-nowrap"
                  >
                    SO
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;