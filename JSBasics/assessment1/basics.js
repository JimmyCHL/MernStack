/**
 *
 * 1. Arrow functions - In the class, we probably cover the named functions, anonymous functions and Immediately Invoked Function Expression, but we didn't cover the arrow functions.
 *    For my sight, in terms to call back functions, I think arrow function are used more for javascript now a days after ES6.
 *
 * 2. Three Dot (Spread Operator) - You can have a three dot like (...) operator to concatenate the arrays, objects or if you would like to copy the array or object.
 *
 * 3. Template literals - When can use the backticks (`) to concatenate the strings and variables in a single line. For example `Hello ${name}`
 *
 * 4. Destructuring - We can use the destructuring to assign the values of the object or array to the variables.
 *    For example, var {name, age} = userObject or var [name, age] = userArray
 *
 * 5. Ternary Operator - We can use the ternary operator to check the condition and return the value based on the condition.
 *    For example, var result = (age > 18) ? 'Adult' : 'Child'
 *
 * 6. promises - Promises are used to handle the asynchronous operations in javascript.
 *    For example:
 *    var promise = new Promise((resolve, reject) => {}), then you can await promise in the function to get result or you can use .then().then().catch() to handle the promise.
 *
 * 7. Comparison Operators like == and === : "==" is used to compare the values and "===" is used to compare the values and types.
 *
 * 8. function Constructor - I am still not familiar with java, and not familiar with the Class, but after the class, I understand how to create a class using the function constructor.
 *
 *    For example:
 *
 *   function FuncAsClass(name) {
 *    this.name = name
 *
 *   this.getUserDetails = function (isAdmin) {}}
 *
 *   equal to
 *
 *   class FuncAsClass {
 *        constructor(name) {
 *         this.name = name}
 *
 *  getUserDetails(isAdmin) {  }
 *   }}
 *
 */

var promise = await new Promise((resolve, reject) => {})
