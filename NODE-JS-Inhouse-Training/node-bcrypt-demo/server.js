const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// In-memory data stores for this demo
const users = [];       // Stores { username, password: hashedpassword }
let refreshTokens = []; // Stores active refresh tokens

const SECRET_KEY = 'yourSecretKey';
const REFRESH_SECRET_KEY = 'yourRefreshSecretKey';

// 1. REGISTER ROUTE (Hashes password and saves user)
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Check if user already exists
        const existingUser = users.find(u => u.username === username);
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        users.push({ username, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error during registration' });
    }
});

// 2. LOGIN ROUTE (Verifies password and issues Access & Refresh Tokens)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: 'Invalid password' });

    // Generate tokens
    const accessToken = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ username: user.username }, REFRESH_SECRET_KEY);

    refreshTokens.push(refreshToken);

    res.json({ accessToken, refreshToken });
});

// 3. REFRESH TOKEN ROUTE (Issues new access token using a valid refresh token)
app.post('/token', (req, res) => {
    const { token } = req.body;
    if (!token || !refreshTokens.includes(token)) {
        return res.status(403).json({ message: 'Refresh token invalid or missing' });
    }

    jwt.verify(token, REFRESH_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid refresh token' });

        const accessToken = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '15m' });
        res.json({ accessToken });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Auth server running on http://localhost:3000');
});