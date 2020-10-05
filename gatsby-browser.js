const React = require('react')
require('@stripe/stripe-js')
const { store } = require('./src/pages/index')
const { Provider } = require('react-redux')
const { ApolloProvider } = require('react-apollo')
const client = require('./src/apollo/client')

exports.wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </Provider>
  )
}
