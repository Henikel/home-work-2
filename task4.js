let number = 42;
let tens = (number - (number % 10)) / 10;
let units = number % 10;

console.log("Десятки:", tens);
console.log("Одиниці:", units);

