/* Arrays and objects  */
let array1 = ['a', 'b', 'c', 'd', 'e'];
let array2 = [1, 2, 3, 4, 5];//array literal

let person = {
    name: 'Sung',// key value pair
    age: 15,
    occupation: 'student'
}

let array3 = []
console.log(array3)
console.log(array1[0]);// shows the first element in the array
console.log();


//this function adds a value to an empty array
function addToEmptyArray(value, array) {
   array.push(value);
}         //below is an example of how to use the function
addToEmptyArray('a', array3);
console.log(array3);
//updating an array
let seasons = ['spring', 'summer', 'fall', 'winter'];
console.log(seasons);
seasons[2] = 'autumn';//changes the value of the third element in the array
console.log(seasons);

//nest arrays