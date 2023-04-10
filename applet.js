//gives variable kelvin value of 293
const kelvin = 290;
//calculates celsius based on kelvin
let celsius = kelvin - 273;
//calculates fahrenheit based on celsius
let fahrenheit = celsius * (9/5) + 32;
//makes fahrenheit a whole number
let temperature = (Math.floor(fahrenheit));
//prints the temp in kelvin
console.log(`The original temperature is ${kelvin} kelvin`);
//prints the temp in fahrenheit
console.log(`That is ${temperature} degrees Fahrenheit`);
//prints the temp in newton
let newton = celsius * (33/100);
newton = Math.floor(newton)
console.log(`And ${newton} Newton`);