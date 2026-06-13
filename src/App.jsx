import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { products } from './data/products';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('All');
  
  // Dynamic products list stored in localStorage
  const [productsList, setProductsList] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vee_products');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Error parsing vee_products", e);
        }
      }
    }
    return products;
  });

  const saveProducts = (newList) => {
    setProductsList(newList);
    localStorage.setItem('vee_products', JSON.stringify(newList));
  };

  // Theme state: default to system preference or stored theme
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} setCategoryFilter={setCategoryFilter} />;
      case 'collections':
        return <Collections categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} productsList={productsList} />;
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return <Admin productsList={productsList} saveProducts={saveProducts} setActivePage={setActivePage} />;
      default:
        return <Home setActivePage={setActivePage} setCategoryFilter={setCategoryFilter} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-base text-text-base transition-colors duration-300">
      
      {/* Sticky Premium Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isDark={isDark} 
        setIsDark={setIsDark} 
      />
      
      {/* Main Content Router */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Styled Footer */}
      <Footer setActivePage={setActivePage} isDark={isDark} />


    </div>
  );
}

export default App;
