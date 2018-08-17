const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E; //Euler's number
val = Math.round(2.4);
val = Math.ceil(2.4); // round up
val = Math.floor(2.8); // round down
val = Math.sqrt(64); // square root
val = Math.abs(-3); // gives absolute number
val = Math.pow(8, 2); // 64 - power of a number
val = Math.min(2,33,4,1,55,6,3,-2); // gives minimum number
val = Math.max(2,33,4,1,55,6,3,-2); // gives maximum number
val = Math.random(); // gives random number
val = Math.random() * 20 + 1; // gives random number between 0 and 20
val = Math.floor(Math.random() * 20 + 1); // gives random number between 1 and 20.. with no decimals

console.log(val);