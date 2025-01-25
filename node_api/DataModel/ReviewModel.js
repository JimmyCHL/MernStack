const mongooseObj = require('./mongooseConnection')

schemaObj = mongooseObj.Schema //using the schema class from mongoose

const reviewSchema = new schemaObj({
  user: {
    type: schemaObj.Types.ObjectId, // Referencing the User model
    ref: 'user', // Name of the model to populate with
    required: true,
  },
  product: {
    type: schemaObj.Types.ObjectId, // Referencing the Product model
    ref: 'product', // Name of the model to populate with
    required: true,
  },
  rating: { type: Number, required: true, default: 1, min: 1, max: 5 },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  parent: {
    type: schemaObj.Types.ObjectId,
    ref: 'review',
    default: null,
  },
})

const ReviewModel = mongooseObj.model('review', reviewSchema)
module.exports = ReviewModel
