import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data';

const Products = () => {
  const [likedProducts, setLikedProducts] = useState(new Set());

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="hero-title text-4xl md:text-5xl mb-2">Featured Products</h2>
            <p className="text-gray-400">Handpicked items just for you</p>
          </div>
          <button className="glass px-6 py-3 rounded-full hover:bg-white/10 transition-all">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isLiked={likedProducts.has(product.id)}
              onToggleLike={toggleLike}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
