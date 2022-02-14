// Create a variable with the value of kelvin
//const kelvin = document.getElementById("kelvin").value;

//Create a variable with the value of celsius
//const celsius = kelvin - 273;

//Create a variable with the value of fahrenheit
//round down the Fahrenheit temperature
//let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

//Create a variable with the value of newton
//round down the Newton temperature
//let newton = Math.floor(celsius * (33 / 100));

function getCelsius(){
  const kelvin = document.getElementById("kelvin").value;
  let celsius = kelvin - 273;
  var newText = document.createElement("h2")
  var result = document.createTextNode("The temperature of " +  kelvin +  " degrees kelvin is about " +  celsius +
  " degrees celsius");
  newText.appendChild(result)
  var currentDiv = document.getElementById("div-result");
  currentDiv.appendChild(newText)
}

function getFahrenheit(){
  const kelvin = document.getElementById("kelvin").value;
  let celsius = kelvin - 273;
  let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
  var newText = document.createElement("h2")
  var result = document.createTextNode("The temperature of " +  kelvin +  " degrees kelvin is about " +  fahrenheit +
  " degrees fahrenheit");
  newText.appendChild(result)
  var currentDiv = document.getElementById("div-result");
  currentDiv.appendChild(newText)
}

function getNewton(){
  const kelvin = document.getElementById("kelvin").value;
  let celsius = kelvin - 273;
  let newton = Math.floor(celsius * (33 / 100));
  var newText = document.createElement("h2")
  var result = document.createTextNode("The temperature of " +  kelvin +  " degrees kelvin is about " +  newton +
  " degrees newton");
  newText.appendChild(result)
  var currentDiv = document.getElementById("div-result");
  currentDiv.appendChild(newText)
}


//console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");

//console.log(`The temperature is ${newton} degrees Newton.`);

//console.log("The temperature of " + kelvin + " degrees kelvin is about " + fahrenheit + " degrees Fahrenheit and " + newton + " degrees Newton.");
