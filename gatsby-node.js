/*
const path = require(`path`)

exports.createPages = ({graphql, actions }) => {
  const { createPage } = actions
  return products.then((result) => {
    result.forEach(({ node }) => {
      createPage({
        path: `/product/${node.slug}/`,
        component: path.resolve(`./src/template/productTemplate.jsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          product: products,
        },
      })
    })
  })
}


 */
