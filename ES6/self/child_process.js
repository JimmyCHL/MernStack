const { spawn, fork } = require('child_process')

/**
 * exec − child_process.exec method runs a command in a shell/console and buffers the output.
spawn − child_process.spawn launches a new process with a given command.
fork − The child_process.fork method is a special case of the spawn() to create child processes.
 */
/**
 * The exec() method returns a buffer with a max size and waits for the process to end and tries to return all the buffered data at once.
 */
/**
 * The spawn() Method
In Node.js, the spawn() is used to launch a new process with the provided set of commands. This method doesn’t create a new V8 instance and just one copy of the node module is active on the processor. When your child process returns a large amount of data to the Node you can invoke this method.
child_process.spawn(command[, args][, options])
The fork() Method
Whereas, the fork() in Node.js is a special instance of spawn() that executes a new instance of the V8 engine. This method simply means that multiple workers are running on a single Node code base for various task.It has the followin signature −
child_process.fork(modulePath[, args][, options])

 */

// Create a child process running a command (e.g., 'ls' on Unix)
const child = spawn('ls', ['-l'])

// Listen for data from stdout
child.stdout.on('data', (data) => {
  console.log(`Output: ${data}`)
})

// Listen for data from stderr
child.stderr.on('data', (data) => {
  console.error(`Error: ${data}`)
})

// Listen for the child process to exit
child.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`)
})

const { exec } = require('child_process')
const fs = require('fs')

// Execute a shell command

const execution = exec('node ./ES6/self/test_child', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    console.log(error.code)
    console.log(error.signal)
    return
  }
  /**
   * stdout is a stream that is typically used for output in a command-line environment. When a program writes to stdout, that data can be captured and redirected.
   */
  console.log(`stdout: ${stdout}`)
  console.error(`stderr: ${stderr}`)
})

execution.on('exit', (code) => {
  // code 0 mean code is executed successfully
  console.log(`Child exited with code ${code}`)
})
