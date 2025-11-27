import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Interior', 'Culinary', 'Atmosphere'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const handleImageClick = (img: GalleryImage) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-stone-100"
    >
      {/* Header */}
      <div className="bg-wine-red text-white py-20 pt-32 text-center mb-12 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="relative z-10"
         >
           <h1 className="text-6xl md:text-7xl font-serif mb-4">Gallery</h1>
           <p className="text-gold-accent uppercase tracking-[0.3em] text-sm">A Glimpse Inside</p>
         </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`pb-2 text-sm font-serif uppercase tracking-widest transition-all duration-300 relative group ${
                filter === cat ? 'text-wine-red font-bold' : 'text-stone-400 hover:text-wine-red'
              }`}
            >
              {cat}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-accent transform origin-left transition-transform duration-300 ${filter === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => handleImageClick(img)}
                className="break-inside-avoid relative group rounded-lg overflow-hidden shadow-md cursor-pointer bg-black"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <div className="bg-gold-accent/90 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
                    <Maximize2 size={20} />
                  </div>
                  <span className="text-white font-serif text-lg border-b border-gold-accent pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={handleClose}
            >
              <X size={40} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption} 
                className="max-h-[85vh] w-auto object-contain rounded-sm shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-serif text-white">{selectedImage.caption}</h3>
                <span className="text-gold-accent uppercase text-xs tracking-[0.2em] mt-2 block">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;