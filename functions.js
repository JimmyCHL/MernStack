// A function is a block of code which gives behavior we expect to do some job.
// e.g < Area -> square(param), rectangle(length, width), circle(radius), x -> Sphere() >
// In Js, functions are not necessarily needs to be directly associated with class object. It can work independently.
// Functions are pure functions, a pure function will always return something.
// If a user doesn't return anything from the function JS runtime will attach a default (undefined) value to it. And
// it can be demonstrated on the browser console.

// keyword function - function name - (parameters)
function name(params) {
  // definition of the function
  //scope of the function
}

// In javascript, functions/method can choose or bind to which class to be associated with and call it from.
// square.call(Area)

//1. Named function
function Print() {
  console.log('Jimmy')
}

Print() // calling a function or function invocation.

//2. Function Expression
var myFunc = function multiply(a, b) {
  return a * b
}

//3. Function Expression
var myFunc = function (a, b) {
  // unnamed function
  return a * b
}

console.log(myFunc(5, 6))

//4. IIFE - Immediately invocable Function Expression
;(function life(name) {
  console.log('Name is registered as - ', name)
})('Anthony')

// life() // this will throw an error because it is not defined globally.

//5.Constructor Function - have properties associated with them and those can be initialized via constructor and
// be further used as classes

function User(name, age, address) {
  this.name = name
  this.age = age
  this.address = address

  this.getUserDetails = function () {
    console.log('User information Entered is -', this.name, this.age, this.address)
  }
}

var userObj = new User('Jimmy', 25, 'New York')

console.log(userObj.getUserDetails())

userObj.session = 'MERNStack' // adding the new property (this is with the help of protoype)

// overriding the existing definition
userObj.getUserDetails = function () {
  console.log('User information Entered is -', this.name, this.age, this.address, this.session)
}

userObj.getUserDetails()

var newUserObj = new User('New User', 30, 'New Jersey')
newUserObj.getUserDetails()

//6. nested functions

var val = 15
function A(a) {
  return function B(b) {
    return function C(c) {
      return function D(d) {
        return a + b + c + d + val
      }
    }
  }
}

var objA = A(5)
var objB = objA(5)
var objC = objB(5)
var objD = objC(5)

console.log(objD) //35

// chain execution of nested functions
console.log(A(1)(2)(3)(4)) // 25
