import { TrendingUp, Zap, Star, Heart } from 'lucide-react';

export const categories = [
  { name: 'New Arrivals', icon: TrendingUp, color: '#FF6B35' },
  { name: 'Electronics', icon: Zap, color: '#4ECDC4' },
  { name: 'Fashion', icon: Star, color: '#FFE66D' },
  { name: 'Home & Living', icon: Heart, color: '#95E1D3' }
];

export const products = [
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
    badge: 'Hot Deal',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Smart Watch Ultra',
    price: 399.99,
    originalPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    badge: 'Trending',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Premium Backpack',
    price: 79.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    badge: 'Best Seller',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Minimalist Desk Lamp',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    badge: 'New',
    rating: 4.6
  },
  {
    id: 5,
    name: 'Leather Wallet',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
    badge: 'Sale',
    rating: 4.8
  },
  {
    id: 6,
    name: 'Portable Speaker',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    badge: 'Featured',
    rating: 4.9
  }
];
