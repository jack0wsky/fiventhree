export const getFromLocalStorage = (data) => {
  return {
    type: 'GET_DATA',
    payload: data,
  }
}
