import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { ADD_PRODUCT_TO_CART } from '../../../State/Cart/CartAction'
import '../Styles/ProductCard.css'

export const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch()

  const addProductToCart = (evt) => {
    evt.stopPropagation()
    evt.preventDefault()
    dispatch(ADD_PRODUCT_TO_CART(product))
  }

  return (
    <div>
      <button onClick={addProductToCart}>Add To Cart</button>
    </div>
  )
}

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired,
}
