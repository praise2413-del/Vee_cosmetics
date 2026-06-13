import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activePage, setActivePage, isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle theme class on the html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Beauty Collections', id: 'collections' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About Vee', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 md:py-3.5">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src={isDark ? "/logo1.webp" : "/logo2.webp"} 
              alt="Vee Cosmetics Logo" 
              width="56"
              height="56"
              className="h-14 w-14 rounded-xl object-contain transition-all duration-300 border-2 border-gold/20 shadow-md hover:scale-[1.02]"
            />
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-text-base transition-colors duration-300">
              VEE <span className="gold-gradient">COSMETICS</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-200 hover:text-gold cursor-pointer relative py-2 ${
                  activePage === item.id 
                    ? 'text-gold' 
                    : 'text-text-base/80 hover:text-text-base'
                }`}
              >
                {item.name}
                {activePage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full transition-transform duration-300"></span>
                )}
              </button>
            ))}
          </div>

          {/* Right Controls: Theme Toggle + Hamburger */}
          <div className="flex items-center space-x-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full bg-rose-light hover:bg-rose-primary/20 text-gold transition-all duration-300 border border-gold/10 hover:border-gold/30 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 animate-pulse" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Hamburger button (Mobile only) */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-text-base/80 hover:text-text-base focus:outline-none cursor-pointer"
                aria-label="Open main menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Mobile Navigation Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Blur Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-over Drawer Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-card-bg border-l border-border-base/50 z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div className="space-y-6">
                {/* Header of Drawer */}
                <div className="flex items-center justify-between pb-4 border-b border-border-base/40">
                  <div className="flex items-center space-x-2">
                    <img 
                      src={isDark ? "/logo1.webp" : "/logo2.webp"} 
                      alt="Vee Cosmetics Logo" 
                      width="40"
                      height="40"
                      className="h-10 w-10 rounded-lg object-contain"
                    />
                    <span className="font-serif text-lg font-bold">Vee Menu</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-rose-light/20 text-text-base"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        activePage === item.id 
                          ? 'bg-rose-light/50 dark:bg-rose-light/10 text-gold font-bold border-l-4 border-gold' 
                          : 'text-text-base/80 hover:bg-rose-light/30 hover:text-text-base'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight className={`h-4 w-4 text-gold/60 transition-transform ${activePage === item.id ? 'translate-x-1' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Brand Philosophy info */}
              <div className="pt-6 border-t border-border-base/40 text-center space-y-2">
                <p className="font-serif text-sm font-bold text-text-base">VEE COSMETICS</p>
                <p className="text-[10px] text-text-muted">Banana, Dar es Salaam • 0659130030</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
