import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function useCart () {
  const { cart, totalPay, addToCart, removeFromCart, clearCart } = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('useCart must be used with a Provider')
  }

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return { cart, totalPay, addToCart, removeFromCart, clearCart, checkProductInCart }
}
