import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsFromServer } from '../../../State/Product/ProductAction'
import { productSelector, productsSelector } from '../../../State/Product/ProductSelector'
import { ProductCard } from './ProductCard'

export const ProductScreen = () => {
  const products = useSelector(productsSelector)
  const product = useSelector(productSelector)
  const dispatch = useDispatch()

  // Fetch products from server after component is mounted or we have a new product
  useEffect(() => {
    dispatch(fetchProductsFromServer())
  }, [product])

  return (
    <>
      {products && products.length > 0 ? (
        products.map((product) => {
          return <ProductCard product={product} key={product._id} />
        })
      ) : (
        <h4>No Products To Display</h4>
      )}
    </>
  )
}
