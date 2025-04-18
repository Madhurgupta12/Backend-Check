const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Use PORT from .env or default to 5000
const PORT = process.env.PORT ||3000;

// Basic route
app.get('/', (req, res) => {
    res.send('<h1>Hello from Express Server!</h1>');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running');
  });
  
