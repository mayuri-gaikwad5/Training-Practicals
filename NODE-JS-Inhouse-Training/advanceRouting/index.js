const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const fs = require('fs');
const axios = require('axios');

const app = express();

app.use(express.json());

// --- AUTHENTICATION MIDDLEWARE ---
const studentAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  const studentRole = req.headers['x-student-role'];

  if (!token || token !== 'Bearer student-secret-token') {
    return res.status(403).send('Invalid or missing token');
  }

  if (studentRole !== 'student') {
    return res.status(403).send('Access denied. Student role required.');
  }

  next();
};

// --- ROUTES ---
app.use('/users', userRoutes);
app.use('/books', bookRoutes);

// Protected student-data route in index.js
app.get('/student-data', studentAuthMiddleware, (req, res) => {
  res.send('Student data accessed successfully.');
});


app.get('/fetch-posts', async (req, res, next) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Error fetching data gracefully handled');
  }
});

class UserDTO {
  constructor(name, age, email) {
    if (!name || !age || !email) {
      throw new Error('All fields are required');
    }
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof age !== 'number' || age < 0) {
      throw new Error('Age must be a valid number');
    }
    if (typeof email !== 'string' || !email.includes('@')) {
      throw new Error('Invalid email format');
    }

    this.name = name;
    this.age = age;
    this.email = email;
  }
}
const validateUserDTO = (req, res, next) => {
  try {
    const { name, age, email } = req.body;
    new UserDTO(name, age, email);
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

app.post('/create-user', validateUserDTO, (req, res) => {
  res.send('User data is valid. User created.');
});

app.listen(3000, () => console.log('Server running on port 3000'));