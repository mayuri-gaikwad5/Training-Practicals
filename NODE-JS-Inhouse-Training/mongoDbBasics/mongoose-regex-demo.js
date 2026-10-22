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

async function runRegexQueryDemo() {
    try {
        console.log("\n--- FIND USERS WHOSE NAME CONTAINS 'john' (Case-insensitive) ---");
        
        // Find users whose name contains "john" case-insensitively[cite: 15]
        const users = await User.find({ name: /john/i });
        console.log("Matching users:", users);

    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await mongoose.connection.close();
    }
}

runRegexQueryDemo();