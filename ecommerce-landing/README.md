# LUXE - Modern E-commerce Landing Page

A stunning, fully responsive e-commerce landing page built with React.js for the Tredex Technology ReactJS Internship Task-2.

![LUXE Landing Page](https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop)

## 🎯 Task Requirements

This project fulfills all requirements for Task-2:

✅ **Design**: Attractive and user-friendly landing page with compelling visuals and clear call-to-action  
✅ **Product Showcase**: Display featured products with images, prices, ratings, and promotional badges  
✅ **Navigation**: Intuitive navigation system with smooth scrolling and category browsing  
✅ **User Registration**: Sign up/Login modal for personalized shopping experiences  
✅ **Responsive Design**: Fully mobile-friendly for seamless access across all devices

## 🚀 Features

- **Modern UI/UX**: Luxury aesthetic with Playfair Display and Outfit fonts
- **Smooth Animations**: CSS animations for engaging user experience
- **Interactive Components**: Product cards with like functionality and hover effects
- **Category Browsing**: Easy navigation through product categories
- **Glass Morphism Effects**: Modern glassmorphism design elements
- **Promotional Banner**: Special offers section to drive conversions
- **Mobile Responsive**: Optimized for all screen sizes

## 📁 Project Structure

```
ecommerce-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js       # Top navigation bar
│   │   ├── Hero.js             # Hero section with CTA
│   │   ├── Categories.js       # Product categories
│   │   ├── Products.js         # Product grid section
│   │   ├── ProductCard.js      # Individual product card
│   │   ├── PromoBanner.js      # Promotional banner
│   │   ├── Footer.js           # Footer section
│   │   └── AuthModal.js        # Login/Signup modal
│   ├── styles/
│   │   └── App.css             # Global styles and animations
│   ├── data.js                 # Product and category data
│   ├── App.js                  # Main app component
│   └── index.js                # Entry point
├── package.json
├── .gitignore
└── README.md
```

## 🛠️ Tech Stack

- **React 18.2.0** - UI library
- **Lucide React** - Modern icon library
- **CSS3** - Animations and styling
- **Google Fonts** - Playfair Display & Outfit typography

## 📦 Installation

1. **Clone or download the project**
   ```bash
   cd ecommerce-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain optimized static files ready for deployment.

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/styles/App.css`:

```css
:root {
  --primary: #FF6B35;    /* Orange accent */
  --secondary: #4ECDC4;  /* Teal accent */
  --accent: #FFE66D;     /* Yellow accent */
  --dark: #0F172A;       /* Dark background */
  --light: #F8FAFC;      /* Light text */
}
```

### Adding Products

Edit `src/data.js` to add or modify products:

```javascript
{
  id: 7,
  name: 'Your Product',
  price: 99.99,
  originalPrice: 149.99,
  image: 'image-url',
  badge: 'New',
  rating: 4.8
}
```

### Modifying Categories

Edit the categories array in `src/data.js`:

```javascript
{ name: 'Your Category', icon: IconName, color: '#HEX' }
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Components

### Navigation
- Fixed header with scroll effect
- Mobile hamburger menu
- Search and authentication buttons

### Hero Section
- Eye-catching headline with gradient text
- Call-to-action buttons
- Social proof statistics
- Animated hero image

### Product Showcase
- Grid layout (responsive)
- Product cards with hover effects
- Like/favorite functionality
- Quick view feature
- Add to cart buttons

### Auth Modal
- Toggle between login/signup
- Form validation
- Glass morphism design

## 🎯 Performance Optimizations

- CSS-only animations (no JavaScript overhead)
- Optimized image loading
- Component-based architecture
- Minimal dependencies

## 📝 License

This project was created for the Tredex Technology ReactJS Internship program.

## 👨‍💻 Author

Created for ReactJS Internship Task-2  
Company: Tredex Technology

## 🤝 Support

For any questions or issues, please contact the HR team at Tredex Technology.

---

**Note**: This is a frontend-only project. Backend integration (authentication, cart functionality, payment processing) would be implemented in a production environment.
