// Class - has been added in ES6 as a special and upgraded function to give us feature similar to
// other class based programming languages like Java, C# etc.

// class keyword is used to create class and we can create associated methods as we did in constructor function
// <without using this>

class Area {
  // scope of the class (< --- --- ≥)

  // constructor is used to initialized the properties
  constructor(length = 0, breadth = 0) {
    this.length = height
    this.breadth = width
  }
  areaOfCircle = function (radius = 0) {
    return 3.141 * radius * radius // pie*r-square
  }

  square = () => this.length * this.length

  rectangle = () => this.length * this.breadth
}

let areaObj = new Area(6, 9) //instantiation of area class

console.log(areaObj.areaOfCircle(12)) // 452.304

console.log(areaObj.square()) // 36

console.log(areaObj.rectangle()) // 54

// Task - create a class named as account accepting 3 or more params  like - name, acct type etc and
// has three methods to show balance, user details and account offers
