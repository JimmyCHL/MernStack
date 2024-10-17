// Spread: is used to spread the elements of any object or array to be used one by one.
// It is done by using ...(spread the object)

let nameList = ['Duncan', 'Windie', 'Hongbo', 'Michael']

console.log(nameList[0])
console.log(nameList[1])

console.log(...nameList)

let newList = ['Afroj', ...nameList, 'Sarfaraz']
console.log(newList)

let user = {
  id: 101,
  name: 'Afroj',
  userType: 'Paid',
  allowedReview: true,
  balance: '$1000',
}

let addresses = {
  id: 101,
  homeAddress: 'SomeWhere in colorado',
  officeAddress: 'SomeWhere in Atlanta',
}

// let delivery = Object.assign({}, user, addresses)

// console.log(delivery)

let delivery = { ...user, ...addresses }
addresses.available = '5PM'

console.log(delivery)

delivery = { ...user, ...addresses }
console.log(delivery)

// Rest - parameter and operator : any array data can be passed as rest parameter in any function , but it should be
// the last parameter, also when we try to assign values to rest operator, it should be the last literal.

let add = (a = 0, b = 0, c = 0, d = 0, e = 0) => a + b + c + d + e

let numberList = [1, 2, 3, 4, 5, 6]
console.log(add(...numberList)) // <usage of spread operator> // 15

// We can use spread parameter instead for dynamic count of params

let addMax = function (...restNumberList) {
  // rest:param can accept any number of params
  let sum = 0
  return restNumberList.reduce((prevNum, currNum) => prevNum + currNum, sum) // the sum here is the initial value of the accumulator as prevNum
}

console.log(addMax(...numberList)) // 21 // does the job of passing dynamic and large list to be used in the function

console.log(addMax.apply(null, numberList)) // 21 // using apply function attached with addMax function to accept an array as parameters and items in the array are treat as individual params

//Questions : on practice_5.js
//Spread Operator -
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread

//Rest Parameter -
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
