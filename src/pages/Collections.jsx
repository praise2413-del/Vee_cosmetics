import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Heart, X, Check, ShoppingBag, Sparkles } from 'lucide-react';
export default function Collections({ categoryFilter, setCategoryFilter, productsList }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const categories = ['All', 'Skincare', 'Accessories', 'Body Care', 'Hair & Beauty'];

  const filteredProducts = categoryFilter === 'All' 
    ? productsList 
    : productsList.filter(p => p.category === categoryFilter);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const getWhatsAppLink = (product) => {
    const text = `Hello Vee Cosmetics! I would like to order:
- Product Name: ${product.name}
- Category: ${product.category}
- Price: ${product.price} TSh
Please confirm availability and shipping/pickup details at Banana, Dar es Salaam. Thank you!`;
    return `https://wa.me/255659130030?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-bg-base transition-colors duration-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="font-serif text-gold text-lg tracking-wider font-semibold uppercase">Exclusive Selection</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-base">
            Our Beauty <span className="gold-gradient">Collections</span>
          </h1>
          <div className="h-[2px] w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-text-muted text-sm md:text-base">
            Gundua bidhaa zetu zote halisi na za kifahari zilizoteuliwa kwa ajili yako. Kila bidhaa imethibitishwa na inajali ngozi na nywele zako.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center gap-3 mb-12 pb-3 md:pb-0 px-2 -mx-4 md:mx-0 snap-x snap-mandatory scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex-shrink-0 snap-start ${
                categoryFilter === cat
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-card-bg text-text-base border border-border-base hover:border-gold/30 hover:bg-rose-light/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative cursor-pointer bg-card-bg rounded-2xl overflow-hidden border border-border-base hover:border-gold/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
              >
                
                {/* Product Image Panel */}
                <div className="relative aspect-square w-full overflow-hidden bg-rose-light/10">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    width="300"
                    height="300"
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm text-text-base text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-border-base">
                    {product.category}
                  </span>

                  {/* Heart Wishlist Icon */}
                  <button 
                    onClick={(e) => toggleFavorite(product.id, e)}
                    className="absolute top-3 right-3 p-1.5 sm:p-2 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm shadow-sm transition-all duration-200 border border-transparent hover:border-gold/40 cursor-pointer"
                  >
                    <Heart 
                      className={`h-4 w-4 sm:h-4.5 sm:w-4.5 transition-colors ${
                        favorites.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-text-muted hover:text-red-500'
                      }`} 
                    />
                  </button>

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-gold text-white text-[10px] sm:text-xs uppercase tracking-wider font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Product Info Panel */}
                <div className="p-3 sm:p-6 flex-grow flex flex-col justify-between space-y-3 sm:space-y-4 text-left">
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="font-serif text-sm sm:text-lg font-bold text-text-base group-hover:text-gold transition-colors duration-200 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-text-muted leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-border-base/50">
                    <span className="font-bold text-sm sm:text-lg text-gold tracking-wide">
                      {product.price} <span className="text-[10px] sm:text-xs font-semibold text-text-base">TSh</span>
                    </span>
                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-rose-light dark:bg-rose-light/10 text-rose-primary hover:bg-rose-primary hover:text-white transition-colors duration-300"
                      title="Order via WhatsApp"
                    >
                      <MessageSquare className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-text-muted font-medium">Hakuna bidhaa zilizopatikana kwenye kundi hili kwa sasa.</p>
          </div>
        )}

      </div>

      {/* Product Details Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start md:items-center justify-center p-2 sm:p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-card-bg w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-border-base relative my-auto max-h-[95vh] md:max-h-none overflow-y-auto"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/45 hover:bg-black/65 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Modal Left: Product Image */}
                <div className="relative aspect-[4/3] md:aspect-square w-full md:h-full bg-rose-light/10">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    width="400"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Right: Product Info */}
                <div className="p-5 sm:p-8 flex flex-col justify-between text-left space-y-4 sm:space-y-6">
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] sm:text-xs font-semibold text-gold uppercase tracking-widest">{selectedProduct.category}</span>
                      <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-text-base leading-tight">
                        {selectedProduct.name}
                      </h2>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-xs text-text-muted font-medium bg-rose-light/50 dark:bg-rose-light/5 px-2.5 py-1 rounded-md">
                      <Sparkles className="h-3.5 w-3.5 text-gold" />
                      <span>In Stock at Banana, Dar</span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-base">Product Highlights:</h4>
                      <ul className="space-y-1.5">
                        {selectedProduct.features?.map((feat, index) => (
                          <li key={index} className="flex items-center space-x-2 text-[10px] sm:text-xs text-text-muted">
                            <Check className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and CTA Button */}
                  <div className="pt-4 sm:pt-6 border-t border-border-base/50 flex flex-row items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs text-text-muted">Price:</span>
                      <span className="font-bold text-lg sm:text-2xl text-gold tracking-wide">
                        {selectedProduct.price} <span className="text-xs font-semibold text-text-base">TSh</span>
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(selectedProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-rose-primary text-white text-xs sm:text-sm font-medium hover:bg-rose-hover transition-colors shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider gap-1.5 sm:gap-2 border border-transparent"
                    >
                      <ShoppingBag className="h-4 sm:h-4.5 w-4 sm:w-4.5" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
