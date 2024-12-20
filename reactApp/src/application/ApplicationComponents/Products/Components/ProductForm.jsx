import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveProductToServer } from '../../../State/Product/ProductAction'
import { productSelector } from '../../../State/Product/ProductSelector'

/** Product Form component */
export const ProductForm = () => {
  const dispatcher = useDispatch()
  const subscribedProduct = useSelector(productSelector)
  const productDetailsRef = useRef({})
  const productRef = useRef({})
  const [newAddedProduct, setNewAddedProduct] = useState({})

  useEffect(() => {
    setNewAddedProduct(subscribedProduct)
    return () => {
      console.log('Component Unmounted or the subscribed product changed (useEffect gets triggered again.)')
    }
  }, [subscribedProduct])

  // Text Change Handler
  const onTextChange = (evt) => {
    const name = evt.target.name
    const val = evt.target.value
    productRef.current[name] = val
    evt.preventDefault()
  }

  // Add Product Handler
  const addProductHandler = (evt) => {
    const product = productRef.current

    if (!product.name || !product.price || !product.desc || !product.rate || !product.category) {
      alert('Please fill all the fields')
      return
    }

    // Save product to server and dispatch the action
    dispatcher(saveProductToServer(product))

    //reset the form
    productRef.current = {}
    Object.keys(productDetailsRef.current).forEach((key) => (productDetailsRef.current[key].value = ''))

    evt.preventDefault()
  }

  return (
    <>
      <h1>Add Product Page</h1>
      <section className={'componentClass'}>
        <div className="form col-md-8">
          <div className="col-md-12">
            <b>Product Name</b>
            <input
              ref={(el) => (productDetailsRef.current['name'] = el)}
              type="text"
              name="name"
              className="form-control col-md-6 username"
              placeholder="Product Name"
              onChange={onTextChange}
              maxLength={40}
            />
          </div>
          <div className="col-md-12">
            <b>Price</b>
            <input
              ref={(el) => (productDetailsRef.current['price'] = el)}
              type="number"
              name="price"
              className="form-control col-md-6 pass"
              placeholder="Price"
              onChange={onTextChange}
            />
          </div>
          <div className="col-md-12">
            <b>Description</b>
            <input
              ref={(el) => (productDetailsRef.current['desc'] = el)}
              type="text"
              name="desc"
              className="form-control col-md-6 street"
              placeholder="Description"
              onChange={onTextChange}
            />
          </div>

          <div className="col-md-12">
            <b>Rate</b>
            <input
              ref={(el) => (productDetailsRef.current['rate'] = el)}
              type="number"
              className="form-control col-md-6 mobile"
              placeholder="Rate"
              name="rate"
              max={5}
              min={0}
              onChange={onTextChange}
            />
          </div>

          <div className="col-md-12">
            <b>Category</b>
            <input
              ref={(el) => (productDetailsRef.current['category'] = el)}
              type="text"
              className="form-control col-md-6 mobile"
              placeholder="Category"
              name="category"
              onChange={onTextChange}
            />
          </div>

          <input
            type="button"
            className={'btn btn-primary col-md-2 saveUser'}
            value="Add Product"
            onClick={addProductHandler}
          />
        </div>
      </section>
      <div>{newAddedProduct?.name && <p>Your just added a new product: Name {newAddedProduct.name}</p>}</div>
    </>
  )
}
