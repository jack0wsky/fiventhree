import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ProductsWrapper, ProductsGrid } from './products.styled'
import Product from '../components/product/product'

const Products = () => {
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
              id
              localFile {
                childImageSharp {
                  fluid {
                    srcWebp
                    tracedSVG
                    base64
                    srcSetWebp
                  }
                }
              }
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
  `)

  const {
    allShopifyProduct: { edges },
  } = products
  return (
    <ProductsWrapper>
      <ProductsGrid>
        {edges.map((product) => {
          const {
            node: { shopifyId },
          } = product
          return <Product key={shopifyId} product={product} />
        })}
      </ProductsGrid>
    </ProductsWrapper>
  )
}

export default Products
