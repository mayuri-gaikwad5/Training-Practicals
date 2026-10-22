const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schoolDB')
    .then(() => console.log("Connected to MongoDB via Mongoose!"))
    .catch(err => console.error("Connection error:", err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 18 },
    city: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function runLogicalQueryDemo() {
    try {
        console.log("\n--- FIND USERS YOUNGER THAN 20 OR OLDER THAN 40 ($or) ---");
        // Using $or operator[cite: 14]
        const usersByOr = await User.find({ $or: [{ age: { $lt: 20 } }, { age: { $gt: 40 } }] });
        console.log("Result ($or):", usersByOr);

        console.log("\n--- FIND USERS NOT RESIDING IN 'New York' ($ne) ---");
        // Using $ne operator[cite: 14]
        const usersByNe = await User.find({ city: { $ne: "New York" } });
        console.log("Result ($ne):", usersByNe);

    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await mongoose.connection.close();
    }
}

runLogicalQueryDemo();