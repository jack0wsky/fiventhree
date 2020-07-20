const React = require('react')
const { store } = require('./src/pages/index')
const { Provider } = require('react-redux')

exports.wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
