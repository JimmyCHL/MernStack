// 1. OutPut of the following

function sum(x, y) {
  if (y !== undefined) {
    return x + y
  } else {
    return function (y) {
      return x + y
    }
  }
}

console.log(sum(2, 3)) // Outputs - 5
console.log(sum(2)(3)) // Outputs - 5

// 2. Create a function to populate user details.
//   func - populateDetail prints Address and accepts a callBackFunction which prints Name, Age and Topic

const address = {
  address: '123, Main Street, Bangalore',
  name: 'Jimmy',
  age: 30,
  topic: 'Javascript',
}

const callBackFunc = function () {
  console.log(`${this.name} is ${this.age} and like ${this.topic} as a topic.`)
}

const populateDetail = (address, callBackFunc) => {
  console.log(address.address)
  callBackFunc.call(address) // immediately invoking the function
  callBackFunc.bind(address)() // bind address scope, then invoking the function
}

populateDetail(address, callBackFunc)

// 3.  Javascript currying is achieved by returning functions from functions.
// Here, the outer function (print) supplies the printing to be used while the returned function allows the caller to supply the name of the printer.

function print(printing) {
  return (function (printer) {
    console.log(printing + ', ' + printer + '!')
  })('Hello')
}
// print('something') // The output is - something, Hello! if we don't have the second print function below.
// print('something') // The output is - nothing, because below print function is overwriting the above print function and we don't call the inner function which is returned by the outer function yet
print('Something')('here') // The output is - Something, here!

function print(printing) {
  return function (name) {
    console.log(printing + ', ' + name + '!')
  }
}
// print('something') // The output is - nothing, because we don't call the inner function which is returned by the outer function yet
print('My Name Is ')('Jimmy') // The output is - My Name Is , Jimmy!

// 4. output of the following
console.log(typeof 1) // this will return string number like "number"
console.log(typeof typeof 1) // so this will return string "string"

// 4.1 Example of bind function on browser, we must be able to change the object on click
// will be in the practice_3.html file

// 4.2 Create object without prototype and then inherit it further
const obj = Object.create(null)
console.log(obj.__proto__) // this will return null / undefined

const user = {
  name: ' Jimmy',
  output: function () {
    console.log(this.name)
  },
}

Object.setPrototypeOf(obj, user)

console.log(obj.name) // this will return Jimmy
obj.output() // this will return Jimmy
