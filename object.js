// Object as class, we can create an object with details of key, value pair
// An object is the reference pointer holds the value via properties defined inside the object.
// new Object() - instance object. Object.create()
// {} - this is an object

// 1. Using two curly brackets
var Employee = {
  Name: 'Ben M',
  ID: 2024,
  GroupCode: 'Account System',
  GetEmployeeInfo: function () {
    // `` - template literal easy way of writing string and its concatenation
    return `${this.Name}, ${this.ID}, ${this.GroupCode}`
  },
}

// var empObj = new Employee(); // Error: Employee is not a constructor ()

// console.log(Employee.GetEmployeeInfo())

// Using constructor method to create the class - using new keyword
// this method is not a expected way of inheritance as it keeps the same object and no new copy or clone
// (Employee and softwareEngineer are referring same object)
// 2. Software Engineer inherits from Employee
// var softwareEngineer = new Object(Employee) // We are setting / injecting Employee object to create a new class using constructor method
// or Object.create(Employee);
/**
 * The approach you used (new Object(Employee)) can be used to create a new object with the same properties as the Employee,
 * but it's typically better to use Object.create() for a more explicit prototype chain or use classes for inheritance.
 */

// softwareEngineer.salary = '$100,0005'

// softwareEngineer.GetEmployeeInfo = function () {
//   return `${this.Name}, ${this.ID}, ${this.GroupCode}, ${this.salary}`
// }
// console.log(Employee.GetEmployeeInfo())
// console.log(softwareEngineer.GetEmployeeInfo())

// The new and more suitable way of implementing inheritance is by using Object.create method where we will have separate copy for child class and a prototype chain to link to the parent class
/**
 * From Chat GPT - // The Object.create method is a suitable way to implement inheritance, creating a new object that has a prototype link to the parent object.
// The child object can have its own properties, while also inheriting from the parent object without creating a separate copy of the parent properties.
 */

var softwareEngineer2 = Object.create(Employee)

softwareEngineer2.salary = '$100,0005'

// over-riding the base class method and only keep in the individual instance (Employee and softwareEngineer2 are not referring same object)
softwareEngineer2.GetEmployeeInfo = function () {
  return `${this.Name}, ${this.ID}, ${this.GroupCode}, ${this.salary}`
}

console.log(Employee.GetEmployeeInfo())
console.log(softwareEngineer2.GetEmployeeInfo())

// This inheritance is facilitated by the prototype chain in JavaScript.
// Checking the prototype references

console.log(Employee.__proto__) // This will log the prototype of the Employee object (Object.prototype)
console.log(softwareEngineer2.__proto__) // This points to the Employee object, allowing access to its properties and methods

// 4. When object is empty
var emptyObj = {} // Object.create({})

// 5. Null Prototype object
var nullPrototypeObj = Object.create(null)

// 6. Merging of different object

var User = { name: 'Robin', ID: '1234', userType: 'Paid' }
var Address = { ID: '1234', Current: 'Somewhere on earth' }
var Address2 = { ID: '1234', Delivery: 'Somewhere on SC' }

var DispatchItem = { User, Address, Address2 }

// Address2.Mobile = '1234567890'

console.log(DispatchItem) // this will reflect the changed value even after merge

// We need to have principle of immutability so that changed value doesn't reflect and data gets merged avoiding
// redundancy
var DispatchItem2 = Object.assign(User, Address, Address2)

Address2.Mobile = '2151451255'

console.log(DispatchItem2) // this will not reflect the changed value as we have used Object.assign
