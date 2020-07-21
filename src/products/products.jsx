import React, { useState } from 'react'
import { ProductsWrapper, ProductsGrid } from './products.styled'
import Product from '../components/product/product'

const Products = () => {
  const [products] = useState([
    {
      key: 1,
      name: '***** *** Koszulka',
      price: 39.99,
      slug: 'osiem-gwiazd-t-shirt',
    },
    {
      key: 2,
      name: '***** *** PRIDE Koszulka',
      price: 39.99,
      slug: 'osiem-gwiazd-pride-t-shirt',
    },
    {
      key: 3,
      name: '***** *** BOGO Koszulka',
      price: 39.99,
      slug: 'osiem-gwiazd-bogo-t-shirt',
    },
  ])
  return (
    <ProductsWrapper>
      <ProductsGrid>
        {products.map((product) => {
          return <Product key={product.key} product={product} />
        })}
      </ProductsGrid>
    </ProductsWrapper>
  )
}

export default Products
