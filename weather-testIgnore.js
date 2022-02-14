// Create a variable with the value of kelvin
const kelvin = 293;
//Create a variable with the value of celsius
const celsius = kelvin - 273;
//Create a variable with the value of celsius
//round down the Fahrenheit temperature
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

//Create a variable with the value of newton
//round down the Newton temperature
let newton = Math.floor(celsius * (33 / 100));

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");

console.log(`The temperature is ${newton} degrees Newton.`);

console.log(
  "The temperature of " +
    kelvin +
    " degrees kelvin is about " +
    fahrenheit +
    " degrees Fahrenheit and "
    +
    newton +
    " degrees Newton."
);
