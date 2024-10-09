//for ->  array[1].key
//foreach -> (this)
//1. loops through length
//2. to access the value we pass key as index for current object array[1].key , (this)
//the collections or Iterables are array of JSON or JSON of JSON
// let ProductList = [{Prod1},{Prod2}]
// for (let index = 0; index < ProductList.length; index++) {
//     const element = ProductList[index];
//     element["productname"]
// }

/** a. for in loop - iterates over the property value, basically meant for json objects with - key values
for in loop */

let person = { fname: 'John', lname: 'Doe', age: 25, address: {} }

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    //this is a check to confirm that key is present else set  the context to current key
    const element = person[key]
    console.log(`${key}  ${element}`)
  }
}

console.log('Other Example')

let arr = [3, 5, 7] //{0 : 3, 1 : 5, 2 : 7, newKey : "Sierra"}
arr.push('Eight')
arr.newKey = 'Sierra'
arr['NextItem'] = 'Mark'
arr.push('Nine')

console.log(arr)

for (const key in arr) {
  //console.log(key)
  const element = arr[key]
  //console.log(element)
  console.log(`${key}  ${element}`)
}

/** b. For Of Loop **/

//for of loop : Mainly for arrays, iterates over the property names, more recommended for array of numbers or string instead of objects
console.log('For Of Loop')
let cars = ['BMW', 'Volvo', 'Mini']
cars[5] = 'Toyota'
cars.newKey = 'Range Rover1' // can not be identified via for 'of loop'
cars.push('Range Rover')
//explicit key can not be identified via for 'of loop', for this array indexes are the keys and should be number
for (const element of cars) {
  console.log(element)
}

//Create an example of your own for -
// 1. ForOF Loop

const names = ['John', 'Jimmy', 'Jane', 'Doe', null, undefined]

for (const name of names) {
  console.log(name)
}

// 2. ForIn loop
const personDetails = { name: 'John', age: 25, address: 'USA', city: 'New York' }

for (const key in personDetails) {
  const value = personDetails[key]
  console.log(`${key} : ${value}`)
}
