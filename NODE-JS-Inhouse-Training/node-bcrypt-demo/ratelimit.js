const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Configure the rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Apply the rate limiter globally to all requests
app.use(limiter);

app.get('/', (req, res) => {
    res.send('Welcome! You are within the rate limit.');
});

app.listen(3000, () => {
    console.log('Rate-limited server running on http://localhost:3000');
});