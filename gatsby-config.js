const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fiventhree | Clothing`,
    description: `Kupuj koszulkę streetwear z nadrukiem 8 gwiazd w Fiventhree. Kupuj online z wygodną dostawą.`,
    author: `45human`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fiventhree | Streetwear Clothing Brand`,
        short_name: `Fiventhree`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: 'src/images/fiventhree-favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134421805-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'pma1aeo',
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
        apiVersion: '2020-04',
        verbose: true,
        includeCollections: ['shop', 'content'],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/products/*`, `/contact`],
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri:
          'https://api-eu-central-1.graphcms.com/v2/ckee1oau879gb01wf5z0o3dsn/master',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'REVIEWS',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'reviews',
        // Url to query from
        url:
          'https://api-eu-central-1.graphcms.com/v2/ckee1oau879gb01wf5z0o3dsn/master',
      },
    },
  ],
}

/*


     */
