export const addToCart = (product, price, size, id, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      product: product,
      price: price,
      size: size,
      shopifyId: id,
      quantity: quantity,
    },
  }
}
