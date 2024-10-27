// 99000+ packages are present to do multiple jobs

console.log('Packages are nothing but the utility modules')

let { log } = require('console') // using the already installed package/module

log('This we are printing by using console module!!!')

log(__dirname) // gives the absolute path of the directory our file is in
log(__filename) // gives the absolute path of the directory our file is in with current file name

let { test } = require('./node') // we need to run the file so that value can be assigned to global object
// accessing global data
log(global.connectionString)

// we can pass data via terminal using std.out and std.in which are part of process module
// log(process) // gives information about the node processes

// callback with data inserted
process.stdin.on('data', (data) => {
  process.stdout.write(`Data inserted: ${data}`)
  process.exit() // to exit the process listening to the data, or else it will keep on listening, can manually do ctrl+c or cmd+c to exit.
  // exit the terminal running process as well
})

setTimeout(() => {
  console.log('This is a timeout function')
}, 5000)

let os = require('os')

log(os.cpus()) // gives the information about the cpus
log(os.hostname()) // gives the hostname of the system
log(os.machine()) // gives the machine type
log(os.version()) // gives the version of the os

let path = require('path')

//path
console.log(path.basename(__filename)) // gives the filename
console.log(path.dirname(__filename)) // give absolute path of the directory
console.log(path.resolve(__filename)) // gives the absolute path of the directory our file is in with current file name

let http = require('http')

log(http.METHODS) // gives requested method available in http module
// log(http.request())

//to write our own customized events
const { EventEmitter } = require('events')
//event emitter - on is custom event
const eventEmitter = new EventEmitter()

// Define a custom event "request" with a listener
eventEmitter.on('request', (req, res) => {
  res.send('Information to be shared with user')
})

//utility module
const util = require('util')
// util.log(path.basename(__filename))
// util.log(path.basename(__dirname))
log(util.debuglog())

const v8 = require('v8')
log(v8)
log(v8.getHeapSnapshot())
log(v8.getHeapStatistics())

process.nextTick(() => {
  log('Next Tick Called!!')
})

/**
 * The process.nextTick() method is useful for scheduling a function to run immediately after the current operation completes but before any I/O tasks.
It can be particularly helpful for breaking up longer synchronous processes and ensuring that certain operations are completed without blocking the event loop.

 * 
 */
