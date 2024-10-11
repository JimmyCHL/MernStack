// Instead of creating/initializing many variables if we assign into another object mainly array and json object
// this kind of mapping is termed as destructuring.

//1. Array Destructuring - when we read the data from array and assign them to another variables

//a. Direct assignment in array to array
let sessionsList = ['AWS', 'MERNStack', 'JAVA', 'React', 'SQL', 'NodeJS', 'Python']

let Session1 = sessionsList[0]
let Session2 = sessionsList[1]
let Session3 = sessionsList[2]
let undefinedData = sessionsList[7] // undefined

console.log(Session1, Session2, Session3)

//b. we can use rest param to assign remaining array
//... - represents rest operator and holds rest of the values in a separate array
let [Session4, Session5, Session6, ...section7] = sessionsList

console.log(Session4, Session5, Session6, section7) // section7 holds last three elements in an array.

//c. Data swapping can be done easily - values are swapped with variables

let a = 'New A',
  b = 'New B'

;[a, b] = [b, a]

console.log(a, b)

// 2. Object destructing allows us to read data from objects without multiple initialization

// a. Single object destructuring

let assessment = {
  Name: 'Jimmy',
  Standard: 'Professional',
  Marks: {
    Java: 10,
    Mernstack: 10,
    ES6: 9,
  },
}

// let Name = assessment.Name
// let MERNStack = assessment.Marks.Mernstack

// let {Name, Standard} = assessment

// console.log(Name, Standard)

// b. Nested object destructuring - we read the data from nested object

// e.g. - Reading marks from nested Marks object

let {
  Name,
  Marks: { Java, Mernstack, ES6, DAS = 9.5 },
  Aspiration = 'Technical Architect',
} = assessment

console.log(Name, Java, Mernstack, ES6, DAS, Aspiration)
