const express = require('express') // importing package
const app = express() // initializing the express application
const defaultRoutes = require('./Routes/defaultRoute')

/**
 * In Express, app.use() is a method used to mount middleware or
 * define routes on an Express application.
 */

// we can have multiple express applications running in our single project
const adminApp = express() // initializing the express application

//user, product, cart etc are the routes - examples

// const router = express.Router()

// Define routes for the admin application
adminApp.get('/hello', (req, res, next) => {
  res.send('This response comes from Admin App.')
})

app.use(express.json()) // middleware to parse the incoming request with JSON payloads

// application mounting
app.use('/admin', adminApp)

app.use('/', defaultRoutes)

//start or wild card operator
app.get('*', function (req, res) {
  res.send('404 Page Not Found - API is not ready yet')
})

app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
