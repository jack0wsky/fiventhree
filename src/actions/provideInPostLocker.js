export const provideInPostLocker = (inpost) => {
  return {
    type: 'PROVIDE_INPOST_LOCKER',
    payload: {
      name: inpost.name,
      street: inpost.address.line1,
      openingHours: inpost.opening_hours,
      city: inpost.address.line2,
    },
  }
}
