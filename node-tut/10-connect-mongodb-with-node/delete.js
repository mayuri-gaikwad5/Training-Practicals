const dbConnect = require('./mongodb');

const deleteData=async ()=>{
    console.log("function called");

    let data = await dbConnect();
    let result = await data.deleteOne(
        { name: 'Samsung S22' }
    );
    console.warn(result);
    if (result.acknowledged) {
        console.log("Data deleted successfully");
    }
}

deleteData();
