'use client'
import { produce } from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface coffee {
  id: number
  title: string
  description: string
  tags: string[]
  price: number
  image: string
  quantity: number
}

export interface CartItem extends coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems))
      }
    }
  }, [])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
