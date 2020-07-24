export const addToCart = (key, image, name, price, size, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      key: key,
      image: image,
      name: name,
      price: price,
      size: size,
      quantity: quantity,
    },
  }
}
