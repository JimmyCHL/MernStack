const express = require('express') //import package
const userRouter = express.Router({ strict: true, caseSensitive: true }) // a separate route table to create and handle our api's
const userDataModel = require('../DataModel/UserDataModel')
const { jwt } = require('../jwtConfig')

userRouter.post('/api/signinup', (req, res) => {
  let userObj = req.body //user object passed in the body of sigininup api

  console.log('userobj', userObj)

  userDataModel
    .findOne({ userName: req.body.userName })
    .then((existingUser) => {
      if (existingUser) {
        //user exists so send the user details - sign in

        // Create a JWT token (should convert Mongodb object to plain object)
        const token = jwt.sign(existingUser.toObject(), process.env.JWT_SECRET, {
          expiresIn: '1h',
        })

        res.send({
          user: existingUser,
          token,
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

            // Create a JWT token
            const token = jwt.sign(newUser.toObject(), process.env.JWT_SECRET, {
              expiresIn: '1h',
            })

            res.send({
              user: newUser,
              token,
            }) //{userName : "value"....}
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

module.exports = userRouter
