//if statement
//let name = 'Vincent';
//let name = 'Briana';
let name = 'Godquin';

if (name === 'Vincent') {
  console.log('Hello Vincent');
}

//if else statement

if (name === "Vincent"){
    console. log('welcome Vincent');
}else{
    console.log('You are not Vincent');
}

//else ..if(for multiple conditions)

if (name === 'Vincent'){
    console.log('Hey Vincent');
}
else if (name === 'Briana'){
    console.log('Hey Briana');
}else{
    console.log('Welcome Guest');
}

// switch statement

let greeting;
switch (name){
    case "Vincent":
        greeting = 'Hello Vincent';
        break;
    case "Briana":
        greeting = 'Hello Briana';
        break;
    default:
        greeting = 'Hello!';
}
console.log(greeting);

// for loop

for (let counter = 0; counter <4;
    counter++){
        console.log(counter)
    }

// while loop

let i = 0;
while (i < 4){
    console.log(i);
    i++;
}

// do...while 
let j = 0;
let countstring = '';// intializing an empty container
console.log(countstring);
do{
    countstring = countstring +j; j++;
}while (j< 7);
console.log(countstring);

 // function declaration

 function greet(){
    console.log('Hello there');
 }

 greet();//calling the function

 function greetPeople(myName/*parameter*/){
    console.log("Hello there" +  myName);
 }
greetPeople(' Vincent'/*argument*/);
greetPeople(' Briana');

function rectangleArea(width, height){
    let area = width * height;
    return area;
}
console.log(rectangleArea(9,10));

function monitorCount(rows, columns){
    return rows * columns;
}

const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors)

//function expression

let calculateArea = function(width, height){
    const area2 = width * height;
    return area2;
}
console.log(calculateArea(3,18));

// arrow function

const squareArea = (length) =>{
    let area3 = length**2;
    return area3; 
}

console.log(squareArea(7));