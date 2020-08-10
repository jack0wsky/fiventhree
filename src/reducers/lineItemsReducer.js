const initState = {
  lineItems: [],
}

export const handleLineItems = (state = initState.lineItems, action) => {
  switch (action.type) {
    case 'ADD_LINE_ITEMS': {
      const found = state.find((product) => {
        return product.shopifyId === action.payload.shopifyId
      })
      if (found) {
        found.quantity += action.payload.quantity
        return state
      }
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
        return product.variantId !== action.payload
      })
    }
    case 'DECREMENT_QUANTITY': {
      const found = state.find((item) => {
        return item.variantId === action.payload
      })
      found.quantity -= 1
      return state
    }
    case 'INCREMENT_QUANTITY': {
      const found = state.find((item) => {
        return item.variantId === action.payload
      })
      found.quantity += 1
      return state
    }
    default: {
      return state
    }
  }
}
