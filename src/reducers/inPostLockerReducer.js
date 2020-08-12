export const SelectedInPostLocker = (state = null, action) => {
  if (action.type === 'PROVIDE_INPOST_LOCKER') {
    return action.payload
  } else {
    return state
  }
}
