import React from 'react';

const PromoBanner = ({ onAuthOpen }) => {
  return (
    <section id="deals" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center" style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
        }}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl floating"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-2xl floating" style={{animationDelay: '1s'}}></div>
          </div>
          <div className="relative z-10">
            <h2 className="hero-title text-4xl md:text-6xl mb-6">Get 20% Off Your First Order</h2>
            <p className="text-xl mb-8 opacity-90">Sign up now and enjoy exclusive member benefits</p>
            <button 
              onClick={() => onAuthOpen('signup')}
              className="bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-white transition-all"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
