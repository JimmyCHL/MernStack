let http = require('http')

// Options to be used by request

let options = {
  host: 'localhost',
  port: '8081',
  path: '/ES6/self/input.txt',
}

// Callback function is used to deal with response
let callback = (response) => {
  // Continuously update stream with data
  let body = ''
  response.on('data', (data) => {
    body += data
  })

  response.on('end', () => {
    // Data received completely
    console.log(body)
  })
}

// Make a request to the server
let req = http.request(options, callback)

req.on('socket', (socket) => {
  console.log('Socket event emitted')
  console.log('connection to server established')
  console.log('socket is connected to server and can be used to monitor and manage connection')
})

// Handle request errors (when server throw an error or crashes or connection is not available)
req.on('error', (error) => {
  console.error(`Error with request: ${error.message}`)
})

// End the request
req.end()
