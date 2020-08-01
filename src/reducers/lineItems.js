const initState = {
  lineItems: [],
}

export const handleLineItems = (state = initState.lineItems, action) => {
  switch (action.type) {
    case 'ADD_LINE_ITEMS': {
      return [
        ...state,
        {
          variantId: action.payload.shopifyId,
          quantity: action.payload.quantity,
        },
      ]
    }
    case 'REMOVE_LINE_ITEMS': {
      return state.filter((product) => {
        console.log(product)
      })
    }
    default: {
      return state
    }
  }
}
