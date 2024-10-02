//October - MERNStack Session - Assessment Number 1 - 2nd October 2024

//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two objects and provides inheritance

// please refer basics.js file

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

var test = 'Robert '
console.log(test, typeof test) // Robert string
test = 0.0266
console.log(test, typeof test) // 0.0266 number
test = false
console.log(test, typeof test) // false boolean
test = { myname: 'Test Me' }
console.log(test, typeof test) // { myname: 'Test Me' } object
test = 25166665
console.log(test, typeof test) // 25166665 number
test = undefined
console.log(test, typeof test) // undefined undefined
test = true
console.log(test, typeof test) // true boolean
test = 'Robert Jr.'
console.log(test, typeof test) // Robert Jr. string
test = null
console.log(test, typeof test) // null object
test = {}
console.log(test, typeof test) // {} object
test = -32767
console.log(test, typeof test) // -32767 number

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function showUserInfo(firstname, lastname, age) {
  console.log(`First Name: ${firstname}, Last Name: ${lastname}, Age: ${age}`)
}

showUserInfo('Robert', 'Jr.', 25)

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

function doaddition(a, b, c) {
  return a + b + c
}

console.log(doaddition(2, 3, 4)) // 9
console.log(doaddition(2)) // NaN, we are trying to add undefined and undefined
console.log(doaddition(2.3, 3)) // NaN, we are trying to add number and undefined
console.log(doaddition('first', 2, 'three')) // first2three, The '+' can be used to concatenate strings.
//when one arg is string, all other args will be converted to string before concatenation

//Q5. Give me an example of your choice for each of the below concepts
// a. closure,
// b. hoisting,
// c. constructor function

/** i choose b hoisting */

console.log(a) // undefined

var a = 10

// console.log(testFunc(10)) testFunc is not defined because we assigned it as a variable

// this will be hoisted to the top of the file same priority to the variable declaration
var testFunc = function (a) {
  console.log(a)
}

testFunc2(10) // 10

// this will be hoisted to the top of the file than the variable declaration
function testFunc2(a) {
  console.log(a)
}

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?

/**
 * In my words, call, apply and bind are the functions which are specific to the function or method to call.
 * The reason behind using these functions is to set the context or scope of the function or method when it is called.
 * bind is used to set the context for the function or method, but it isn't called immediately, and in whatever situation
 * or files it is called, the function or method will always be called with the context set by bind.
 * However, even if apply has same functionality as bind, but it is executed immediately when we set the context/scope/object to it maybe with an array of extra arguments.
 * and it is one time execution only.
 */

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

var student = {
  name: 'Robert',
  age: 25,
  getDetails: function () {
    setTimeout(
      function () {
        console.log(this.name, this.age)
      }.bind(student), // bind(this) or bind(student) will hold the context of student object, both works
      1000
    )
  },
}

student.getDetails()

//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?

var nullObject = Object.create(null)
/** when we create any oject, it will automatically inherit object.prototype. So, creating object with null value will create
 * and object with no prototype and no inheritance from object.prototype
 */

console.log(nullObject)

//Q9. How do we merge different objects properties using Object class function

var User = { name: 'Robert', ID: '1234', userType: 'Paid' }
var Address = { ID: '1234', Current: 'Somewhere on earth' }
var Address2 = { ID: '1234', Delivery: 'Somewhere on SC' }

var newObject = Object.assign({}, User, Address, Address2)
console.log(newObject)

//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned
var Q10 = require('./Q10')
console.log(Q10.product)
