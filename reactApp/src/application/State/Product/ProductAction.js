import axiosInstance from '../../config/globalAxios'
import * as actionTypes from '../ActionTypes'

export const ADD_PRODUCT = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: product,
  }
}

export const fetchProductsFromServer = () => {
  return (dispatch) => {
    axiosInstance
      .get('/product/api/getProducts')
      .then((collection) => {
        let products = collection.data
        dispatch({
          type: actionTypes.fetchProducts,
          payload: products,
        })
      })
      .catch((error) => console.log(error))
  }
}

export const saveProductToServer = (product) => {
  return (dispatch) => {
    axiosInstance
      .post('/product/api/addProduct', product)
      .then((collection) => {
        console.log(collection)
        let product = collection.data
        if (product === 'error while adding product') {
          alert('Error while adding product')
          return
        } else if (product === 'Product already exists') {
          alert('Product already exists')
          return
        }

        dispatch(ADD_PRODUCT(product))

        console.log('Product added successfully', product)
        alert('Product added successfully')
      })
      .catch((error) => console.log(error))
  }
}

// Fetch product by ID
export const fetchProductById = async (productId, callback) => {
  try {
    const response = await axiosInstance.post('/product/api/getProductById', { id: productId })
    const product = response.data
    callback(product)
  } catch (err) {
    console.log('There was an error:', err)
    alert('There was an error:', err)
  }
}
