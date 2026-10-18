const express = require("express");
const app = express();
const port = 3000;
const multer = require('multer');
const path = require('path');
var morgan = require('morgan');
const fs = require('fs');

// middleware
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));




// Custom Logger Middleware
// const logger = (req, res, next) => {
//   console.log(`Request received: ${req.method} ${req.url}`);
//   next(); // Move to the next middleware or route handler
// };

// Use middleware for all routes
// app.use(logger);

// 2. In-memory database array
let books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' }
];

// 3. Routes

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Add a new book
app.post('/books', (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id === bookId);

  if (bookIndex !== -1) {
    books[bookIndex] = { id: bookId, ...req.body };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(book => book.id !== bookId);
  res.json({ message: 'Book deleted' });
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 4. Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// --- MULTER STORAGE CONFIGURATION ---
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files to 'uploads' folder[cite: 9]
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Initialize multer
const upload = multer({ storage: storage });

// Create an uploads folder if it doesn't exist
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Route for single file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded!' });
  }
  res.json({ message: 'File uploaded successfully', file: req.file });
});

// Route for multiple file uploads
app.post('/upload-multiple', upload.array('files', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded!' });
  }
  res.json({ message: 'Files uploaded successfully', files: req.files });
});

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/script', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'script.js'));
});
app.get('/style', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'style.css'));
});


// Templating Engines

// USING EJS
app.set('view engine', 'ejs');

app.get('/ejs', (req, res) => {
  res.render('index', { name: 'Suraj' });
});