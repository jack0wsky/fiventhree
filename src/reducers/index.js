const initState = {
  toggleMenu: false,
  handleCart: [],
  toggleCart: false,
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
      return [...state, action.payload]
    }
    case 'REMOVE_FROM_CART': {
      const removed = state.filter((prod) => {
        return prod.key !== action.payload
      })
      return removed
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
