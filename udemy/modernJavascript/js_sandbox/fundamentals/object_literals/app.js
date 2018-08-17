const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 41,
  email: 'steve@aol.com',
  hobbies: ['music','sports'],
  address: {
    city: 'Janesville',
    state: 'Wisconsin'
  },
  getBirthYear: function() {
    return 2017 - this.age;
  }
}
let val;

val = person;

// get specific value
val = person.firstName;
val = person['fistName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Scott', age: 41},
  {name: 'Nancy', age: 25}
];

for(let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}