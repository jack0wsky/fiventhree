import React from 'react'
import {
  Wrapper,
  ProductsGrid,
  Categories,
  Header,
  External,
} from '../components/produktyPage/products.styled'
import { graphql, StaticQuery } from 'gatsby'
import Product from '../components/product/product'

const Products = () => {
  return (
    <Wrapper>
      <ProductsGrid>
        <StaticQuery
          query={graphql`
            query Products {
              allShopifyProduct {
                edges {
                  node {
                    title
                    productType
                    shopifyId
                    handle
                    images {
                      id
                      originalSrc
                      localFile {
                        childImageSharp {
                          fluid {
                            tracedSVG
                            base64
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
          `}
          render={({ allShopifyProduct: { edges } }) => {
            edges.map(({ node }) => {
              return <Product key={node.shopifyId} product={node} />
            })
          }}
        />
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
