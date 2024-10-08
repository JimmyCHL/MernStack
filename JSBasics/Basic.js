// comment for code - command + c
/**
 * Comment for code
 */

// semi-colons is optional in JS

console.log('Hello World!!')

//
let i = 1000

// setInterval(function () {
//   console.log(i)
//   i++
// }, 1000)

// REPL - Read, Evaluate, Print and Loop
// Stop execution - Ctrl + C

function sum(a, b) {
  console.log(this)
  return a + b
}
console.log(typeof sum) // function
// In JAVA,
// Arithmatic - is class and sum is class member (gives behavior)
// Arithmatic obj = new Arithmatic()
// obj.sum(10, 20)

console.log(sum(6, 10)) //function invocation, calling
var sumValue = sum(6, 10)
console.log(sumValue)

var sumValue = 2000

console.log(sumValue)

sumValue = 'This was initialized as number but now is a string'

console.log(sumValue)
