const fs =require('fs');
const path = require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is a single text file');


// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })


// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })

// fs.rename(filePath,`${dirPath}/orange.txt`,(err)=>{
//     if(!err) console.log("file is updated")
// })


fs.unlinkSync(`${dirPath}/orange.txt`)

// what is buffer 
// it is a temprorary memory 

