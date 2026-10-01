const express = require('express');
const app = express();
const PORT = 5000;
app.get('', (req, resp) => {
    console.log('data sent by browser', req.query.name);
    resp.send(`<h1>Welcome, this is Home Page</h1>
        <a href="/about">Go to About Page</a>`);
});

app.get('/about', (req, resp) => {
    resp.send(`
        <input type="text" placeholder="User name" value="${req.query.name}" />
        <button>Click Me</button>
        <a href="/">Go to Home Page</a>
        `);
});

app.get('/help', (req, resp) => {
    resp.send([{
        name: 'mayuri',
        email: 'mayuri@test.com'
    },
    {
        name: 'soham',
        email: 'soham@test.com'
    }]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
