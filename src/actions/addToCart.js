export const addToCart = (product, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: { product, quantity },
  }
}
