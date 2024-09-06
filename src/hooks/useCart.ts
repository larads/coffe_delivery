import { useContext } from 'react'
import { CartContext } from '@/context/CartProvider'

export function useCart() {
  const context = useContext(CartContext)
  return context
}
