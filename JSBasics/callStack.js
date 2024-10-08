// Stack, LIFO, data structure - Last In First Out

// callStack - the executing thread allocated some memory to run the interpreter and handle functions and variables, and works in LIFO fashion
// this also has the access to heap( for larger chunk of data like objects)
// less memory, easily available and gives performance in execution

var myName = 'Some Random Name'
console.log(myName)

function Foo() {
  // console.log("we are in Foo")
  // return "Foo"
  //   console.log('last in')
  throw new Error('Call Stack Error')
  //   console.log('first out')
}

function Bar() {
  // console.log("we are in Bar")
  // return "Bar"
  //   console.log('second in')
  Foo()
  //   console.log('second out')
}

function Baz() {
  // console.log("we are in Baz")
  // return "Baz"
  //   console.log('first in')
  Baz()
  //   console.log('last out')
}

// var i = 1;
// function Baz() {
//     //console.log("We are in BAZ")
//     //return "Baz"
//     //Bar()
//     i++
//     if (i < 1000) {
//         console.log(i)
//         Baz()
//     }else{
//         console.log(i + "we can further call it in recursive order")
//     }
// }

// var i = 1;
// function Baz() {
//     //console.log("We are in BAZ")
//     //return "Baz"
//     //Bar()
//     i++
//     //if (i < 1000) {
//         console.log(i)
//         Baz()
//     //}else{
//         console.log(i + "we can further call it in recursive order")
//     //}
// }

// Foo()
// Bar()
Baz()

// for (let index = 0; index < 500000; index++) {
//     console.log(index)
// }
