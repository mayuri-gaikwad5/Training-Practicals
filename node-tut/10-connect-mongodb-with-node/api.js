const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const express = require('express');
const app = express();

app.use(express.json());

// GET Route: Fetch all products
app.get('/', async (req, resp) => {
    let collection = await dbConnect();
    let data = await collection.find().toArray();
    resp.send(data);
});

// POST Route: Insert product(s)
app.post('/', async (req, resp) => {
    let collection = await dbConnect();
    let result;

    // Handle both single objects and arrays dynamically
    if (Array.isArray(req.body)) {
        result = await collection.insertMany(req.body);
    } else {
        result = await collection.insertOne(req.body);
    }

    resp.send(result);
});

app.delete('/:id', async (req, resp) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });
    resp.send("done")
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});