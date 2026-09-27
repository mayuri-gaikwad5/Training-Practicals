// Parsing JSON array

const text2 = '["Ford", "Volvo", "BMW"]';

const cars = JSON.parse(text2);

console.log(cars);
console.log(cars[0]);