import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, Sparkles } from 'lucide-react';

export default function Footer({ setActivePage, isDark }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-rose-light/40 dark:bg-rose-light/5 border-t border-border-base transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Philosophy column */}
          <div className="space-y-4">
            <div className="flex flex-col space-y-3 items-start">
              {/* <img 
                src={isDark ? "/logo1.jpeg" : "/logo2.jpeg"} 
                alt="Vee Cosmetics Logo" 
                className="h-28 md:h-30 w-auto rounded-xl object-contain border-2 border-gold/20 shadow-sm"
              /> */}
              <h3 className="font-serif text-2xl font-bold text-text-base tracking-wide">
                VEE <span className="gold-gradient">COSMETICS</span>
              </h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Your Complete Beauty Destination. Empowering women with high-quality skincare, hair products, and gorgeous beauty accessories that inspire confidence and elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://wa.me/255659130030"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card-bg shadow-sm text-gold hover:bg-rose-primary hover:text-white transition-all duration-300"
                title="Chat with us on WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card-bg shadow-sm text-gold hover:bg-rose-primary hover:text-white transition-all duration-300"
                title="Follow us on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="tel:+255659130030"
                className="p-3 rounded-full bg-card-bg shadow-sm text-gold hover:bg-rose-primary hover:text-white transition-all duration-300"
                title="Call Vee Cosmetics"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-text-base border-b border-gold/25 pb-2">
              Navigation
            </h4>
            <ul className="space-y-1">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Collections', id: 'collections' },
                { name: 'Photo Gallery', id: 'gallery' },
                { name: 'About Vee', id: 'about' },
                { name: 'Contact Info', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="w-full text-left py-1.5 text-sm text-text-muted hover:text-gold cursor-pointer transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-text-base border-b border-gold/25 pb-2">
              Categories
            </h4>
            <ul className="space-y-1">
              {['Skincare', 'Accessories', 'Body Care', 'Hair & Beauty'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleNavClick('collections')}
                    className="w-full text-left py-1.5 text-sm text-text-muted hover:text-gold cursor-pointer transition-colors duration-200"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-text-base border-b border-gold/25 pb-2">
              Store Information
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3 text-sm text-text-muted">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Banana, Dar es Salaam, Tanzania (Near the main road)</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-text-muted">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="tel:+255659130030" className="hover:text-gold transition-colors duration-200">+255 659 130 030</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-text-muted">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="mailto:veecosmetics@gmail.com" className="hover:text-gold transition-colors duration-200">veecosmetics@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-text-muted">
                <Sparkles className="h-5 w-5 text-gold flex-shrink-0" />
                <span>Open: Mon - Sat (08:30am - 10:30pm)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer Copyright */}
        <div className="mt-16 pt-8 border-t border-border-base/50 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>&copy; {currentYear} Vee Cosmetics. All Rights Reserved. Designed with elegance.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <button
              onClick={() => handleNavClick('admin')}
              className="hover:text-gold transition-colors font-semibold cursor-pointer"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
