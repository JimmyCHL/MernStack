const express = require('express') //import package
const studentRouter = express.Router({ strict: true, caseSensitive: true }) // a separate route table to create and handle our api's
const studentModel = require('../DataModel/StudentDataModel')

studentRouter.post('/api/signinup', (req, res) => {
  const data = req.body

  studentModel
    .findOne({ userName: data.userName })
    .then((student) => {
      if (student) {
        res.send(student)
      } else {
        const studentSchemaObj = new studentModel(data)
        console.log('studentSchemaObj', studentSchemaObj)
        studentSchemaObj
          .save()
          .then((student) => {
            console.log('successful signup ', student)
            res.send(student)
          })
          .catch((err1) => {
            console.log('err signup', err1)
            res.send('error while sign up')
          })
      }
    })
    .catch((error) => {
      console.log('Error while fetching existing student', error)
      res.send('Error while fetching existing student')
    })
})

studentRouter.get('/api/students', (req, res) => {
  studentModel
    .find() //find all students from student collection and send back
    .then((students) => {
      res.send(students)
    })
    .catch((err) => {
      console.log(err)
      res.send('Error while fetching students')
    })
})

module.exports = studentRouter
