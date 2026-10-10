// console.log("Task start")
// function asyncTask(cb){
//     console.log("Task running");
//     setTimeout(cb,0);
// }

// asyncTask(()=> console.log(name));
// console.log("Task completed");
// const name="Mayuri";

function asyncTask(cb){
    console.log("Task running");
    setTimeout(()=>{
        cb(null,"This is data from server");
    },0);
}

// asyncTask((err,data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("data", data);
//     }
// })

function makeApiCall(cb){
    setTimeout(()=>{
        console.log("API call completed");
    },0)
}

makeApiCall(()=>{
    makeApiCall(()=>{
        asyncTask(()=>{
            asyncTask(()=>{
                asyncTask(()=>{
                    
                })
            })
        })
    })
})

console.log("This is Async task exectuion");
console.log("This is Async task exectuion");
console.log("This is Async task exectuion");
console.log("This is Async task exectuion");
console.log("This is Async task exectuion");
console.log("This is Async task exectuion");