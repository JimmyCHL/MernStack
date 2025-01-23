import PropTypes from 'prop-types'

import { useState } from 'react'
import '../Styles/ProductCard.css'
import { AddToCartButton } from './AddToCartButton'
import { GoToReviewButton } from './GoToReviewButton'

export const ProductCard = ({ product }) => {
  const [showHide, toggleShowHide] = useState(false)

  const clickHandler = (evt) => {
    toggleShowHide((prev) => !prev)
  }

  return (
    <div className="product col-md-11 m-auto p-3">
      <div className="" id="cardContainer" onClick={clickHandler}>
        {product.name}
        {showHide ? (
          <ul>
            <li>Price: ${product.price}</li>
            <li>Description: {product.desc}</li>
            <li>Category: {product.category}</li>
            <li>Rate: {product.rate}</li>
            <li style={{ display: 'flex' }}>
              <AddToCartButton product={product} />
              <GoToReviewButton product={product} />
            </li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}
