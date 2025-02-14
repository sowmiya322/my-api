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
      image: 'https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fletsenhance.io%2Fstatic%2F73136da51c245e80edc6ccfe44888a99%2F1015f%2FMainBefore.jpg&imgrefurl=https%3A%2F%2Fletsenhance.io%2F&docid=-t22bY2ix3gHaM&tbnid=D2e1clQQJsbJwM&vet=12ahUKEwiv4_P0kcOLAxUXrlYBHTMEJIgQM3oECHEQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiv4_P0kcOLAxUXrlYBHTMEJIgQM3oECHEQAA '
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      category: 'Slow Food',
      price: 9.99,
      description: 'A classic pepperoni pizza with a crispy crust and lots of cheese.',
      image: 'https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fletsenhance.io%2Fstatic%2F73136da51c245e80edc6ccfe44888a99%2F1015f%2FMainBefore.jpg&imgrefurl=https%3A%2F%2Fletsenhance.io%2F&docid=-t22bY2ix3gHaM&tbnid=D2e1clQQJsbJwM&vet=12ahUKEwiv4_P0kcOLAxUXrlYBHTMEJIgQM3oECHEQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiv4_P0kcOLAxUXrlYBHTMEJIgQM3oECHEQAA '
    },
    {
      id: 3,
      name: 'Non Veggie Pasta',
      category: 'Italian',
      price: 7.99,
      description: 'Healthy pasta with fresh vegetables, olive oil, and Parmesan cheese.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Chicken_pasta_with_vegetables.jpg'
    },
    {
      id: 4,
      name: 'Grilled Chicken Sandwich',
      category: 'Fast Food',
      price: 6.99,
      description: 'Grilled chicken sandwich with crispy lettuce and creamy mayo.',
      image: 'https://pixabay.com/photos/food-dish-cheese-salad-garnish-8151625/'
    },
    {
      id: 5,
      name: 'Chocolate Shake',
      category: 'Beverages',
      price: 4.99,
      description: 'Thick and creamy chocolate shake topped with whipped cream.',
      image: 'https://www.istockphoto.com/photo/preparing-homemade-chocolate-milkshake-gm1127332981-297086200?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_photo&utm_content=srp_topbanner_media&utm_term=chocolate+shake'
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