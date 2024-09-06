'use client'
import { createContext, ReactNode, useState } from 'react'

interface CardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

interface CartItem extends CardProps {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    } else {
      return []
    }
  })

  const cartQuantity = cartItems.length

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
