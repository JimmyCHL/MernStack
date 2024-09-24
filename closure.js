//OOPs
//Polymorphism - Overloading (over-writing) and Overriding (by inheriting in constructor function we can override)
//Inheritance - is possible, prototype{ an object that links the child object to base function} : __proto__
//Abstractions - Abstract function/class are not present but function can do abstract implementation
//Encapsulation - We limit the access of properties and fields via access modifiers, we dont have any keywords for this
// we can manipulate the function to restric the access of function variables

// Closures - A paradigm when a function contains another function and has some fields kept as private, some as public
// by returning them through child function
// function retruning another function is closure example

//A closure in JavaScript occurs when a function is defined inside another function and retains access to its parent function's scope, even after the parent function has executed.

function Accounts(name, age, balance, type) {
  //Private scope
  var AccName = name
  var AccHolderAge = age
  var AccBalance = balance
  var AccType = type
  var password = 'xyz' // private
  var AccPin = '9682' // private

  //

  var accountDetails = function (name, pwd) {
    //things returned from this function are public
    if (pwd == password) {
      return {
        // short hand from ES6, if variable name (from which we read the value) and key refers to same name.
        AccName,
        AccHolderAge,
        AccBalance,
        AccType,
      }
    } else {
      return 'Password is incorrect!!'
    }
  }

  //the entities returned via function
  return accountDetails
}

var acctObj = Accounts('Mark', 21, '$200000', 'Credit')

console.log(acctObj('Mark', 'xyz'))
console.log(acctObj('Mark', '3123'))

// Create your own example of closure and share with me on your git hub link
