const express = require('express') //import package
const userRouter = express.Router({ strict: true, caseSensitive: true }) // a separate route table to create and handle our api's
const userDataModel = require('../DataModel/UserDataModel')
const notificationDataModel = require('../DataModel/NotificationModel')
const { jwt } = require('../jwtConfig')

const notificationsStatic = [
  "Welcome to the app! We're glad you're here.",
  "Don't forget to check out our new features.",
  'Create products from Product Form Screen.',
  'Add products from Product list Screen to Cart.',
  'Create a new coupon from Coupon Generation Screen. Use it while placing an order.',
  'Review Cart items from Cart and place an order from Checkout.',
  'After placing your order, you can view it in the Orders page.',
  'You can reorder and cancel orders from the Orders page.',
  "Congratulations! You've completed the app tour.",
]

userRouter.post('/api/signinup', (req, res) => {
  let userObj = req.body //user object passed in the body of sigininup api

  console.log('userobj', userObj)

  userDataModel
    .findOne({ userName: req.body.userName })
    .then((existingUser) => {
      if (existingUser) {
        userDataModel
          .findOne({ userName: req.body.userName })
          .populate('hobby')
          .exec()
          .then((localUser) => {
            //user exists so send the user details - sign in

            // Create a JWT token (should convert Mongodb object to plain object)
            const token = jwt.sign(localUser.toObject(), process.env.JWT_SECRET, {
              expiresIn: '1h',
            })

            res.send({
              user: localUser,
              token,
            })
          })
      } //user doesn't exists so create one and create one - sign up
      else {
        let userSchemaObj = new userDataModel(req.body) //for new user
        console.log('userSchemaObj', userSchemaObj)
        console.log(typeof userSchemaObj.mobile)
        console.log(typeof req.body.mobile)
        userSchemaObj
          .save()
          .then((newUser) => {
            //will get _id once document is created
            console.log('successful signup ', newUser)

            // notification contents
            const notifications = notificationsStatic.map((notification) => {
              return {
                user: newUser._id,
                content: notification,
              }
            })

            /** When the new user is created, we should add the static notifications to help users.
             */
            notificationDataModel.insertMany(notifications).then(() => {
              // Create a JWT token
              const token = jwt.sign(newUser.toObject(), process.env.JWT_SECRET, {
                expiresIn: '1h',
              })

              res.send({
                user: newUser,
                token,
              }) //{userName : "value"....}
            })
          })
          .catch((err1) => {
            console.log('err signup', err1)
            res.send('error while sign up')
          })
      }
    })
    .catch((error) => {
      console.log('Error while fetching existing user', error)
      res.send('Error while fetching existing user')
    })
})

userRouter.get('/api/users', (req, res) => {
  userDataModel
    .find() //find all the users from user collection and send back
    .then((users) => {
      res.send(users)
    })
    .catch((err) => {
      console.log(err)
      res.send('Error while fetching users')
    })
})

userRouter.put('/api/updateHobby', (req, res) => {
  const { userId, hobby } = req.body
  userDataModel
    .findByIdAndUpdate(userId, { hobby: hobby._id }, { new: true }) //new:true will return the updated <document>   </document>
    .then((user) => {
      userDataModel
        .findById(userId)
        .populate('hobby')
        .exec()
        .then((localUser) => {
          res.send(localUser)
        })
    })
    .catch((err) => {
      console.log(err)
      res.send('Error while updating hobby')
    })
})
module.exports = userRouter
