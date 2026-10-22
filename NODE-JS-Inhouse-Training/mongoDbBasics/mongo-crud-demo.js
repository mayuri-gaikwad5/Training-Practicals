const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function runReadDemo() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db('schoolDB');
        const collection = db.collection('students');

        // 1. Find a single document matching the condition[cite: 11]
        const singleStudent = await collection.findOne({ name: "Alice Johnson" });
        console.log("findOne result:", singleStudent);

        // 2. Find all students from a specific city[cite: 11]
        const studentsInCity = await collection.find({ city: "Los Angeles" }).toArray();
        console.log("Students in Los Angeles:", studentsInCity);

        // 3. Find users above a certain age using query operator ($gt)[cite: 11]
        const olderStudents = await collection.find({ age: { $gt: 20 } }).toArray();
        console.log("Students older than 20:", olderStudents);

    } finally {
        await client.close();
    }
}

runReadDemo();