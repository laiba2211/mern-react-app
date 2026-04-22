

const express = require('express');
const dotenv  = require('dotenv');
const cors    = require('cors');

const connectDB    = require('./config/db');
const orderRoutes  = require('./routes/orderRoutes');
const errorHandler = require('./middleware/errorHandler');
const productRoutes= require('./routes/productRoutes')
dotenv.config(); // load .env variables FIRST

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json()); // parse JSON request bodies

// --- Routes ---
app.use('/api/orders', orderRoutes);
app.use('/api/Products',productRoutes);
app.use('/api/users',require('./routes/userRoutes'))
// --- Error handler (must be last) ---
app.use(errorHandler);

// --- Start ---
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});