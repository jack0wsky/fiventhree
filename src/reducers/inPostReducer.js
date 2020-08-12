const initState = {
  toggleModal: false,
}

export const handleInPostModal = (state = initState.toggleModal, action) => {
  if (action.type === 'HANDLE_INPOST') {
    return !state
  } else {
    return state
  }
}
