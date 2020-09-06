export const reviewsModalReducer = (state = false, action) => {
  if (action.type === 'HANDLE_REVIEWS') {
    return !state
  } else {
    return state
  }
}

export const getProductData = (state = null, action) => {
  if (action.type === 'GET_PRODUCT_DATA') {
    return action.payload
  } else {
    return state
  }
}
