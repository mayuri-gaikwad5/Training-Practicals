const mongoose = require('mongoose');

// 1. Connect to MongoDB via Mongoose
mongoose.connect('mongodb://localhost:27017/schoolDB')
    .then(() => console.log("Connected to MongoDB via Mongoose!"))
    .catch(err => console.error("Connection error:", err));

// 2. Define the Schema (matching your slide)
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 18 },
    createdAt: { type: Date, default: Date.now }
});

// 3. Create the Model
const User = mongoose.model('User', userSchema);

async function runMongooseDemo() {
    try {
        // 4. Create and save a new user using the model
        const newUser = new User({
            name: "Alice Johnson",
            email: "alice@example.com",
            age: 22
        });

        const savedUser = await newUser.save();
        console.log("User saved successfully:", savedUser);

    } catch (error) {
        console.error("Error saving user:", error.message);
    } finally {
        // Close connection when done
        await mongoose.connection.close();
    }
}

runMongooseDemo();