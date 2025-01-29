const express = require('express') //import package
const hobbyRouter = express.Router({ strict: true, caseSensitive: true }) // a separate route table to create and handle our api's
const hobbyModel = require('../DataModel/HobbyModel')

hobbyRouter.post('/api/addHobby', (req, res) => {
  const hobby = req.body.name
  console.log(hobby)

  hobbyModel.findOne({ name: hobby }).then((existingHobby) => {
    if (existingHobby) {
      res.send('Hobby already exists')
    } else {
      const hobbyObj = new hobbyModel(req.body)
      hobbyObj
        .save()
        .then((newHobby) => {
          res.send(newHobby)
        })
        .catch((err) => {
          res.send('Error while adding hobby')
        })
    }
  })
})

hobbyRouter.get('/api/fetchHobbies', (_, res) => {
  hobbyModel
    .find()
    .then((hobbies) => {
      res.send(hobbies)
    })
    .catch((err) => {
      console.log(err)
      res.send('Error while fetching hobbies')
    })
})

module.exports = hobbyRouter
