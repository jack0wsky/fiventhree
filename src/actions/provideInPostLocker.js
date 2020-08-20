export const provideInPostLocker = (inpost) => {
  return {
    type: 'PROVIDE_INPOST_LOCKER',
    payload: {
      name: inpost.name,
      street: inpost.street,
      openingHours: inpost.opening_hours,
      city: inpost.city,
    },
  }
}
