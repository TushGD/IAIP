import React from 'react';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, index, isLiked, onToggleLike }) => {
  return (
    <div
      className="product-card glass rounded-2xl overflow-hidden scale-in"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.badge}
        </div>
        <button 
          onClick={() => onToggleLike(product.id)}
          className="absolute top-4 right-4 glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <Heart 
            className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all">
            Quick View
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="ml-1 text-sm font-semibold">{product.rating}</span>
          <span className="ml-1 text-sm text-gray-400">(234 reviews)</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-orange-500">${product.price}</span>
            <span className="ml-2 text-gray-500 line-through">${product.originalPrice}</span>
          </div>
          <button className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
