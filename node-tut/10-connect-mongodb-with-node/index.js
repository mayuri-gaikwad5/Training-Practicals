const getData=require('./mongodb');

// getData().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })

const main=async ()=>{
    let data =await getData();
    data=await data.find().toArray();
    console.warn(data)
}

// console.warn(getData())
main()

