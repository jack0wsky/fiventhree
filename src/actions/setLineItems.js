export const setLineItems = (shopifyId, quantity) => {
  return {
    type: 'ADD_LINE_ITEMS',
    payload: {
      shopifyId: shopifyId,
      quantity: quantity,
    },
  }
}
