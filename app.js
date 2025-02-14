const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 
app.use(morgan('dev')); 

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Root endpoint - Fixing the issue
app.get('/', (req, res) => {
  res.json({ success: true, message: 'API is working Succesfully Done By Kumar...,Sowmiya...,Vijay ....! 🎉' });
});

// Products endpoint
app.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Cheese Burger',
      category: 'Fast Food',
      price: 5.99,
      description: 'A delicious cheese burger with fresh lettuce, tomatoes, and melted cheese.',
      image: 'https://example.com/cheese-burger.jpg'
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      category: 'Fast Food',
      price: 9.99,
      description: 'A classic pepperoni pizza with a crispy crust and lots of cheese.',
      image: 'https://example.com/pepperoni-pizza.jpg'
    },
    {
      id: 3,
      name: 'Veggie Pasta',
      category: 'Italian',
      price: 7.99,
      description: 'Healthy pasta with fresh vegetables, olive oil, and Parmesan cheese.',
      image: 'https://example.com/veggie-pasta.jpg'
    },
    {
      id: 4,
      name: 'Grilled Chicken Sandwich',
      category: 'Fast Food',
      price: 6.99,
      description: 'Grilled chicken sandwich with crispy lettuce and creamy mayo.',
      image: 'https://example.com/grilled-chicken.jpg'
    },
    {
      id: 5,
      name: 'Chocolate Shake',
      category: 'Beverages',
      price: 4.99,
      description: 'Thick and creamy chocolate shake topped with whipped cream.',
      image: 'https://example.com/chocolate-shake.jpg'
    }
  ];

  res.json({ success: true, products });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
