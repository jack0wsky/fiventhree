const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            title
            handle
            options {
              values
            }
            images {
              id
              originalSrc
              localFile {
                childImageSharp {
                  fluid {
                    base64
                    src
                    srcSet
                    tracedSVG
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
            descriptionHtml
            productType
            shopifyId
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

  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    node.variants.forEach((variant) => {
      createPage({
        path: `/produkty/${variant.sku}`,
        component: path.resolve(`./src/template/productTemplate.jsx`),
        context: {
          product: node,
          variant: variant,
        },
      })
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query DROPS {
      reviews {
        drops {
          name
          number
          startDate
          endDate
          id
          image {
            url
            fileName
          }
          path
          clients {
            createdAt
          }
        }
      }
    }
  `)

  result.data.reviews.drops.forEach((drop) => {
    createPage({
      path: `/drops/${drop.path}`,
      component: path.resolve(`./src/dropTemplate/dropTemplate.jsx`),
      context: {
        drop,
      },
    })
  })
}
