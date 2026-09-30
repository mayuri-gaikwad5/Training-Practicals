const app =require('./app')
// var a=20;
// var b=30;
// var c=40;

// console.warn(a+b+c)


var x='20';
if(x===20){
    console.log("matched")
}


for(i=0;i<=10;i++)
{
    console.log(i)
}


const arr=[2,4,7,1,3,8,3];
console.log(arr)
console.log(arr[0])


console.log(app.x)
console.log(app.y)
console.log(app.z())


let result=arr.filter((item)=>{
    return item===3
})

console.warn(result)


console.log()
console.log()

console.log("this is the way we use the package that we have installed and are present in pakage.json")

const colors=require('colors');
console.log("hello".red);

//interview question 
//node js is a single threaded - it runs one command at a time
