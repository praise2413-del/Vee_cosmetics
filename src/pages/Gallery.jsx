import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Shop', 'Products', 'Lifestyle'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-bg-base transition-colors duration-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="font-serif text-gold text-lg tracking-wider font-semibold uppercase">Brand Exhibition</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-base">
            Vee Photo <span className="gold-gradient">Gallery</span>
          </h1>
          <div className="h-[2px] w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-text-muted text-sm md:text-base">
            Tazama picha za duka letu maridadi, bidhaa zetu halisi na muonekano wa wateja wetu wanaojiamini. Tunaleta picha za urembo na mtindo wa maisha.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center gap-3 mb-12 pb-3 md:pb-0 px-2 -mx-4 md:mx-0 snap-x snap-mandatory scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex-shrink-0 snap-start ${
                filter === cat
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-card-bg text-text-base border border-border-base hover:border-gold/30 hover:bg-rose-light/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/5] bg-rose-light/20 border border-border-base shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  width="300"
                  height="375"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover overlay panel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-6 text-left">
                  <div className="space-y-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] sm:text-[10px] font-bold text-gold tracking-widest uppercase bg-gold/15 border border-gold/30 px-2 py-0.5 rounded-md inline-block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-sm sm:text-lg font-bold text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-white/80 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2 text-[9px] sm:text-[10px] text-gold uppercase tracking-wider font-semibold flex items-center gap-1">
                      <Maximize2 className="h-3 w-3" />
                      <span>View Fullscreen</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-text-muted font-medium">Hakuna picha kwenye kundi hili kwa sasa.</p>
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
            
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Left */}
            <button 
              onClick={handlePrev}
              className="absolute left-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main Lightbox Content */}
            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredItems[lightboxIndex].image} 
                alt={filteredItems[lightboxIndex].title} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <div className="text-center max-w-xl px-4">
                <span className="text-[10px] font-bold text-gold tracking-widest uppercase bg-gold/15 border border-gold/30 px-2 py-0.5 rounded-md inline-block mb-1">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-sm text-white/75 mt-1">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button 
              onClick={handleNext}
              className="absolute right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
