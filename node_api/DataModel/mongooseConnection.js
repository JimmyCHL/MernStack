//create schema to start with
const mongooseObj = require('mongoose')

//creates db with name mernstack19 or opens a connection if already present
mongooseObj.connect('mongodb://localhost:27017/mernStack19')

module.exports = mongooseObj
