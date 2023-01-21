//alert('Hello');
console.log("Hello World");
var x = "aamir";

console.log(x);
console.error("undefine variable");
console.warn("Warning");


//variables
//keywords let,const,var
let score = 98;
console.log(score);

score = 78;
console.log(score);

//const PI = 3.14;
//PI = 785454; //It will throw error

//Data Types
//String, Numbers, Boolean, null, undefined
let isValid = true; //false boolean
let name = 'Jhon'; //String
let age = 35; //number

let p = null;
let q = undefined;


console.log(typeof name);
console.log(typeof isValid);
console.log(typeof age);
console.log(typeof p);
console.log(typeof q);



let firstName = "aamir";
let lastName = "khan";
//Concatenation;
let fullName = firstName +' '+ lastName;
console.log(fullName);

//Template string
fullName = `${firstName} ${lastName}`;
console.log(fullName);


//String property
//https://www.w3schools.com/jsref/jsref_obj_string.asp

const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s[1]);//access character by index number
console.log(s.substring(0,5).toUpperCase()) //method chaining

console.log(s.split(',')) //convert string to array;
//array is a collection of any thing
//['adf','sdfsd',546,true]

let technologies = "PHP,JAVA,HTML,CSS";
console.log(technologies.split(','));

//Arrays - variables that hold multipes
const numbers = new Array(1,2,3,4,5); //constructor method
console.log(numbers);

const fruits = ['apple','mongo','orange'];
console.log(fruits);
console.log(fruits[2]);

//fruits[3] = "grapes"; //must know index
fruits.push("grapes"); //add value at last
fruits.unshift("strawnerries"); // at value at start
console.log(fruits);
fruits.pop(); //delete from end
console.log(fruits); 
fruits.shift(); //delete from start
console.log(fruits);


console.log(Array.isArray('hello')); //to check any value is array or not;
console.log(Array.isArray(fruits));

