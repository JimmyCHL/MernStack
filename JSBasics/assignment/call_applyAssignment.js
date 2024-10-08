//Create two examples to set the context using student and list of subject attended by students,
//it should use call and apply do describe both the cases

// Without Declaration: In non-strict mode, assigning a value without declaring it creates a global variable.
// With const (or let or var): Declaring a variable prevents it from being accidentally created in the global scope and can help avoid errors.
// Strict Mode: Enforces the declaration of variables, preventing accidental global variable creation.
scope = 'global' // vs const scope = 'global'

const student = {
  firstName: 'Jimmy',
  lastName: 'Lo',
  age: 30,
  scope: 'student',
  getStudentScope: function () {
    return this.scope
  },
}

const subjects = ['Math', 'Science', 'English', 'History']

function printSubjects(subject1, subject2, subject3, subject4) {
  console.log(`
    ${this.firstName} ${this.lastName} is ${this.age} years old and is studying ${subject1}, ${subject2}, ${subject3}, ${subject4}
  `)
}

// in global context -> undefined undefined is undefined years old and is studying Math, Science, English, History
printSubjects(...subjects)

// using call and set context as student -> Jimmy Lo is 30 years old and is studying Math, Science, English, History
printSubjects.call(student, ...subjects)

// using apply and set context as student -> Jimmy Lo is 30 years old and is studying Math, Science, English, History
printSubjects.apply(student, subjects)

// Test student scope and global scope
console.log(student.getStudentScope()) // student

const getGlobalScope = student.getStudentScope

// t defaults to the global object (or undefined in strict mode). Therefore,
// this.scope inside getStudentScope will refer to scope from the global context only if you are in non-strict mode.
console.log(getGlobalScope()) // we are in strict mode, so it will return undefined
// for above if, you set scope = 'global' at the top, it will return global and if you set const scope = 'global', it will return undefined

console.log(scope) // global

const fakeGlobalScope = {
  scope: 'fakeGlobal',
}

console.log(getGlobalScope.call(fakeGlobalScope)) // fakeGlobal
console.log(getGlobalScope.apply(fakeGlobalScope)) // fakeGlobal
console.log(student.getStudentScope.call(fakeGlobalScope)) // fakeGlobal
console.log(student.getStudentScope()) // student

console.log(this) // {}

/**
 * note
 * -Node.js Module Scope: Variables declared with var, let, or const in a file are scoped to that module, not the global scope.
 * -Global Scope in Node.js: Use global to create truly global variables accessible from any module.
 * -Browser Behavior: In browsers, global variables become properties of the window object.
 */
