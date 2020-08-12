export const provideInPostLocker = (inpost) => {
  return {
    type: 'PROVIDE_INPOST_LOCKER',
    payload: {
      name: inpost.name,
      street: inpost.address_details.street,
      city: inpost.address_details.city,
      postCode: inpost.address_details.post_code,
    },
  }
}
