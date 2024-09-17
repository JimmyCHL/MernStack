// Javascript is a interpreted language <no compile time error, line by line execution and results on the fly>
// Hoisting - feature allows functions to get executed even before their declaration.
// Due to hoisting feature JS is also said to be a partially compiled language.

// single line command + / for mac and ctrl + / for windows

/**
 multiline comments
 */

//case sensitive
var name = 'some name'
var Name = 'Some More Name'

//we can use special chars ($,_)
var name$, _Name
// var New Name, NewName@, #newName // (space and other special chars are not allowed except * (for generator function)

// this can be alphanumeric, literal name should not be starting with number
var name1 //, 1name(not allowed)

//keywaords -
//var (classical or vanilla js)
//let and const (from ES6)

// expressions and operators
// && - and, || - or, ! - not, =, ==, ===, ?(ternary operator)
// > , < , >=, <=, !=, !==

var myName = 'Test'
var age = '20' // type is string

// == : compares the value
// === : compares the type and the value both

// this will give true
if (myName == 'Test' && age == 20) {
  // (myName == "Test" && age === 20 ) - this will give false
  console.log('Your name and age are correct')
} else {
  console.log('Your name and age are incorrect')
}

// condition ? the result if condition is true: the result if condition is false
age >= 20 ? console.log('valid voter') : console.log('invalid voter')

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// while (condition) {

// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// array.forEach(element => {

// });

var x = 21 === '21' // false
console.log(x)
console.log(typeof x) // boolean

// dynamic type change (type casting), assignment

x = 'Ben Ma'
console.log(x)
console.log(typeof x)
