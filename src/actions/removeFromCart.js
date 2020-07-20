export const removeFromCart = (key) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: key,
  }
}
