export const reviewsModalReducer = (state = false, action) => {
  if (action.type === 'HANDLE_REVIEWS') {
    return !state
  } else {
    return state
  }
}
