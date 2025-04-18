const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Use PORT from .env or default to 5000
const PORT = process.env.PORT || 5000;

// Basic route
app.get('/', (req, res) => {
    res.send('<h1>Hello from Express Server!</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
