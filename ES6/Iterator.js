// Due to increase in the workload at frontend or at backend while consuming data like array of object or
// object of objects the operations using normal 'for loops' becomes very slow
// and it also doesn't allow us to do any manipulation in the existing data array
// 4 New Iterators are added to ES6 for different purposes and give us optimized solution
// Filter, Map, Some and Reduce

let personsList = [
  { id: 1, name: 'John', savedBy: 'Captain America' },
  { id: 2, name: 'Alice', savedBy: 'IronMan' },
  { id: 3, name: 'Bob', savedBy: 'Thor' },
  { id: 4, name: 'Charlie', savedBy: 'Hulk' },
  { id: 5, name: 'David', savedBy: 'Black Widow' },
  { id: 6, name: 'Eve', savedBy: 'IronMan' },
  { id: 7, name: 'Frank', savedBy: 'Spider Man' },
]

// Filter: helps us to iterate but can't manipulate the list, it can only filter the list based on the condition and return the new list
//1. List the Persons saved by Captain America

let personSavedByCA = personsList.filter((person) => person.savedBy === 'Captain America')
console.log(personSavedByCA)
// console.log(personsList) // preserves the immutability.

//Map : helps us to iterate as well as manipulate the list on the fly and return another list, means we can change the structure of data object present
// 2. List the names of the persons saved by IronMan

let personSavedByIronMan = personsList.filter((person) => person.savedBy === 'IronMan').map((person) => person.name)
console.log(personSavedByIronMan)

// append lucky before the name of each person saved
let luckyNames = personsList.map((person) => `Lucky ${person.name}`)
console.log(luckyNames)

let luckyNamesPersonList = personsList.map((person) => ({
  ...person,
  name: `Lucky ${person.name}`,
}))

console.log(luckyNamesPersonList)

// short circuit - if we have condition present then true else false
let personSavedByHulk = personsList.some((person) => person.savedBy === 'Hulk')

console.log(personSavedByHulk)

let personSavedByThanos = personsList.some((person) => person.savedBy === 'Thanos')
console.log(personSavedByThanos)

// Gives the access to the returned values and allows us to manipulate the current object and prevObject anytime in loop
//4. Get the count of each person saved by every super hero of Marvel
let eachSavedPersonCount = personsList.reduce((prevObject, currObject, index, list) => {
  //console.log(prevObject)
  //console.log(currObject)
  //console.log(index)
  //console.log(list)
  prevObject[currObject.savedBy] = prevObject[currObject.savedBy] ? prevObject[currObject.savedBy] + 1 : 1
  return prevObject
}, new Set())

console.log(eachSavedPersonCount)
//console.log(personsList)

//Question : -- (in practice_4)
///////////////////////////

let persons = [
  { id: 1, name: 'John', tags: 'javascript' },
  { id: 2, name: 'Alice', tags: 'dontnet' },
  { id: 3, name: 'Roger', tags: 'java' },
  { id: 4, name: 'Adam', tags: 'javascript' },
  { id: 5, name: 'Alex', tags: 'java' },
]

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present in list
