const fs = require('fs')

// open a file
/**
'r': Open for reading.
'r+': Open for reading and writing.
'w': Open for writing, truncating the file if it exists.
'a': Open for appending.
 */
fs.open('./ES6/self/input.txt', 'a', (err, fd) => {
  if (err) {
    return console.error(err)
  }
  console.log('File opened successfully!')

  // append the data
  fs.appendFile(fd, 'Simply Easy Learning!', 'utf8', (err) => {
    if (err) {
      return console.error(err)
    }
    console.log('Data written successfully!')

    // close the file
    fs.close(fd, (err) => {
      if (err) {
        return console.error(err)
      }
      console.log('File closed successfully!')
    })
  })

  // read the file
  //   fs.read -> Reads data from a file using a file descriptor, allowing for low-level control over the reading process.
  // Allocate a Buffer for the data to be read
  // fs.read(fd, buffer, offset, length, position, callback) -> mostly used with fs.open
  fs.read
  //write the file
  // fs.write
  // fs.write(fd, buffer, offset, length, position, callback)
  // truncate the file
  // fs.ftruncate(fd, len, callback)
})

// Delete a file
// fs.unlink('./ES6/self/input.txt', (err) => {})

// Create a directory
//fs.mkdir(path[, mode], callback)

// Read a directory
//fs.readdir(path, callback)

// Delete a directory
//fs.rmdir(path
