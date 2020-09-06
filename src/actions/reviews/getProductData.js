export const getProductData = (image, shopifyId) => {
  return {
    type: 'GET_PRODUCT_DATA',
    payload: {
      image,
      shopifyId,
    },
  }
}
