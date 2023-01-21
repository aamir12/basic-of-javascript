const x = 10;

if(x === 10 ) {
    console.log("x is 10");
}

const age = 18;

if(age === 18 ) {
    console.log("you can vote");
}else {
    console.log("you can not vote");
}

let score = 33;
if(score >= 60){
    console.log("First")
}else if( score >= 40  && score < 60) {  //and both condition must be satisfy
    console.log("Second")    
}else if(score> 30 && score < 40){
    console.log("Third")
}else {
    console.log("Fail")
}

let a = 'bkdfdf';
if(a ==='ak' || a === 'bk') { //Either condition need to be satisfy
  console.log(a);
}

let x1 = 9;
const color = x1 > 10 ? 'red' : 'blue';
console.log(color);

//function define
function addNums(num1=3,num2=5){
    console.log(num1+num2);
}

const sumFun = (num1,num2) => console.log(num1+num2); //arrow function

//function calling
addNums(10,45);
addNums(10);
addNums();


sumFun(5,2);