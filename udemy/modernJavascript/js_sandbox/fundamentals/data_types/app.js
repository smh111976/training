// Primitive Types
// string
const name = 'John Doe';
// number
const age = 45;
// boolean
const hasKids = true;
// null
const car = null;
// undefined
let test;
// symbol
const sym = Symbol();

// Reference Types - Object
// Array
const hobbies = ['movies', 'music'];
// Object Literal
const address = {
  city: 'Boston',
  state: 'MA'
}
// Date
const today = new Date();


// find out data type
// string
console.log('name is of type: ' + typeof name);
// number
console.log('age is of type: ' + typeof age);
// boolean
console.log('hasKids is of type: ' + typeof hasKids);
// reads 'object' but is actually 'null', which is a primitive... kind of a bug
console.log('car is of type: ' + typeof car);
// undefined
console.log('test is of type: ' + typeof test);
// symbol
console.log('sym is of type: ' + typeof sym);
// Object
console.log('hobbies is of type: ' + typeof hobbies);
// Object
console.log('address is of type: ' + typeof address);
// Object
console.log('today is of type: ' + typeof today);