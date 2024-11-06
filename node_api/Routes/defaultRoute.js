const express = require('express') //import package
const expsRouter = express.Router({ strict: true, caseSensitive: true }) // a separate route table to create and handle our api's

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
  res.sendFile(__dirname + '/index.html')
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

module.exports = expsRouter
