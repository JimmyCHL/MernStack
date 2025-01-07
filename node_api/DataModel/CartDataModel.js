const mongooseObj = require('./mongooseConnection')

schemaObj = mongooseObj.Schema //using the schema class from mongoose

const cartSchema = new schemaObj({
  userId: { type: String, required: true },
  cart: { type: Array, default: [] },
})

const CartModel = mongooseObj.model('cart', cartSchema)
module.exports = CartModel
