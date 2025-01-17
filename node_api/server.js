const express = require('express') // importing package
const app = express() // initializing the express application
const defaultRoutes = require('./Routes/defaultRoute')
const userRoutes = require('./Routes/userRoute')
const studentRoutes = require('./Routes/studentRoute')
const productRoutes = require('./Routes/productRoute')
const cartRoutes = require('./Routes/cartRoute')
const s3 = require('./awsConfig')
const cors = require('cors')
const orderRouter = require('./Routes/orderRoute')

/**
 * globalThis is a standardized way to access the global object in JavaScript, regardless of the environment your code is running in (e.g., browser, Node.js, Web Workers).
 */
globalThis.parentDirectory = __dirname

/**
 * In Express, app.use() is a method used to mount middleware or
 * define routes on an Express application.
 */

// we can have multiple express applications running in our single project
const adminApp = express() // initializing the express application

const userApp = express()

const studentApp = express()

const productApp = express()

const cartApp = express()

const orderApp = express()

//user, product, cart etc are the routes - examples

// const router = express.Router()

//cors - will be used as middleware to bypass at root level or individual api level to allow cross origin access
// Enable CORS for a specific origin (localhost:9090)
app.use(
  cors({
    origin: 'http://localhost:9090', // Replace with your frontend URL
  })
)

//express.static exposes a directory or a file to a particular URL so it's contents can be publicly accessed.
app.use('/static', express.static('public/resources')) // exposing the public/resources directory to the /static URL

app.use(express.json({ limit: '2mb' })) // middleware to parse the incoming request with JSON payloads

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true })) // middleware to parse the incoming request with URL-encoded payloads

// Define routes for the admin application
adminApp.get('/hello', (req, res, next) => {
  res.send('This response comes from Admin App.')
})

userApp.use('/', userRoutes) //redirecting all the calls having user in it to user router

studentApp.use('/', studentRoutes) //redirecting all the calls having student in it to student router

productApp.use('/', productRoutes) //redirecting all the calls having product in it to product router

cartApp.use('/', cartRoutes) //redirecting all the calls having cart in it to cart router

orderApp.use('/', orderRouter)

// application mounting
app.use('/admin', adminApp)

app.use('/user', userApp)

app.use('/student', studentApp)

app.use('/product', productApp)

app.use('/cart', cartApp)

app.use('/order', orderApp)

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
