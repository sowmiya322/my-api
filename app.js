const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(express.json()); 
app.use(cors()); 

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Hello, API is working  Succesfully Done By Kumar...,Sowmiya...,Vijay ....! 🎉' });
});

app.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Cheese Burger',
      category: 'Fast Food',
      price: 5.99,
      description: 'A delicious cheese burger with fresh lettuce, tomatoes, and melted cheese.',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg'
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      category: 'Slow Food',
      price: 9.99,
      description: 'A classic pepperoni pizza with a crispy crust and lots of cheese.',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg'
    },
    {
      id: 3,
      name: 'Non Veggie Pasta',
      category: 'Italian',
      price: 7.99,
      description: 'Healthy pasta with fresh vegetables, olive oil, and Parmesan cheese.',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg'
    },
    {
      id: 4,
      name: 'Grilled Chicken Sandwich',
      category: 'Fast Food',
      price: 6.99,
      description: 'Grilled chicken sandwich with crispy lettuce and creamy mayo.',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg'
    },
    {
      id: 5,
      name: 'Chocolate Shake',
      category: 'Beverages',
      price: 4.99,
      description: 'Thick and creamy chocolate shake topped with whipped cream.',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg'
    }
  ];

  setTimeout(() => {
    res.json({ success: true, products });
  }, 500); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});