const initState = {
  toggleMenu: false,
  handleCart: [],
  toggleCart: false,
  handleCheckout: '',
}

export const handleMenu = (state = initState.toggleMenu, action) => {
  switch (action.type) {
    case 'HANDLE_MENU': {
      return !state
    }
    default: {
      return state
    }
  }
}

export const handleCart = (state = initState.handleCart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const found = state.find((product) => {
        return (
          product.product.product.shopifyId, action.payload.product.shopifyId
        )
      })
      const differentSize = state.find((product) => {
        return product.size.find((size) => {
          return size === action.payload.size
        })
      })
      if (differentSize) {
        found.quantity += 1
        return state
      } else {
        return [
          ...state,
          {
            product: action.payload,
            size: [...action.payload.size],
            quantity: action.payload.quantity,
          },
        ]
      }
    }
    case 'REMOVE_FROM_CART': {
      const filtered = state.filter((prod) => {
        return prod.key !== action.payload
      })
      return filtered
    }
    default: {
      return state
    }
  }
}

export const toggleCart = (state = initState.toggleCart, action) => {
  switch (action.type) {
    case 'TOGGLE_CART': {
      return !state
    }
    default: {
      return state
    }
  }
}

export const handleCheckout = (state = initState.handleCheckout, action) => {
  switch (action.type) {
    case 'HANDLE_CHECKOUT': {
      return action.payload
    }
    default: {
      return state
    }
  }
}
