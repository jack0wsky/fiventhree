export const addToCart = (key, name, price, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: { key: key, name: name, price: price, quantity: quantity },
  }
}
