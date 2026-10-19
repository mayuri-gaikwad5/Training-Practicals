const express = require('express');
const router = express.Router();

// Custom validation middleware
const validateUserData = (req, res, next) => {
  const { name, age } = req.body;
  if (!name || typeof name !== 'string' || !age || typeof age !== 'number') {
    return res.status(400).send('Invalid data');
  }
  next();
};

// CRUD operations for users
router.get('/', (req, res) => res.send('Get all users'));

router.post('/', validateUserData, (req, res) => {
  res.send('User data is valid. User created successfully.');
});

router.get('/:id', (req, res) => res.send(`Get user with ID ${req.params.id}`));
router.put('/:id', (req, res) => res.send(`Update user with ID ${req.params.id}`));
router.delete('/:id', (req, res) => res.send(`Delete user with ID ${req.params.id}`));

module.exports = router;