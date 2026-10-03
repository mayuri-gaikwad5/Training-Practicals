// config.js
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err.message));