import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri:
    'https://api-eu-central-1.graphcms.com/v2/ckee1oau879gb01wf5z0o3dsn/master',
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query Reviews {
        author
      }
    `,
  })
  .then((result) => console.log(result))

export default client
