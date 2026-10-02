const {MongoClient} =require('mongodb');
// const MongoClient =require('mongodb').MongoClient;
const database = 'e-commerce';
const url = 'mongodb://localhost:27017';
const Client = new MongoClient(url);
async function getData()

{
    let result=await Client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let response=await collection.find({}).toArray();
    // console.log(response);
}

module.exports=getData;