const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
});

const ProductsModel = mongoose.model("Product", ProductSchema);

// Connect ONCE globally before running your functions
mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");

const saveInDB = async () => {
    let data = new ProductsModel({
        name: "Redmi Note 12",
        price: 15000, 
        brand: "Redmi",
        category: "Mobile"
    });
    let result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    // updateOne returns the result object directly
    let result = await ProductsModel.updateOne(
        { name: "Redmi Note 12" },
        { $set: { price: 16000 } }
    );
    console.log(result);
}

const deleteInDB = async () => {
    let result = await ProductsModel.deleteOne(
        { name: "Redmi Note 12" }
    );
    console.log(result);
}

const findInDB = async () => {
    let result = await ProductsModel.find();
    console.log(result);
}

findInDB(); // Call the function to find and log all products in the database