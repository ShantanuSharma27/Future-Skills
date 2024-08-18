const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes/cardRoutes');
const Route=express.Router();
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/cards', cardRoutes);
// Error Handling Middleware
app.use(errorHandler);
// Ping route for health check
app.get('/ping', (req, res) => {
    res.send('Server is running');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
