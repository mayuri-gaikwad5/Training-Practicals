const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schoolDB')
    .then(() => console.log("Connected to MongoDB via Mongoose!"))
    .catch(err => console.error("Connection error:", err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 18 },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function runProjectionDemo() {
    try {
        console.log("\n--- METHOD 1: Using object projection (Excluding _id) ---");
        // Exclude _id and include only name and email[cite: 12]
        const usersMethod1 = await User.find({}, { _id: 0, name: 1, email: 1 });
        console.log("Result 1:", usersMethod1);

        console.log("\n--- METHOD 2: Using .select() for Projections ---");
        // Use .select() string syntax[cite: 12]
        const usersMethod2 = await User.find().select('name email -_id');
        console.log("Result 2:", usersMethod2);

    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await mongoose.connection.close();
    }
}

runProjectionDemo();