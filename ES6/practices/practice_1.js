//Practice -
let Student = {
  FirstName: 'Stacy',
  Standard: 'Higher Secondary',
  Session: 'Final Session',
  TotalMarks: '75%',
  Subject: {
    Physics: 80,
    Chemistry: 89,
    Language: 92,
  },
}

//Questions for practice

//Print firstName, total marks and Individual Subject Marks, using object and nested destructuring
const {
  FirstName,
  TotalMarks,
  Subject: { Physics, Chemistry, Language },
} = Student
console.log(FirstName, TotalMarks, Physics, Chemistry, Language)

//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student
const {
  LastName = 'Smith',
  Subject: { Ecology = 95 },
} = Student
console.log(LastName, Ecology)

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring
const aspirations = ['Lose Weight', 'Get a Job', 'Good at Java', 'Travel the World', 'Make money']

const [year2024, year2025, year2026, ...rest] = aspirations
console.log(year2024, year2025, year2026, rest)

//create a function with name multiply which accepts three parameters, and return multiplication of all
//but if we don't pass any parameter it returns 0
const multiply = (a = 0, b = 0, c = 0) => a * b * c

console.log(multiply(2, 3)) //0
console.log(multiply(2, 3, 4)) //24
console.log(multiply()) //0

//create an array of 1 - 5 and add arr[newValue] = at 6th place, print the output using for of and for in loop

const arr = [1, 2, 3, 4, 5]
arr[5] = 'newVal'

for (let value of arr) {
  console.log(value)
}

for (let key in arr) {
  console.log(`key ${key}, value is ${arr[key]}`)
}

//create an example of const where we can update on property of the object, where it says const is mutable
const obj = {
  name: 'John',
  age: 25,
}

obj.name = 'Jimmy' //allowed
console.log(obj)

// obj = {} //not allowed

//create a for loop using var and let, print each value in timeout after 2 second and try to
//demonstrate functional scope of var and lexical of let

for (var i = 0; i < 5; i++) {
  ;(function () {
    var innerI = i
    setTimeout(() => {
      /**
       * function scope => 0, global scope => 5
       * function scope => 1, global scope => 5
       * function scope => 2, global scope => 5
       * function scope => 3, global scope => 5
       * function scope => 4, global scope => 5
       */
      console.log(`function scope => ${innerI}, global scope => ${i}`)
    }, 2000)
  })()
}

for (let j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log(`lexical scope => ${j}`) // 0, 1, 2, 3, 4 - lexical scope
  }, 2000)
}
