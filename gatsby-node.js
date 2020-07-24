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
            options {
              values
            }
            description
            productType
            shopifyId
            variants {
              price
            }
          }
        }
      }
    }
  `)

  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/produkty/${node.shopifyId}`,
      component: path.resolve(`./src/template/productTemplate.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        product: node,
      },
    })
  })
}
