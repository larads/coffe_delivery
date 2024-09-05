'use client'
import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

export function ShoppingCartButton() {
  const [cartLength, setCartLength] = useState<number>(1)

  return (
    <button className="p-2 bg-yellow-100 relative">
      <ShoppingCart className="w-5 h-5 fill-yellow-900 text-yellow-900" />
      {cartLength > 0 ? (
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white bg-yellow-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold leading-tight	">
          {cartLength}
        </span>
      ) : null}
    </button>
  )
}
