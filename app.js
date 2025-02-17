const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const firebaseAdmin = require('firebase-admin');
const path = require('path'); // Add this line at the top

// Initialize environment variables
dotenv.config();

// Update the path to serviceAccountKey.json
const serviceAccount = require(path.resolve(__dirname, 'backend', 'config', 'serviceAccountKey.json'));

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

// Firestore reference
const db = firebaseAdmin.firestore();

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

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is working successfully! Done By Kumar, Sowmiya, Vijay 🎉',
  });
});

// Products endpoint
app.get('/products', async (req, res) => {
  try {
    // Fetch products from Firestore
    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();
    const products = snapshot.docs.map(doc => doc.data());

    // Return products data
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching products', error });
  }
});

// Firebase Firestore - Writing data to Firestore
app.post('/addProduct', async (req, res) => {
  const newProduct = req.body;

  try {
    // Add new product to Firestore
    const productsRef = db.collection('products');
    await productsRef.add(newProduct);

    res.json({ success: true, message: 'Product added successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding product', error });
  }
});

// Set up the server to listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
