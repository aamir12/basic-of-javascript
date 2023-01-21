const todos  = [
    {
        id:1,
        text:'Take out trash',
        isComplete: true
    },
    {
        id:2,
        text:'Meeting with boss',
        isComplete: true
    },
    {
        id:3,
        text:'Dentist appt',
        isComplete: false
    },
];

console.log(todos);
const todoJSON =JSON.stringify(todos); //to conver array to json; mainly use in HTTP request
console.log(typeof todoJSON);//string

//looping statement
for(let i = 0; i <= 10; i++) {
    console.log("For loop "+i);
}


//While
let i = 1;
while(i<10) {
 console.log(`While loop ${i}`);
 i++;
};

//accessing array of object by for loop
for (let i = 0; i < todos.length; i++) {
    const element = todos[i];
    console.log(element.id);
}

//for of loop
for (const todo of todos) {
    console.log(todo.text)
}

//array methods forEach,Filter,Map
todos.forEach((todo,index) => {
    console.log('index:',index);
    console.log('value',todo);
});

//filter = it is used to filter values
const completedTodos = todos.filter((todo,index)=>{
    return todo.isComplete;
}).map(todo => {  
    todo['age'] = 24;
    return todo;
});
console.log(completedTodos);

//map 
//to perform operation on each value
const updateTodos = todos.map((todo,index)=>{
    todo['age'] = 18;
    return todo;
});
console.log(updateTodos);

//to extract value
const extractTodos = todos.map((todo,index)=>{
    return todo.text;
});
console.log(extractTodos);




// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(10,5));
// console.log(sum(15,20));


