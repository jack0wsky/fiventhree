export const TemporaryLockerHolder = (state = null, action) => {
  if (action.type === 'SELECT_LOCKER') {
    return action.payload
  } else if (action.type === 'RESET_LOCKER') {
    return null
  } else {
    return state
  }
}
