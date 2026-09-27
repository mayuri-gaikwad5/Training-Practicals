// Stringifying Date

const today = new Date();

const dateData = {
    name: "John",
    today: today
};

const dateJSON = JSON.stringify(dateData);

console.log(dateJSON);