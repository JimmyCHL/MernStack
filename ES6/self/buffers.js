let buf = Buffer.from('Hello World', 'utf8')
let buf1 = Buffer.from([10, 20, 30, 40, 50]) // array of bytes
let buf2 = Buffer.alloc(10) // creates a buffer of 10 bytes

//the character 'B' can be represented in ASCII as 66 (decimal) or 0x42 (hex).

console.log(buf)
console.log(buf1)
console.log(buf2)
console.log(buf.toString('utf8'))
console.log(buf.toString('ascii'))
console.log(buf.toString('utf16le'))
console.log(buf.toString('ucs2'))
console.log(buf.toString('base64'))
console.log(buf.toString('latin1'))
console.log(buf.toString('binary'))
console.log(buf.toString('hex'))
console.log(buf.toString('utf8', 0, 5))
console.log(buf.toString('utf8', 5, 10))
console.log(buf.toJSON()) // the data represents the array of ASCII values of the characters in the string "Hello World":
console.log(buf.length)
console.log(buf.write('hi')) //2 bytes are written
console.log(buf.toString('utf8', 0, 5)) // hillo World
console.log(buf.length) // 11
console.log(buf.write('Love', 0, 5)) // 4 bytes are written
console.log(buf.toString('utf8')) // Loveo World
console.log(buf.length)
