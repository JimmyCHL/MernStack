// Map: is the data structure created to store data in the form of key value pair
// Strong Map - when our keys are of string type of alphanumeric type.
// Weak Map - this allows us to create keys such as numbers, functions, objects etc.
// There are several methods, properties attached to map to validate and access the values present against key.

//[{key : "value"}]
let myMap = new Map()

myMap.set('UserName', 'Anthony')

console.log(myMap.size)
console.log(myMap.entries())

let keyString = 'a string',
  keyObj = {},
  keyFunc = function () {},
  keyNum = 2000

myMap.set(keyString, 'String is key for this!!')
myMap.set(keyObj, 'Object is key for this!!')
myMap.set(keyFunc, 'Function is key for this!!')
myMap.set(keyNum, 'Number is key for this!!')

console.log(myMap.size)
// console.log(myMap.entries())

console.log(myMap.get(2000)) // Number is key for this!!
console.log(myMap.get({})) // undefined: object is referred by reference variable not a value type, for each object a separate memory allocated on heap.
console.log(myMap.get(keyObj)) // Object is key for this!! -> can only access via same reference variable.
console.log(myMap.get(keyFunc)) // Function is key for this!!

myMap.delete(keyNum)
console.log(myMap.entries())

console.log(myMap.has(keyString)) // return boolean
console.log(myMap.keys()) // list of all keys <MapIterator>

myMap.clear() // removes all data
console.log(myMap.entries())

// Set: is the data structure which helps us create unique data without many comparisons.

// let traineeList = []
// traineeList.push('Duncan')

// before adding - Same user name we need to check for each time if its already present or not.

let traineeList = new Set(['Silvia', 'Afroj', 'Yao', 'Mark', 'Nilay'])

traineeList.add('Yao')

console.log(traineeList.size)

console.log(traineeList.entries())

traineeList.add('Sierra')

console.log(traineeList.entries())

console.log(traineeList.size)

traineeList.add('Ben')
console.log(traineeList.values())
console.log(traineeList.size)
console.log(traineeList.has('Ben'))

//Create two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favorite country you wish to visit on world tour
