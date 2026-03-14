import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import './styles/App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthOpen = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        scrollY={scrollY} 
        onAuthOpen={() => handleAuthOpen('login')} 
      />
      <Hero />
      <Categories />
      <Products />
      <PromoBanner onAuthOpen={handleAuthOpen} />
      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
}

export default App;
