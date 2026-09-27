// Nested JSON Object

const student = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(student);
console.log(student.address.city);

console.log()
console.log("converted javascript to json format")
const jsonData = JSON.stringify(student);

console.log()
console.log(jsonData);