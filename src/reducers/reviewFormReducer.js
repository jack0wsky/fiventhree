export const handleReviewForm = (state = false, action) => {
  if (action.type === 'HANDLE_REVIEW_FORM') {
    return !state
  } else {
    return state
  }
}
