import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl floating" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block glass px-4 py-2 rounded-full mb-6 fade-in">
              <span className="text-orange-500 font-semibold">✨ New Collection 2024</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl mb-6 leading-tight slide-in-left">
              Discover Your
              <span className="gradient-text block">Perfect Style</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 slide-in-left" style={{animationDelay: '0.2s'}}>
              Shop the latest trends in fashion, electronics, and lifestyle. 
              Exclusive deals up to 50% off this week only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 slide-in-left" style={{animationDelay: '0.4s'}}>
              <button className="btn-primary bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                View Deals
              </button>
            </div>
            <div className="flex items-center space-x-8 mt-12 slide-in-left" style={{animationDelay: '0.6s'}}>
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-gray-400 text-sm">Products</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>
          </div>
          <div className="relative slide-in-right">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop" 
                alt="Shopping"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl scale-in" style={{animationDelay: '0.8s'}}>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full p-3 pulse-ring">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Flash Sale!</div>
                    <div className="text-sm text-gray-400">Up to 50% Off</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
