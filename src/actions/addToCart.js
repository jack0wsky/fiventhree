export const addToCart = (product, size, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      product: product,
      size: size,
      quantity: quantity,
    },
  }
}
