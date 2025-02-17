const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const firebaseAdmin = require('firebase-admin');

// Initialize Firebase Admin SDK with the service account credentials
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Provide path to your service account JSON file

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://schoolmate-2babe-default-rtdb.firebaseio.com', // Replace with your Firebase Database URL
});

const db = firebaseAdmin.database();

const app = express();

dotenv.config(); // Load environment variables

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is working successfully!',
  });
});

// Fetch products from Firebase Realtime Database
app.get('/products', async (req, res) => {
  try {
    const snapshot = await db.ref('products').once('value');
    const products = snapshot.val();
    if (products) {
      res.json({ success: true, products });
    } else {
      res.json({ success: false, message: 'No products found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
});

// Add a product to Firebase Realtime Database
app.post('/products', async (req, res) => {
  const { name, category, price, description, image } = req.body;
  
  const newProductRef = db.ref('products').push();
  const newProduct = {
    id: newProductRef.key,
    name,
    category,
    price,
    description,
    image,
  };
  
  try {
    await newProductRef.set(newProduct);
    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding product' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
