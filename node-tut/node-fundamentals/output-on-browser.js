const http=require('http');

// function is defined in this way 
function test(a){
    return a*10;
}

// arrow function is defined in ths way
const test=(a)=>a*100

function dataControl(req,resp){
    resp.write("<h1>Hello, This is Mayuri Gaikwad</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4500);

// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is Mayuri Gaikwad</h1>");
//     resp.end();
// }).listen(4500);
