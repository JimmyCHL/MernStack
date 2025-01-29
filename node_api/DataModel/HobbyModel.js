const mongooseObj = require('./mongooseConnection')
schemaObj = mongooseObj.Schema //using the schema class from mongoose

let hobbySchema = new schemaObj({
  name: { type: String, required: true },
})

let HobbyModel = mongooseObj.model('hobby', hobbySchema)
module.exports = HobbyModel
