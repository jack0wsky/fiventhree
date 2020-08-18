import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../images/fiventhree-favicon.svg'

function SEO({ description, lang, meta, keywords }) {
  const [dynamicTitle, setTitle] = useState('Fiventhree | Clothing')

  const setDynamicTitle = () => {
    if (window) {
      if (window.location.pathname.includes('/produkty')) {
        setTitle('5&3 | Produkty')
      }
      if (window.location.pathname.includes('/kontakt')) {
        setTitle('5&3 | Kontakt')
      }
      if (window.location.pathname === '/') {
        setTitle('Fiventhree | Clothing')
      }
    }
  }
  useEffect(() => {
    setDynamicTitle()
  })
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={dynamicTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: dynamicTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
            link={[
              { rel: 'shortcut icon', type: 'image/svg', href: `${favicon}` },
            ]}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
