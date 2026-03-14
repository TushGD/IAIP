import React from 'react';
import { categories } from '../data';

const Categories = () => {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="hero-title text-4xl md:text-5xl mb-4">Browse Categories</h2>
          <p className="text-gray-400 text-lg">Explore our wide range of products</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="category-card glass p-8 rounded-2xl text-center hover:bg-white/10 scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{backgroundColor: `${category.color}20`}}
                >
                  <Icon className="w-8 h-8" style={{color: category.color}} />
                </div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
