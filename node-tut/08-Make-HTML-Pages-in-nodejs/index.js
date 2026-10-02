const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('/', (_, resp) => {
    resp.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/aboutme', (_, resp) => {
    resp.sendFile(path.join(publicPath, 'about.html'));
});

app.get('/home', (_, resp) => {
    resp.sendFile(path.join(publicPath, 'home.html'));
});

app.get('/profile', (_, resp) => {
    const user ={
        name:'Mayuri Gaikwad',
        email:'mayuri.gaikwad@example.com',
        city:'Solapur',
        skills:['HTML','CSS','JavaScript','Node.js']    
    }
    resp.render('profile', { user });
});

app.get('/login', (_, resp) => {
    resp.render('login');
});
// Named wildcard route for Express 5
app.get('/*splat', (_, resp) => {
    resp.status(404).sendFile(path.join(publicPath, 'help.html'));
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});