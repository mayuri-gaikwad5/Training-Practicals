const fs =require('fs')
console.log("Code step by step")
fs.writeFileSync("hello.txt","code step by step")

// its not import u give name as fs only 
// const gs =require('fs').writeFileSync
//gs("hello.txt","code step by step")
// also works

// fs is the file system 
// we need to import it so its not global module 
// similalry we did not import console.log so its global module we can use it directly 
console.log("-->",__dirname)
console.log("-->",__filename)

//core module 
//these are by default modules present inside a feature 
//they are of two types 
// 1. global :- which we dont need to import
// 2. non-global :- which we need to import




