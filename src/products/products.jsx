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
                    src
                  }
                  fixed {
                    src
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
          return <Product key={product.shopifyId} product={product} />
        })}
      </ProductsGrid>
    </ProductsWrapper>
  )
}

export default Products

/*
{products.map((product) => {
          return <Product key={product.key} product={product} />
        })}
 */
