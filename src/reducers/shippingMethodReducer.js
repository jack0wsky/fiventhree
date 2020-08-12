export const shippingMethod = (state = {}, action) => {
  if (action.type === 'GET_SHIPPING_METHOD') {
    return action.payload
  } else {
    return state
  }
}
