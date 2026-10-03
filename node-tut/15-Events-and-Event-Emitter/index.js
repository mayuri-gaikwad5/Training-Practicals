const express = require('express');
const EventEmitter = require('events');
const app = express();

const event=new EventEmitter();

let count=0;

event.on("countApi",()=>{
    count++;
    console.log(`Event called ${count} times`);
})

app.get('/', (req, resp) => {
    resp.send("api called");
    event.emit("countApi");
});

app.get("/search", (req, resp) => {
    resp.send("search api called");
});

app.get("/update", (req, resp) => {
    resp.send("update api called");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});