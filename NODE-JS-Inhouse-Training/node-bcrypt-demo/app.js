// const bcrypt = require('bcrypt');

// // Function to hash the password
// async function hashPassword(password) {
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     return hashedPassword;
// }

// // Function to verify the password using bcrypt.compare()
// async function verifyPassword(inputPassword, storedHash) {
//     const isMatch = await bcrypt.compare(inputPassword, storedHash);
//     if (isMatch) {
//         console.log('Password Matched');
//     } else {
//         console.log('Invalid Password');
//     }
// }

// // Main execution block to test
// async function run() {
//     const password = 'myPassword123';
//     const hash = await hashPassword(password);
//     console.log('Generated Hash:', hash);

//     // Test with correct password
//     await verifyPassword('myPassword123', hash);

//     // Test with incorrect password
//     await verifyPassword('wrongPassword', hash);
// }

// run();

// ==========================================
// 2. NEW CONCEPT: EXPRESS & JWT AUTH MIDDLEWARE
// ==========================================

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secretKey = 'yourSecretKey';

// Authentication Middleware
function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid Token' });
    }
}

// Login Route (Generates a token to test with)
app.post('/login', (req, res) => {
    const user = { id: 1, username: 'user123' };
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
    res.json({ token });
});

// Protected Route (Uses the middleware)
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ 
        message: 'Access granted to protected route!', 
        user: req.user 
    });
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
// ==========================================
// 3. NEW CONCEPT: ROLE-BASED AUTHORIZATION
// ==========================================

// Role Authorization Middleware
function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access Forbidden' });
        }
        next();
    };
}

// Updated Login Route (Generates token with a specific role)
app.post('/login-admin', (req, res) => {
    const adminUser = { id: 1, username: 'boss123', role: 'admin' };
    const token = jwt.sign(adminUser, secretKey, { expiresIn: '1h' });
    res.json({ token, description: 'Use this token for admin route' });
});

app.post('/login-user', (req, res) => {
    const regularUser = { id: 2, username: 'student123', role: 'student' };
    const token = jwt.sign(regularUser, secretKey, { expiresIn: '1h' });
    res.json({ token, description: 'Use this token for regular/student routes' });
});

// Admin-Only Protected Route
app.get('/admin', authenticateToken, authorizeRoles('admin'), (req, res) => {
    res.json({ 
        message: 'Welcome Admin!',
        user: req.user 
    });
});