const mongooseObj = require('./mongooseConnection')

schemaObj = mongooseObj.Schema //using the schema class from mongoose

const productSchema = new schemaObj({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  rate: { type: Number, required: true, min: 0, max: 5 },
  category: { type: String, required: true },
})

const ProductModal = mongooseObj.model('product', productSchema)

module.exports = ProductModal
