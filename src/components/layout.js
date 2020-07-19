import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import "../layout.css"
import "../font.css"

const Global = createGlobalStyle`
  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: aktiv-grotesk-extended, sans-serif;
    font-style: normal;
    font-weight: 700;
    background-color: #000;
    @import url("https://use.typekit.net/pma1aeo.css");
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        edges {
          node {
            siteMetadata {
              author
              description
              title
            }
          }
        }
      }
    }
  `)
  const {
    allSite: { edges },
  } = data
  return (
    <>
      <Global />
      {edges.map(node => {
        console.log(node)
        return (
          <Helmet>
            <meta charSet="utf-8" />
            <title>{node.node.siteMetadata.title}</title>
            <meta
              name="description"
              content={node.node.siteMetadata.description}
            />
          </Helmet>
        )
      })}
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
