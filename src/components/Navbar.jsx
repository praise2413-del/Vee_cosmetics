import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

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
              src={isDark ? "/logo1.jpeg" : "/logo2.jpeg"} 
              alt="Vee Cosmetics Logo" 
              className="h-32 md:h-36 w-auto rounded-xl object-contain transition-all duration-300 border-2 border-gold/20 shadow-md hover:scale-[1.02]"
            />
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-text-base transition-colors duration-300">
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

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border-base/50 animate-fade-in">
          <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-center px-4 py-3 rounded-lg text-base font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activePage === item.id 
                    ? 'bg-rose-light text-gold font-semibold' 
                    : 'text-text-base/80 hover:bg-rose-light/50 hover:text-text-base'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
