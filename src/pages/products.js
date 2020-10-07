import React from 'react'
import {
  Wrapper,
  ProductsGrid,
  //Categories,
  //Header,
  //External,
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
          `}
          render={({ allShopifyCollection: { edges } }) => {
            return edges[0].node.products.map((product) => {
              return <Product key={product.shopifyId} product={product} />
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
