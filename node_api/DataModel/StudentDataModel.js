const mongooseObj = require('./mongooseConnection')

schemaObj = mongooseObj.Schema //using the schema class from mongoose

const studentSchema = new schemaObj({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
})

let StudentModal = mongooseObj.model('student', studentSchema)
module.exports = StudentModal //with capability to retrieve save update queries with mongo db
