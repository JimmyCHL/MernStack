// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

const person = {
  name: 'Jimmy Lo',
  gender: 'man',
  age: 30,
  getPersonInfo: function () {
    return `${this.name} is a ${this.gender} and is ${this.age} years old`
  },
}

const person1 = { ...person }

const student = new Object(person)

student.getPersonInfo = function () {
  return 'This is a student'
}

// overwrite original
console.log(person.getPersonInfo())
console.log(student.getPersonInfo())

const student1 = Object.create(person1)

student1.getPersonInfo = function () {
  return 'This is a student'
}

// no overwrite original
console.log(person1.getPersonInfo())
console.log(student1.getPersonInfo())

// Three objects
const obj1 = { a: 1 }
const obj2 = { b: 2 }
const obj3 = { c: 3 }

const mergedObj = Object.assign({}, obj1, obj2, obj3)

console.log(mergedObj)

obj1.a = 10

console.log(obj1)
// no mutation
console.log(mergedObj)

// share to closureAssignment.js
module.exports = { person, student, mergedObj }
