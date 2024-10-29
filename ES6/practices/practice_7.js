//Do a practice writing all the data using fs.write (sync async both)

const fs = require('fs')

const data = [
  {
    name: 'Jimmy',
    age: 25,
    city: 'New York',
    session: 'MernStack',
  },
  {
    name: 'Jenny',
    age: 22,
    city: 'California',
    session: 'MernStack',
  },
]

const stringJson = JSON.stringify(data)

console.log('Data to write:', typeof stringJson)

console.log('Writing data to file...')

console.log('Writing file asynchronously')

// Asynchronous write
fs.writeFile('./ES6/practices/async_output.json', stringJson, (err) => {
  if (err) {
    return console.error('Error writing file:', err)
  }
  console.log('Data written to async_output.txt successfully!')
})

console.log('No Blocking...')

console.log('Writing file synchronously')

// Synchronous write

const dataBuffer = Buffer.from('Data written to sync_output.txt successfully!')
const hexData = dataBuffer.toString('hex')

try {
  fs.writeFileSync('./ES6/practices/sync_output.txt', dataBuffer + hexData)
  console.log('Data written to sync_output.txt successfully!')
} catch (err) {
  console.error('Error writing file:', err)
}

console.log('Wait for operation completed!')
