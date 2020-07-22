export const addToCart = (key, name, price, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: { key, name, price, quantity },
  }
}
