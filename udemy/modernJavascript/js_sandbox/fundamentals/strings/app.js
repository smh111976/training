const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello my name is Brad';
const tags = 'web design, web development, programming';
let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat method
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// grab character from string... treat like an array
val = firstName[2];

// indexOf method
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()...
val = firstName.charAt('3');
// get last character of string
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(0, -3); // starts from end and takes last 3

// split().. splits string into an array based on a seperator
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes().. does the string include the given string argument
val = str.includes('Hello');





console.log(val);