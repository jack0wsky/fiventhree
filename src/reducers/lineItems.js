const initState = {
  lineItems: [],
}

export const handleLineItems = (state = initState.lineItems, action) => {
  switch (action.type) {
    case 'ADD_LINE_ITEMS': {
      return [
        ...state,
        {
          shopifyId: action.payload.shopifyId,
          quantity: action.payload.quantity,
        },
      ]
    }
    default: {
      return state
    }
  }
}
