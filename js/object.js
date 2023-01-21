
//Objects

const person = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street:'50 main st',
        city: 'Boston',
        state: 'MA'
    }
}


// console.log(person);
// console.log(person.firstName);
// console.log(person.hobbies);
// console.log(person.address);
// console.log(person.address.city);
//object destructuring
const { firstName, lastName,address:{city} } = person;
console.log(firstName);
console.log(lastName);
console.log(city)

person.email = "john@gmail.com";
let key = 'class';
person[key] = "10th"; //dynamic key
console.log(person);






