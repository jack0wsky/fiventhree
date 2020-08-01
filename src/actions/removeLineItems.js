export const removeLineItems = (id) => {
  return {
    type: 'REMOVE_LINE_ITEMS',
    payload: id,
  }
}
