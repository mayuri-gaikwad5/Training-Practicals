const express = require('express');
require('./config'); // Import the database configuration
const Product = require('./product'); // Import the Product model

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// app.post("/create", async (req, res) => {
//     let data = new Product(req.body);
//     let result = await data.save();
//     res.send(result);
//     console.log(req.body); // Log the request body to the console
//     res.send(result);

// });
// app.get("/list", async (req, res) => {
//     let data = await Product.find();
//     res.send(data);
// });

// app.delete("/delete/:id", async (req, res) => {
//     const result = await Product.deleteOne({ _id: req.params.id });
//     res.send(result);
// });

// app.put("/update/:id", async (req, res) => {
//     const result = await Product.updateOne(
//         { _id: req.params.id },
//         { $set: req.body }  
//     );
//     res.send(result);
// });

app.get("/search/:key", async (req, res) => {
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "brand": { $regex: req.params.key } },
                { "category": { $regex: req.params.key } }
            ]
        }
    );
    
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

