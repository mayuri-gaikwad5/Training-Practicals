const dbConnect=require('./mongodb');
const updateData=async ()=>{
    let data=await dbConnect();
    let result=await data.updateOne(
        { name: 'Samsung S22' },
        { $set: { price: 48000 } }
    );
    console.warn(result);
}
updateData();