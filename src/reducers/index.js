const initState = {
  toggleMenu: false,
  handleCart: [],
  toggleCart: false,
  handleCheckout: '',
  checkoutId: '',
  modal: '',
  cartCache: [],
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
        return product.shopifyId === action.payload.shopifyId
      })
      if (found) {
        found.quantity += action.payload.quantity
        return state
      }
      return [...state, action.payload]
    }
    case 'REMOVE_FROM_CART': {
      const cachedCart = JSON.parse(localStorage.getItem('cart'))
      if (cachedCart) {
        const filteredCache = cachedCart.filter((item) => {
          return item.shopifyId !== action.payload
        })
        initState.cartCache = filteredCache
        return state
      }
      return state.filter((item) => {
        return item.shopifyId !== action.payload
      })
    }
    case 'DECREMENT_QUANTITY': {
      const toDecrement = state.find((item) => {
        return item.shopifyId === action.payload
      })
      toDecrement.quantity -= 1
      return state
    }
    case 'INCREMENT_QUANTITY': {
      const toIncrement = state.find((item) => {
        return item.shopifyId === action.payload
      })
      toIncrement.quantity += 1
      return state
    }
    case 'GET_DATA': {
      return (state = action.payload)
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

export const handleModal = (state = initState.modal, action) => {
  switch (action.type) {
    case 'HANDLE_MODAL': {
      return (state = action.payload)
    }
    default: {
      return state
    }
  }
}
