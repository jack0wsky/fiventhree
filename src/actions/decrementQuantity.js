export const decrementQuantity = (id) => {
  return {
    type: 'DECREMENT_QUANTITY',
    payload: id,
  }
}
