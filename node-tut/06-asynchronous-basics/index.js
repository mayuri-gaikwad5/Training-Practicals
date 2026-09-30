let a = 10
let b = 0
// console.log("Start exe...")

// setTimeout(()=>{
//     console.log("logic exe...") 
// },2000)

// console.log("complete exe...")

setTimeout(() => {
    b = 20;
}, 2000)
console.log(a + b)

// Handle asynchronous data in node.js


let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 2000)
})
waitingData.then((data)=>{
    b=data;
    console.log(a + b)
})
