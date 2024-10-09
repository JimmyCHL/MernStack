// ES6 allows us to initialize the parameter at the time of function definition
// this helps us to reduce the logical validations of undefined
function Addition(val1 = 0, val2 = 0, val3 = 0) {
  console.log(val3)
  return val1 + val2 + val3
}
console.log(Addition(1, 2, 3))
console.log(Addition(1, 2)) //NaN - Not A Number when we don't set default value for val3 in Addition

//create a student information function and set some values as default

function studentInfo(name, age = 25, address = 'USA') {
  console.log(`Name: ${name}, Age: ${age}, Address: ${address}`)
}

studentInfo() // Name: undefined, Age: 25, Address: USA
studentInfo('John') // Name: John, Age: 25, Address: USA
studentInfo('John', 30) // Name: John, Age: 30, Address: USA
studentInfo('John', 30, 'India') // Name: John, Age: 30, Address: India
