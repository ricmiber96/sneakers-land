import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducer/CartReducer'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const initialState = { items: [] }
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
