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

async function runAdvancedQueryDemo() {
    try {
        console.log("\n--- FINDING USERS ABOVE 25 ($gt) ---");
        
        // Find users where age is greater than 25[cite: 13]
        const usersAbove25 = await User.find({ age: { $gt: 25 } });
        console.log("Users older than 25:", usersAbove25);

    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await mongoose.connection.close();
    }
}

runAdvancedQueryDemo();