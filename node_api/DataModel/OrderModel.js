const mongooseObj = require('./mongooseConnection')

schemaObj = mongooseObj.Schema //using the schema class from mongoose

const itemStatusEnum = Object.freeze({
  active: 'active',
  inactive: 'inactive',
})

const orderStatusEnum = Object.freeze({
  confirmed: 'confirmed',
  cancelled: 'cancelled',
  delivered: 'delivered',
})

const orderItemSchema = new schemaObj({
  item: {
    type: schemaObj.Types.ObjectId, // Referencing the Product model
    ref: 'product', // Name of the model to populate with
    required: true,
  },
  status: {
    type: String,
    enum: [itemStatusEnum.active, itemStatusEnum.inactive],
    default: itemStatusEnum.active,
  },
  quantity: { type: Number, required: true, default: 1, min: 1 },
  price: { type: Number, required: true, min: 0 },
})

const orderSchema = new schemaObj({
  user: {
    type: schemaObj.Types.ObjectId, // Referencing the User model
    ref: 'user', // Name of the model to populate with
    required: true,
  },
  orderNumber: { type: String, unique: true },
  items: { type: [orderItemSchema], default: [] },
  orderDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: [orderStatusEnum.confirmed, orderStatusEnum.cancelled, orderStatusEnum.delivered],
    default: orderStatusEnum.confirmed,
  },
  discount: {
    type: {
      code: { type: String, default: null }, // Discount code, defaulting to null
      percentage: { type: Number, default: 0, min: 0, max: 100 }, // Discount percentage, default to 0
    },
    default: null, // Entire discount object is null by default
    _id: false,
  },
  totalAmount: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
})

// Pre-save hook to generate orderNumber
orderSchema.pre('save', async function (next) {
  // Generate a unique order number (you can customize this logic)
  if (!this.orderNumber) {
    const timestamp = Date.now() // Or you can use another method to generate unique order number
    this.orderNumber = `ORD-${timestamp}` // Format as desired (e.g., ORD-1616166161616)
  }
  next()
})

const OrderModel = mongooseObj.model('order', orderSchema)
module.exports = { OrderModel, orderStatusEnum }
