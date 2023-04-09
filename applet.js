//gives variable kelvin value of 293
const kelvin = 300;
//calculates celsius based on kelvin
let celsius = kelvin - 273;
//calculates fahrenheit based on celsius
let fahrenheit = celsius * (9/5) + 32;
//makes fahrenheit a whole number
let temperature = math.floor(fahrenheit);
//prints the temp in fahrenheit
console.log(`The temperature is ${temperature} degrees Fahrenheit`);