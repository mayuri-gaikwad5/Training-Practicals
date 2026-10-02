module.exports= reqFilter = (req, resp, next) => {
    if(!req.query.age) {
        resp.send('Please provide age');
    }
    else if(req.query.age < 18) {
        resp.send('You must be at least 18 years old');
    } else {
        next(); // Call the next middleware function
    }
};