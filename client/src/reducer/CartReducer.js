export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || {
  items: [],
  totalPay: 0
}

const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type, payload } = action
  const products = state.items

  const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
  }

  switch (type) {
  case CART_ACTION_TYPES.ADD_TO_CART:{
    const isProductInCart = products.some(item => item.id === payload.id)
    if (isProductInCart) {
      // Update quantity of product in cart
      const productIndexInCart = products.findIndex(item => item.id === payload.id)
      const newState = structuredClone(state)
      newState.items[productIndexInCart].quantity += 1
      newState.totalPay = newState.totalPay + newState.items[productIndexInCart].discountPrice
      updateLocalStorage(newState)
      return newState
    } else {
      // Add new product to cart
      const newItem = { ...payload, quantity: 1 }
      const newState = {
        ...state,
        items: [...state.items, newItem],
        totalPay: state.totalPay + payload.discountPrice
      }
      updateLocalStorage(newState)
      return newState
    }
  }
  case CART_ACTION_TYPES.REMOVE_FROM_CART:{
    console.log(payload)
    const newState = structuredClone(state)
    const productIndexInCart = products.findIndex(item => item.id === payload)
    newState.totalPay = newState.totalPay - newState.items[productIndexInCart].discountPrice * newState.items[productIndexInCart].quantity
    newState.items = newState.items.filter(item => item.id !== payload)

    updateLocalStorage(newState)
    return newState
  }
  case CART_ACTION_TYPES.CLEAR_CART:
    return {
      ...state,
      items: []
    }
  default:
    return state
  }
}

export default cartReducer
