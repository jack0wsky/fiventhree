export const reviewsModalReducer = (state = true, action) => {
  if (action.type === 'HANDLE_REVIEWS') {
    return !state
  } else {
    return state
  }
}
