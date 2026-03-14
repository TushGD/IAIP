import React, { useState } from 'react';
import { X } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [authMode, setAuthMode] = useState(initialMode);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', authMode);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl max-w-md w-full p-8 scale-in">
        <div className="flex justify-between items-center mb-6">
          <h3 className="hero-title text-2xl">
            {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h3>
          <button 
            onClick={onClose}
            className="hover:bg-white/10 p-2 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === 'signup' && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors text-white"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors text-white"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all"
          >
            {authMode === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="text-center mt-6">
          <button
            onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {authMode === 'login' 
              ? "Don't have an account? Sign up" 
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
