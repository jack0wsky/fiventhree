import React from 'react'
import {
  Wrapper,
  ProductsGrid,
} from '../components/produktyPage/products.styled'
import { useStaticQuery, graphql } from 'gatsby'
import Product from '../components/product/product'

const Produkty = () => {
  const products = useStaticQuery(graphql`
    {
      allShopifyProduct {
        edges {
          node {
            title
            productType
            shopifyId
            handle
            images {
              originalSrc
            }
            variants {
              price
            }
          }
        }
      }
    }
  `)
  const {
    allShopifyProduct: { edges },
  } = products
  return (
    <Wrapper>
      <ProductsGrid>
        {edges.map((product) => {
          return <Product key={product.shopifyId} product={product} />
        })}
      </ProductsGrid>
    </Wrapper>
  )
}

export default Produkty
