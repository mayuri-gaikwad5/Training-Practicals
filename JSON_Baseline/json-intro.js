// JSON Object

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person);

// Converting JavaScript object into JSON string
console.log()
console.log(" Converting JavaScript object into JSON string")
const text = JSON.stringify(person);

console.log(text);
console.log(typeof text);

// Converting JSON string into JavaScript object
 console.log()

console.log("Converting JSON string into JavaScript object");

const parsedPerson = JSON.parse(text);

console.log(parsedPerson);
console.log(parsedPerson.name);