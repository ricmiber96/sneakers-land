import React, { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducer/CartReducer'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart }
}

const CartContextProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{ cart: state.items, totalPay: state.totalPay, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
