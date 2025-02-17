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
  res.json({ success: true, message: 'API is working successfully! Done By Kumar..., Sowmiya..., Vijay 🎉' });
});

app.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Cheese Burger',
      category: 'Fast Food',
      price: 5.99,
      description: 'A delicious cheese burger with fresh lettuce, tomatoes, and melted cheese.',
      image: 'https://www.freepik.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_137496226.htm#fromView=search&page=1&position=0&uuid=6c7b29a3-7232-4d07-beae-bdc0c52f24cc&query=cheese+burger'
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      category: 'Fast Food',
      price: 9.99,
      description: 'A classic pepperoni pizza with a crispy crust and lots of cheese.',
      image: 'https://www.freepik.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_137496226.htm#fromView=search&page=1&position=0&uuid=6c7b29a3-7232-4d07-beae-bdc0c52f24cc&query=cheese+burger'
    },
    {
      id: 3,
      name: 'Non Veggie Pasta',
      category: 'Italian',
      price: 7.99,
      description: 'Healthy pasta with fresh vegetables, olive oil, and Parmesan cheese.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQbuKL7NfxTMy1wUymb2tu25NONgb7TU_NE-KOzWF9UfMU5rRz'
    },
    {
      id: 4,
      name: 'Grilled Chicken Sandwich',
      category: 'Fast Food',
      price: 6.99,
      description: 'Grilled chicken sandwich with crispy lettuce and creamy mayo.',
      image: 'https://files.oaiusercontent.com/file-D2Ja2CA6HofhAMLp1zqnV4?se=2025-02-17T07%3A00%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D166e4d6b-f74d-4b08-8437-d35570af6648.webp&sig=17NAZ0dMaAuoGp47OZIfJTuN%2BWHWwZ2gJ69thruh%2BgI%3D'
    },
    {
      id: 5,
      name: 'Chocolate Shake',
      category: 'Beverages',
      price: 4.99,
      description: 'Thick and creamy chocolate shake topped with whipped cream.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQbuKL7NfxTMy1wUymb2tu25NONgb7TU_NE-KOzWF9UfMU5rRz'
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