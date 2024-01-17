console.log(7 + 7);

console.log(typeof 90);
console.log(typeof '90');
console.log(typeof true);

// How to declare a variable
var myAge = 90;
let myName = 'Vincent';
const myGender = 'boy';

console.log(myAge, myName, myGender);
console.log(typeof myAge, typeof myName, typeof myGender);

// expressions
let  number1 = 90;
let number2 = 80;

let sum = number1 + number2;//constant expression

console.log(sum);


/* operators
They are:
 + - * / %  these are arithmetic operators
 =(is) += -= *= /= %= these are assignment operators
 ++(plus 1) --(minus 1) these are increment/decrement operators
 ==(loosly equal) ===(strictly equal) !=(not equal)  !==  >(more than) <(less than) >=(greater or equal to) <=(less or equal to)  these are comparison operators 
 &&(and(both need to be true)) ||(or(either can be true)) these are logical operators !
 ? : these are conditional operators
*/

let weather = 'sunny';
let mood = 'happy';

let isHappy = weather === 'sunny' && mood === 'happy';
console.log(isHappy);

let isHappy2 = weather === 'sunny' || mood === 'happy';

console.log(isHappy2);