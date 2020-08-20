export const selectLocker = (point) => {
  return {
    type: 'SELECT_LOCKER',
    payload: {
      name: point.name,
      street: point.address.line1,
      openingHours: point.opening_hours,
      city: point.address.line2,
    },
  }
}
