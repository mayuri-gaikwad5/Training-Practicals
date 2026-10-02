const getData = require('./mongodb');

const insert = async () => {
    const db = await getData();
    // console.log("Inserting data");
    // console.log(db);
    const result = await db.insertMany([{
        name: 'Samsung S22',
        brand: 'Samsung',
        price: 45000,
        category: 'Mobile'
    },
    {
        name: 'Samsung S23',
        brand: 'Samsung',
        price: 55000,
        category: 'Mobile'
    },
    {
        name: 'Samsung S24',
        brand: 'Samsung',
        price: 65000,
        category: 'Mobile'
    }]);

    if (result.acknowledged) {
        console.log("Data inserted successfully");
    }
}
insert();
