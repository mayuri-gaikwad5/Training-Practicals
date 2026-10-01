const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;
const publicPath = path.join(__dirname, 'public');

app.get('/', (_, resp) => {
    resp.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/aboutme', (_, resp) => {
    resp.sendFile(path.join(publicPath, 'about.html'));
});

app.get('/home', (_, resp) => {
    resp.sendFile(path.join(publicPath, 'home.html'));
});

// Named wildcard route for Express 5
app.get('/*splat', (_, resp) => {
    resp.status(404).sendFile(path.join(publicPath, 'help.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});