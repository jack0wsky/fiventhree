import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ProductsWrapper, ProductsGrid } from './products.styled'
import Product from '../components/product/product'

const Products = () => {
  const [basicProducts, setBasicProducts] = useState([])
  const products = useStaticQuery(graphql`
    {
      allShopifyCollection(filter: { title: { eq: "Basic" } }) {
        edges {
          node {
            title
            products {
              title
              title
              productType
              shopifyId
              handle
              images {
                id
                originalSrc
              }
              variants {
                price
                sku
                title
                shopifyId
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const {
      allShopifyCollection: { edges },
    } = products
    setBasicProducts(edges)
  }, [])
  return (
    <ProductsWrapper>
      <ProductsGrid>
        {basicProducts.length > 0
          ? basicProducts[0].node.products.map((product) => {
              return <Product key={product.shopifyId} product={product} />
            })
          : null}
      </ProductsGrid>
    </ProductsWrapper>
  )
}

export default Products
