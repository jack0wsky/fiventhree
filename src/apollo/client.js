import { ApolloClient, gql, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from '@apollo/client'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri:
    'https://api-eu-central-1.graphcms.com/v2/ckee1oau879gb01wf5z0o3dsn/master',
  fetch,
  cache: new InMemoryCache(),
  link: new createHttpLink({
    uri:
      'https://api-eu-central-1.graphcms.com/v2/ckee1oau879gb01wf5z0o3dsn/master',
  }),
})

client
  .query({
    query: gql`
      query Reviews {
        author
        rate
      }
    `,
  })
  .then((result) => console.log(result))

export default client
