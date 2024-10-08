// To create a variable we only have var keyword in JS and which has some features like var hoisting which sometimes is confusing.

// In ES6 we got two new variable types

// let - isl ike var but doesn't support hoisting and has some more features
// const - is there to create constant declarations to be used in application

// Const - are immutable and can not be re-assigned

//1. Declarations - same name variable
// var - we can declare and re-declare as many times as we want
// let/const - we can declare once but can not declare again

var newVar = 'SomeValue'
var newVar = 'SomeValue2'

let newLet = 'SomeValue Let'
// let newLet = "SomeValue Let"; // re-declaration not allowed
newLet = 'SomeValue Let 2' // re-assign can be done

const newConst = 'SomeValue Const'
// const newConst = "SomeValue Let 2"; // re-declaration not allowed

// newConst = 'SomeValue Const 2' // re-assign not allowed

const user = {}

// user = {name: "Jugue"} // Assignment to constant variable - not allowed

user.name = 'Micheal' // we are updating value via reference

console.log(user)

//2. Define and Assign value later
let newLet2

newLet2 = 'SomeValue New LET2'

// const - we need to assign the value as soon as we declare it

// const newConst2; // now allowed - declaration must be initialized
// newConst2 = "SomeValue New LET2"; - not allowed

//3. var is functional scope, let and const are lexical <block> scope

{
  var newVar = 'SomeValue2' // var doesn't follow the boundary of block {}, but it limited in function
  let newLet1 = 'SomeValue Let'
  const newConst1 = 'SomeValue Const'

  console.log(newLet1)
  console.log(newConst1)
}

console.log(newVar)
// console.log(newLet1) // not allowed - it is not defined
// console.log(newConst1) // not allowed - it is not defined

//4. Hoisting not present for let and const
// console.log(newLet3) // Cannot access 'newLet3' before initialization
// console.log(newConst2)

let newLet3 = 'SomeValue Let'
const newConst2 = 'SomeValue Const'

//5. Evaluation of let and const are done before passing them to function.
// this is different in comparison to var where the value is evaluated at the time of function execution

// var index = 1 // function scoped and evaluated at the time of execution

for (let index = 0; index < 5; index++) {
  setTimeout(function () {
    console.log(index) // for let, 01234, for var, 55555
  }, 3000)
}

// console.log(index) // for let, throw error, for var, 5

/**
 * In JavaScript, when you declare a variable with let inside a for loop (or any block), it creates a new block scope for that variable.
 * This is different from using var, which has function scope or global scope, depending on where it’s declared.
 */

let j = 1 // var j = 1
for (j = 0; j < 5; j++) {
  setTimeout(
    function (jk) {
      console.log('inner jk')
      console.log(jk) // for let, 01234, for var, 01234
    }.bind(this, j),
    3000
  )
  console.log(j) // for let and var 0, 1, 2, 3, 4
}

var k = 1 // var k = 1
for (k = 0; k < 5; k++) {
  setTimeout(function () {
    console.log('inner k')
    console.log(k) // without bind, for var or let, it is always 5, 5, 5, 5,5
  }, 3000)
  console.log(k) // 0, 1, 2, 3, 4
}

var l = 1 // let l = 1
for (l = 0; l < 5; l++) {
  ;(function (params) {
    setTimeout(function () {
      console.log('inner l')
      console.log(params) //0, 1,2,3,4
    }, 3000)
  })(l) //l - is evaluated immediately
  console.log(l) // 0, 1, 2, 3, 4
}
