// Functions and undefined are omitted

const testData = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello");
    },
    address: undefined
};

const testJSON = JSON.stringify(testData);

console.log(testJSON);