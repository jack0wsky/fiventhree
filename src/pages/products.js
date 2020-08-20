import React from 'react'
import {
  Wrapper,
  ProductsGrid,
  Categories,
  Header,
  External,
} from '../components/produktyPage/products.styled'
import { useStaticQuery, graphql } from 'gatsby'
import Product from '../components/product/product'

const Products = () => {
  const {
    allShopifyProduct: { edges },
  } = useStaticQuery(graphql`
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
                  fixed {
                    src
                  }
                }
              }
            }
            variants {
              sku
              price
              title
              shopifyId
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <ProductsGrid>
        {edges.map(({ node }) => {
          return <Product key={node.shopifyId} product={node} />
        })}
      </ProductsGrid>
    </Wrapper>
  )
}

export default Products

/*
<Categories>
        <Header>Kategorie</Header>
        <External href="#">Naklejki</External>
      </Categories>
 */
