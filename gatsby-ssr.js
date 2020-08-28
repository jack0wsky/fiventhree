const React = require('react')
const { store } = require('./src/pages/index')
const { Provider } = require('react-redux')
const { ApolloProvider } = require('@apollo/client')
const client = require('./src/apollo/index')

exports.wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </Provider>
  )
}
