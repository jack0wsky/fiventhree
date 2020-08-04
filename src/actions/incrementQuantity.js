export const incrementQuantity = (id) => {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: id,
  }
}
