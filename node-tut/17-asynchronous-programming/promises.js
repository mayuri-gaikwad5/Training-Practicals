// const promise = new Promise((resolve,reject)=>{
//     console.log("Async task execution");
//     throw "err";
//     if (false){
//         const person = {name:"Mayuri"}
//         resolve(person)
//     }
//     else{
//         const error={errCode:"1001"};
//         reject(error);
//     }
// });

// promise.then(
//     (val)=>{console.log(val)},
//     (err)=>{console.log(err)}
// ).catch((err)=>console.log(err))
// .finally(()=>{
//     console.log("clean up");
// });


//promises-chaining 

// const p = Promise.resolve("done");

// p.then((val)=>{
//     console.log(val);
//     return "done2"
// }).then((val)=>{
//     console.log(val);
//     return "done3"
// }).then((val)=>{
//     console.log(val);
// });

// const p = Promise.reject("failed");

// p.then((val)=>{
//     console.log(val);
//     return "done2"
// }).then((val)=>{
//     console.log(val);
//     return "done3"
// })
// .then((val)=>console.log(val))
// .catch((val)=> console.log(val));

const makeApiCall = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This API executed in: "+ time)
        },time)
    });
};

let multiApiCall = [makeApiCall(1000),makeApiCall(2000),makeApiCall(3000)]
Promise.all(multiApiCall).then((values)=>{
    console.log(values)
})

