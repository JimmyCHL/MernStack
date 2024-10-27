const fs = require('fs')

/* Purpose: Creates a readable stream for a file, allowing you to read data in chunks. */
let readerStream = fs.createReadStream('./ES6/self/input.txt')

readerStream.setEncoding('UTF8')

// Handle stream events --> data, end, and error
readerStream.on('data', (chunk) => {
  console.log(chunk) //reading one line at a time
})

readerStream.on('end', () => {
  console.log('End of stream')
})

/**
 *
 * will print the stack trace of the error to the console. The stack trace includes:
The error message.
The call stack leading up to where the error occurred, which helps in debugging.

Ex:
Error: ENOENT: no such file or directory, open 'path/to/nonexistent/file.txt'
    at Object.openSync (fs.js:635:18)
    at Object.readFileSync (fs.js:508:33)
    at ...
 */
readerStream.on('error', (err) => {
  console.log(err.stack)
})

console.log('Program Ended')

// async and sync versions of reading a file

/**
 * Every method in the fs module has synchronous as well as asynchronous forms.
 * Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error.
 * It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.
 */

console.log('\nReading file asynchronously')

// Asynchronous read
fs.readFile('./ES6/self/input.txt', (err, data) => {
  if (err) {
    console.log(err.stack)
  }
  console.log('\nData: ')
  console.log(data.toString())
})

console.log('\nReading file synchronously')

// Synchronous read
let data = fs.readFileSync('./ES6/self/input.txt') // blocks the program until the file is read

console.log('\nData-sync: ')

console.log(data.toString()) // This will log the file contents after reading is complete.

console.log('Program Ended')
