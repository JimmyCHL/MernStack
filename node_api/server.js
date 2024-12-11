const express = require('express') // importing package
const app = express() // initializing the express application
const defaultRoutes = require('./Routes/defaultRoute')
const userRoutes = require('./Routes/userRoute')
const s3 = require('./awsConfig')
const cors = require('cors')

/**
 * In Express, app.use() is a method used to mount middleware or
 * define routes on an Express application.
 */

// we can have multiple express applications running in our single project
const adminApp = express() // initializing the express application

const userApp = express()

//user, product, cart etc are the routes - examples

// const router = express.Router()

// Enable CORS for a specific origin (localhost:9090)
app.use(
  cors({
    origin: 'http://localhost:9090', // Replace with your frontend URL
  })
)

// Define routes for the admin application
adminApp.get('/hello', (req, res, next) => {
  res.send('This response comes from Admin App.')
})

userApp.use('/', userRoutes) //redirecting all the calls having user in it to user router

app.use(express.json()) // middleware to parse the incoming request with JSON payloads

// application mounting
app.use('/admin', adminApp)

app.use('/user', userApp)

app.use('/', defaultRoutes)

//start or wild card operator
app.get('*', function (req, res) {
  res.send('404 Page Not Found - API is not ready yet')
})

app.listen(3000, function () {
  console.log('Server is running on port 3000')
})

// List buckets as a test
s3.listBuckets((err, data) => {
  if (err) {
    console.log('Error:', err)
  } else {
    process.env.BucketName = data.Buckets[0].Name || ''
  }
})
