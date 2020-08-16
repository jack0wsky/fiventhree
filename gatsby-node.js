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
              localFile {
                childImageSharp {
                  fluid {
                    srcWebp
                    tracedSVG
                    base64
                    srcSetWebp
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
