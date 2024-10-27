let http = require('http')
let fs = require('fs')
let url = require('url')

// Create a server
const server = http.createServer((req, res) => {
  // Parse the request containing file name
  let urlObj = url.parse(req.url)
  console.log(urlObj)
  let pathname = urlObj.pathname

  // Print the name of the file for which request is made
  console.log('Request for ' + pathname + ' received.')

  // Read the requested file content from file system
  fs.readFile(pathname.substring(1), (err, data) => {
    try {
      if (err) {
        console.log(err)
        // HTTP Status: 404 : NOT FOUND
        // Content Type: text/plain
        res.writeHead(404, { 'Content-Type': 'text/html' })
        throw new Error('File not found or error reading file')
      } else {
        // Page found
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        res.writeHead(200, { 'Content-Type': 'text/html' })

        // Write the content of the file to response body
        res.write(data.toString())
      }
      // Send the response body
      res.end()
    } catch (err) {
      //   throw err
      // Send a 500 Internal Server Error response
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Error: Internal Server Error')
    }
  })
})

server.listen(8081, () => {
  // Console will print the message
  console.log('Server running at http://127.0.0.1:8081/')
})

// (Signal Interrupt) is a signal sent to a process to request its interruption.
process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...')
  server.close(() => {
    console.log('Server closed.')
    process.exit(0)
  })
})
