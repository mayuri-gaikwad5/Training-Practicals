const express = require("express");

const app = express();

app.use(express.json());

const users = [
    { id: 1, name: "Mayuri", email: "mayuri@example.com" },
    { id: 2, name: "Riya", email: "riya@example.com" }
];

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

app.post("/api/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// in terminal
// Invoke-RestMethod `
//   -Uri "http://localhost:3000/api/users" `
//   -Method Post `
//   -ContentType "application/json" `
//   -Body '{"name":"Aarav","email":"aarav@example.com"}'

app.put("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[userIndex] = {
        id: id,
        name: req.body.name,
        email: req.body.email
    };

    res.json(users[userIndex]);
});


// in terminal 
// Invoke-RestMethod `
//   -Uri "http://localhost:3000/api/users/3" `
//   -Method Put `
//   -ContentType "application/json" `
//   -Body '{"name":"Aarav Sharma","email":"aarav.sharma@example.com"}'

app.patch("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (req.body.name !== undefined) {
        user.name = req.body.name;
    }

    if (req.body.email !== undefined) {
        user.email = req.body.email;
    }

    res.json(user);
});


// in terminal
// Invoke-RestMethod `
//   -Uri "http://localhost:3000/api/users/3" `
//   -Method Patch `
//   -ContentType "application/json" `
//   -Body '{"name":"Aarav Patil"}'

app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});

//in terminal
// Invoke-RestMethod `
//   -Uri "http://localhost:3000/api/users/3" `
//   -Method Delete