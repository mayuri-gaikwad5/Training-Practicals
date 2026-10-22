// const mongoose = require('mongoose');

// // 1. Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/schoolDB')
//     .then(() => console.log("Connected to MongoDB via Mongoose!"))
//     .catch(err => console.error("Connection error:", err));

// // 2. Define Schema & Model (matching previous slide)
// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     age: { type: Number, min: 18 },
//     createdAt: { type: Date, default: Date.now }
// });

// const User = mongoose.model('User', userSchema);

// // 3. Filter data: Finding a user by email[cite: 12]
// User.findOne({ email: 'john@example.com' })
//     .then(user => {
//         console.log("Found user:", user);
//     })
//     .catch(err => {
//         console.error("Error finding user:", err);
//     })
//     .finally(() => {
//         mongoose.connection.close();
//     });


const mongoose = require('mongoose');

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

async function testQuery() {
    try {
        // Let's search for Alice instead
        let user = await User.findOne({ email: 'alice@example.com' });
        
        if (!user) {
            console.log("User not found. Creating Alice...");
            user = await User.create({
                name: "Alice Johnson",
                email: "alice@example.com",
                age: 22
            });
        }
        
        console.log("Found user result:", user);
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await mongoose.connection.close();
    }
}

testQuery();