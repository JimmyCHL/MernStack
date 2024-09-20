// Hosting - This is kind of a snapshot of all the javascript, functions, variables present in the whole file.
// (so we call it partially compiled)
// Hosting happens in two ways -
// 1. Function Hoisting - A function gets hoisted with its complete definition and so we will be able to execute the
// same before declaration.
// 2. Variable Hosting - Variable gets hoisted with default value of js (undefined)

console.log(myVar) //undefined

// MyFunc("Hoisted") // This is function hoisting Hoisted
myFunc(myVar) // This is function hoisting undefined

function myFunc() {
  console.log('This is function hoisting ', myVar)
}

var myVar = 'I am s hoisted var'

console.log(myVar)

myFunc(myVar) // This is function hoisting I am a hoisted var

var newVal = 'Interesting' //global variable

function Random() {
  // This will overwrite the global variable
  // newVal = 'Interested' // Interested
  console.log(newVal)

  // var newVal = 'Interested'
  //console.log(newVal) // undefined(Yao - if declared within the function and after this line ), Interesting(Ben - when no declartion inside the funciton ),

  VeryRandom()
  function VeryRandom() {
    if (false) {
      var test = 'Very Interested'
    }
    console.log(newVal)
    console.log(test)
  }

  var newVal = 'Interested1' // Interested
}

Random()
console.log(newVal)

/**
 * Scope
var:

Has function scope. If declared inside a function, it's only accessible within that function. If declared outside, it's globally scoped.
Can be redeclared within the same scope.
let:

Has block scope. It is only accessible within the block (e.g., inside {}) in which it is defined.
Cannot be redeclared in the same scope.

Hoisting
var:

Hoisted to the top of its scope, meaning you can use it before the declaration, but it will be undefined until the declaration is reached.
let:

Also hoisted, but you cannot access it before the declaration. This results in a "temporal dead zone" error.

 */
