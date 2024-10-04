// Javascript is single threaded, non-blocking, concurrent and high performance run time

// some code
// call => server => (2 minutes) => (callback to execute after 2 minutes)
// some other code

// callbacks
// registered API's - SetTimeout, SetInterval, XHR (xml http request), registered callbacks(I/O operations to interact with os)

console.log('Concurrent Execution Starts here') // #1

setTimeout(function () {
  console.log('First Timeout code (delayed 1)') // #3
  setTimeout(function () {
    console.log('Inner Timeout') // #4
  }, 0)
}, 1000)

setTimeout(function () {
  console.log('Second Timeout code (delayed 2)') // #5
}, 2000)

setTimeout(function () {
  console.log('Third Timeout code (delayed 3)') // #6
}, 3000)

console.log('Concurrent Execution Ends here') // #2

// console.log('Concurrent Execution Starts here') // #1
// setTimeout(function () {
//   //Cb => callback
//   console.log('First Timeout code (delayed 1) CB 1') // #3
//   setTimeout(function () {
//     console.log('Inner TimeOut CB 1.1') // #6
//   }, 0)
// }, 1000) // +1 Sec
// setTimeout(function () {
//   console.log('Second Timeout code (delayed 2) CB 2') // #4
// }, 1000) // +1+2 Sec => 1+1 => 2 sec
// setTimeout(function () {
//   console.log('Third Timeout code (delayed 3) CB 3') // #5
// }, 1000) // +1+2+3 Sec => 1+2 => 3 sec
// console.log('Concurrent Execution Ends here') // #2
