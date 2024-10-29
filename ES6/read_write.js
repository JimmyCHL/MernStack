//To work with file system we have fs - file system module present
const fs = require('fs') //fs - file system, from node framework
console.log('The a-synchronous operation works from here!!!')
let fileData
// fileData = fs.readFileSync('./class.js','utf-8'); // this should be a blocking
// console.log(fileData)
fs.readFile('./ES6/class.js', 'utf-8', (err, data) => {
  //error first callbacks
  //   fileData = data + err
  //   console.log(fileData)
  //   console.log(fileData)
  if (!err) console.log('data in class.js can be read.')
})
console.log('The a-synchronous operation ends here!!!')
//Writing into a file using write stream
let userDetails = {
  name: 'Ben',
  age: 25,
  city: 'Somewhere on earth ',
  session: 'MernStack',
}
//using the async write operation
fs.readFile('./ES6/Text.json', 'utf-8', (err, fileData) => {
  console.log('information' + fileData)
  console.log('errr', err)
  let writerStream = fs.createWriteStream('./ES6/Text.json', 'utf8')
  console.log(fileData) // stringified json data
  if (fileData) {
    let oldData = JSON.parse(fileData)
    console.log(oldData)
    writerStream.write(JSON.stringify([...oldData, userDetails]))
    writerStream.end()
  } else {
    writerStream.write(JSON.stringify([{ name: 'Micheal', age: 22, city: 'California ', session: 'MernStack' }]))
    writerStream.end()
  }
})
console.log('The a-synchronous operation ends here!!!')

//Do a practice writing all the data using fs.write (sync async both) - in practice folder
