// create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,56,76);
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed = [22,'Hello',true,undefined,null,{a:1,b:2},new Date()];

let val;

// get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

// get a single value from an array
val = numbers[3];

// instert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// add on to end 
numbers.push(250);
// add on to front
numbers.unshift(120);
//take off from end
numbers.pop();
// take off from front
numbers.shift();
// splice values
numbers.splice(1,2); // fist number is where we want to start, second number is how many we want to remove
// reverse
numbers.reverse();

// concatenate array
val = numbers.concat(numbers2);

// sorting arrays
val = fruit.sort();
val = numbers.sort();

// use the 'compare function'
val = numbers.sort(function(x, y){
  return x - y;
});

// reverse sort
val = numbers.sort(function(x, y) {
  return y - x;
});

// find -- The find() method returns the value of the first element in the array that satisfies the provided testing function.
function under50(num) {
  return num < 50;
}

val = numbers.find(under50); 


console.log(numbers);
console.log(val);