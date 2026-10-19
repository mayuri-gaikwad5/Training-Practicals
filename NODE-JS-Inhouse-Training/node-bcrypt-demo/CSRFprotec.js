const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: false })); // Required to parse form data
app.use(cookieParser());
app.use(csrf({ cookie: true })); // Enables CSRF protection using cookies

// Route to render the form and pass the CSRF token to the view
app.get('/form', (req, res) => {
    // Note: If you aren't using a view engine like EJS, 
    // you can send req.csrfToken() as JSON to test it via Postman
    res.json({ csrfToken: req.csrfToken() });
});

// Route to handle form submission (protected automatically by csurf middleware)
app.post('/submit', (req, res) => {
    res.send('Form data submitted successfully!');
});

app.listen(3000, () => {
    console.log('CSRF Security server running on http://localhost:3000');
});