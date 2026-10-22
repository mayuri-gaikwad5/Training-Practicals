const { MongoClient } = require('mongodb');

// Connection URL (change if using MongoDB Atlas connection string)
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'schoolDB'; // Name of your database

async function main() {
    try {
        // Connect to MongoDB client
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);
        const studentsCollection = db.collection('students');

        // Insert a single document (matching your slide)
        const result = await studentsCollection.insertOne({
            "name": "Alice Johnson",
            "age": 22,
            "course": "Computer Science",
            "email": "alice@example.com",
            "marks": { "math": 85, "science": 90 },
            "enrolled_date": new Date("2023-09-01")
        });

        console.log(`New document inserted with _id: ${result.insertedId}`);

    } catch (error) {
        console.error('Error connecting to database:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

main();