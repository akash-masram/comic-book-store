const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const comicRoutes = require('./routes/comicRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json()); // For parsing JSON request bodies

// Use the comic routes
app.use('/api/comics', comicRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    // Determine the status code (default to 500 if not set)
    const statusCode = err.status || 500;

    // Construct and send the error response
    res.status(statusCode).json({
        status: statusCode, 
        message: err.message || 'Internal Server Error',
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
