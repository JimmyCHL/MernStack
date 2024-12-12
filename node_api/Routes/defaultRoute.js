const express = require('express') //import package
const path = require('path')
const expsRouter = express.Router({ strict: true, caseSensitive: true }) // a separate route table to create and handle our api's
const s3 = require('../awsConfig')

const fs = require('fs')

expsRouter.get('/', function (req, res) {
  res.send('Hello World')
})

// test case sensitivity
expsRouter.get('/sayhtml', function (req, res) {
  res.send(
    `
        <h1>HTML Response</h1>
        <h2>Must Display html info</h2>
      `
  )
})

expsRouter.get('/sayHello', function (req, res) {
  res.send('say Hello World!')
})

expsRouter.get('/getStraightHtml', function (req, res) {
  res.send('<h1>HTML String</h1>')
})

expsRouter.get('/sendFile', function (req, res) {
  console.log(path.join(__dirname, '../Public/resources/index.html'))
  res.sendFile(path.join(__dirname, '../Public/resources/index.html'))
})

expsRouter.get('/sendFile2', function (req, res) {
  console.log(path.join(__dirname, '../Public/resources/alert_info.js'))
  res.sendFile(path.join(__dirname, '../Public/resources/alert_info.js'))
})

// passing data in url -api: path
// a. query string - ? after the end point them key value pair separated by &
// localhost:3000/query?name=John&age=30
expsRouter.get('/query', (req, res) => {
  // we can read the query string from url by using req - object and req.query property and gives us json object
  console.log(req.query)
  let qs = req.query
  if (!qs.name || !qs.age) {
    return res.send('<h1>Please provide name and age</h1>')
  }
  res.send(`Hello ${qs.name}, Your age is ${qs.age}`)
})

//b. route param - id : in the route path with be treated as route param and will help us read the values dynamically.
// localhost:3000/getUserById/id
expsRouter.get('/getUserById/:id/details/:name', (req, res) => {
  // we can read the route param from url by using req - object and req.params property and gives us json object
  console.log(req.params)
  if (!req.params.id || !req.params.name) {
    return res.send('<h1>Please provide id and name in queryString</h1>')
  }
  let id = req.params.id
  let name = req.params.name
  res.send(`User Id is ${id} and Name is ${name}`)
})

expsRouter.get('/getJson', function (req, res) {
  res.json({
    api: 'express',
    automated: 'yes',
    toolName: 'nodemon',
  })
})
//create an api to read data via query parameter and save that information to a file on the server
expsRouter.get('/dataForm/:name/:age/:gender', (req, res) => {
  let name = req.params.name
  let age = req.params.age
  let gender = req.params.gender

  let isGood = false
  if (req.query.isGood) {
    isGood = req.query.isGood
  }

  fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
    if (err) {
      // If there's an error reading the file (e.g., it doesn't exist)
      fs.writeFile(`${__dirname}/data.json`, JSON.stringify([{ name, age, gender, isGood }]), (err) => {
        if (err) {
          return res.send('Something went wrong while creating the file')
        }
        res.send({ name, age, gender, isGood })
      })
      return // Important to return here to prevent further execution
    }

    if (data) {
      let jsonData = JSON.parse(data)
      jsonData.push({ name, age, gender, isGood })
      fs.writeFile(`${__dirname}/data.json`, JSON.stringify(jsonData), (err) => {
        if (err) {
          return res.send('Something went wrong while updating the file')
        }
        res.send(jsonData)
      })
    }
  })
})

/** get data from aws s3 */
expsRouter.get('/file/:key', function (req, res) {
  const key = req.params.key

  const params = {
    Bucket: process.env.BucketName,
    Key: key,
  }

  s3.getObject(params, (err, data) => {
    if (err) {
      console.log('Error retrieving file from S3:', err)
      return res.status(500).send('Error retrieving file')
    }

    // Set the appropriate content type based on the file type
    res.set('Content-Type', data.ContentType)
    res.send(data.Body) // Send the file content to the client
  })
})

/** upload a file to S3 */
expsRouter.post('/upload', function (req, res) {
  const { fileName, fileData } = req.body

  if (!fileData || !fileName) {
    return res.status(400).send({ error: 'No file data or filename provided.' })
  }

  // Decode the Base64 file
  const buffer = Buffer.from(fileData, 'base64')

  const params = {
    Bucket: process.env.BucketName,
    Key: fileName,
    Body: buffer,
    ContentType: getContentType(fileName), // Set the appropriate content type for the file
  }

  s3.upload(params, (err, data) => {
    if (err) {
      console.log('Error uploading file to S3:', err)
      return res.status(500).send('Error uploading file')
    }

    console.log('File uploaded successfully:')

    res.status(200).send({ message: 'File uploaded successfully' })
  })
})

module.exports = expsRouter

function getContentType(fileName) {
  const ext = fileName.split('.').pop().toLowerCase()

  switch (ext) {
    case 'jpeg':
    case 'jpg':
      return 'image/jpeg'
    case 'png':
      return 'image/png'
    case 'gif':
      return 'image/gif'
    case 'webp':
      return 'image/webp'
    case 'svg':
      return 'image/svg+xml'
    case 'pdf':
      return 'application/pdf'
    case 'txt':
      return 'text/plain'
    case 'html':
      return 'text/html'
    case 'json':
      return 'application/json'
    case 'zip':
      return 'application/zip'
    case 'mp3':
      return 'audio/mpeg'
    case 'mp4':
      return 'video/mp4'
    default:
      return 'application/octet-stream' // Default for binary data
  }
}
