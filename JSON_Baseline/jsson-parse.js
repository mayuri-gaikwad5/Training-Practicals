// JSON.parse() with Reviver Function

const text3 = '{"name":"John","age":"30"}';

const person2 = JSON.parse(text3, function (key, value) {

    if (key === "age") {
        return Number(value);
    }

    return value;
});

console.log(person2);
console.log(person2.age);
console.log(typeof person2.age);


// Handling invalid JSON

const text4 = "{name:'John'}";

try {
    const person3 = JSON.parse(text4);
    console.log(person3);
}
catch (error) {
    console.log("Invalid JSON:", error.message);
}