const initState = {
  toggleMenu: false,
  handleCart: [],
  toggleCart: false,
  handleCheckout: '',
  checkoutId: '',
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
      const found = state.filter((product) => {
        return product.shopifyId === action.payload.shopifyId
      })
      if (found.length > 0) {
        found.forEach((product) => {
          product.quantity += 1
        })
        return state
      }
      return [...state, action.payload]
    }
    case 'REMOVE_FROM_CART': {
      const filtered = state.filter((prod) => {
        return prod.shopifyId !== action.payload
      })
      return filtered
    }
    case 'GET_DATA': {
      const data = localStorage.getItem('cart')
      return (state = data)
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
export const handleCheckoutId = (state = initState.checkoutId, action) => {
  switch (action.type) {
    case 'SET_ID': {
      return (state = action.payload)
    }
    default: {
      return state
    }
  }
}
