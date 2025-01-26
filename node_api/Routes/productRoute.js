const express = require('express') //import package
const productRouter = express.Router({ strict: true, caseSensitive: true }) // a separate route table to create and handle our api's
const productModal = require('../DataModel/ProductModel')

productRouter.post('/api/addProduct', (req, res) => {
  const data = req.body

  productModal
    .findOne({ name: data.name })
    .then((product) => {
      if (product) {
        console.log('Product already exists', product)
        res.send('Product already exists')
      } else {
        const productSchemaObj = new productModal(data)
        console.log('productSchemaObj', productSchemaObj)
        productSchemaObj
          .save()
          .then((product) => {
            console.log('Successfully add new product', product)
            res.send(product)
          })
          .catch((err1) => {
            console.log('error while adding product', err1)
            res.send('error while adding product')
          })
      }
    })
    .catch((error) => {
      console.log('error while adding product here', error)
      res.send('error while adding product')
    })
})

productRouter.get('/api/getProducts', (req, res) => {
  productModal
    .find()
    .then((products) => {
      res.send(products)
    })
    .catch((err) => {
      console.log(err)
      res.send('Error while fetching products')
    })
})

productRouter.post('/api/getProductById', (req, res) => {
  const { id } = req.body
  productModal
    .findById(id)
    .then((product) => {
      res.send(product)
    })
    .catch((err) => {
      console.log(err)
      res.send('Error while fetching product')
    })
})
module.exports = productRouter
