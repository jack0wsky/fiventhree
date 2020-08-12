export const getShippingMethod = (method) => {
  return {
    type: 'GET_SHIPPING_METHOD',
    payload: method,
  }
}
