const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'schoolDB';

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);
        const studentsCollection = db.collection('students');

        // Insert multiple documents at once
        const result = await studentsCollection.insertMany([
            { 
                "name": "Alice Johnson", 
                "age": 22, 
                "course": "CS", 
                "email": "alice@example.com", 
                "marks": { "math": 85, "science": 90 }, 
                "city": "Los Angeles" 
            },
            { 
                "name": "Bob Smith", 
                "age": 21, 
                "course": "ME", 
                "email": "bob@example.com", 
                "marks": { "math": 78, "science": 82 }, 
                "city": "Los Angeles" 
            }
        ]);

        console.log(`${result.insertedCount} documents were inserted successfully.`);
        console.log('Inserted IDs:', result.insertedIds);

    } catch (error) {
        console.error('Error inserting documents:', error);
    } finally {
        await client.close();
    }
}

main();