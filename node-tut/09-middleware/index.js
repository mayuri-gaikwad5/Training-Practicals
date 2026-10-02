const express = require('express');
const app = express();//instance of express
const PORT = 5000;
const reqFilter = require('./middleware');
const route = express.Router();



// const reqFilter = (req, resp, next) => {
//     if(!req.query.age) {
//         resp.send('Please provide age');
//     }
//     else if(req.query.age < 18) {
//         resp.send('You must be at least 18 years old');
//     } else {
//         next(); // Call the next middleware function
//     }
// };


// app.use(reqFilter);
route.use(reqFilter); // Apply the middleware to all routes in the router
app.get('/', (req, resp) => {
    resp.send('Welcome to Home Page');
    
});
app.get('/users', reqFilter,(req, resp) => {
    resp.send('Welcome to Users Page');
});


route.get('/about', (req, resp) => {
    resp.send('Welcome to About Page');
});

route.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact Page');
});

app.use('/', route);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});   
