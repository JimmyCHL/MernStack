// Arrow Function is new way of writing functions in ES6, which has two important features:
// this is also termed as fat arrow function because of () before =>
// we don't need function keyword to define the function.

//1. Ease of writing - This is a lambda expression and we can write the whole function definition
// using lambda expression.

function Add(a, b) {
  return a + b
}

// If we have no complex logic which requires multiple lines then function can be written inline without return
let AddArrow = (a, b) => a + b

console.log(Add(5, 5))
console.log(AddArrow(5, 5))

// multiple lines function
let UserInfo = (name, age) => {
  return {
    name,
    age,
  }
}

console.log(UserInfo('John', 25))

// this.name = 'Hongbo'

//2. This solves the problem of Scope/Context without using bind, by copying the context of the immediate parent
let User = {
  name: 'Hongbo',
  age: 21,
  address: 'Somewhere in north america',
  // getDetails: () => {// we should avoid using arrow function as parent of all other functions - set context to a global or empty object}
  getDetails: function () {
    console.log(`${this.name}, ${this.age}, ${this.address}`)

    setTimeout(
      function () {
        console.log('bind')
        console.log(`${this.name}, ${this.age}, ${this.address}`)
      }.bind(this),
      2000
    )

    setTimeout(() => {
      //Arrow function use the context of the immediate parent
      console.log(this)
      console.log(`${this.name}, ${this.age}, ${this.address}`)
    }, 2000)

    setTimeout(function () {
      console.log(`${this.name}, ${this.age}, ${this.address}`)
    }, 2000)

    setTimeout(function () {
      console.log('0 second')
      console.log(`${this.name}, ${this.age}, ${this.address}`) // undefined, undefined, undefined (you will understand this with event loop - like call stack and queue)
    }, 0)

    let that = this // this - which is parent context is copied into that variable

    setTimeout(function () {
      //instead of using dynamic context we are using copied context - tat
      console.log(`${that.name}, ${that.age}, ${that.address}`)
    }, 2000)
  },
}

User.getDetails()

console.log('---------------------------------------------------------')

// repeat and write an arrow function to print account information with return, without return
// by creating a account object

const accountObj = { user: 'John', accountNumber: 123456, balance: 1000 }

let accountInfo = (account) => {
  return account
}

console.log(accountInfo(accountObj))

let accountInfoArrow = (account) => account

console.log(accountInfoArrow(accountObj))

let test = 'test'

const accountObjWithPrintObj = {
  user: 'John',
  accountNumber: 123456,
  balance: 1000,
  printAccountInfo: function () {
    console.log(this) // this is the current object
    console.log(test)
  },
  printAccountInfoArrow: () => {
    console.log(this) // this is the parent object and it is empty {}
    console.log(test)
  },
}

accountObjWithPrintObj.printAccountInfo()
accountObjWithPrintObj.printAccountInfoArrow()

console.log('---------------------------------------------------------')
