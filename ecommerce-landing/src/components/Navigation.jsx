import React, { useState } from 'react';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';

const Navigation = ({ scrollY, onAuthOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'glass shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 slide-in-left">
            <ShoppingBag className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
            <span className="hero-title text-2xl">LUXE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 fade-in" style={{animationDelay: '0.2s'}}>
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#shop" className="hover:text-orange-500 transition-colors">Shop</a>
            <a href="#categories" className="hover:text-orange-500 transition-colors">Categories</a>
            <a href="#deals" className="hover:text-orange-500 transition-colors">Deals</a>
          </div>
          
          <div className="flex items-center space-x-4 slide-in-right">
            <button className="hidden md:block hover:text-orange-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={onAuthOpen}
              className="glass px-4 py-2 rounded-full hover:bg-orange-500 transition-all flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <a href="#home" className="block hover:text-orange-500 transition-colors">Home</a>
            <a href="#shop" className="block hover:text-orange-500 transition-colors">Shop</a>
            <a href="#categories" className="block hover:text-orange-500 transition-colors">Categories</a>
            <a href="#deals" className="block hover:text-orange-500 transition-colors">Deals</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
