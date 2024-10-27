const fs = require('fs')

let data = 'Simply Easy Learning'

// Create a writable stream
let writerStream = fs.createWriteStream('./ES6/self/output.txt')

// Write the data to stream with encoding to be utf8

writerStream.write(data, 'UTF8') // overwrites the file

const writerStream1 = fs.createWriteStream('./ES6/self/output.txt', { flags: 'a' }) // 'a' for appending

// Mark the end of file

writerStream.end()

// Handle stream events --> finish, and error

writerStream.on('finish', () => {
  console.log('Write completed.')
})

writerStream.on('error', (err) => {
  console.log(err.stack)
})

// It is better to wait other streams to finish before writing to the same file
/** extra write */
writerStream1.write('\nHello World!\n', 'UTF8')
writerStream1.end()

console.log('Program Ended')
