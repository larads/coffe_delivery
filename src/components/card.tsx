'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { QuantityInput } from './form/quantity-input'

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

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    if (quantity === 1) {
      return
    }
    setQuantity((state) => state - 1)
  }

  return (
    <div className="bg-base-card rounded-tr-lg rounded-bl-4xl px-5 pb-5 min-w-[256px] min-h-[310px] flex flex-col text-center shadow-md">
      <Image
        src={coffee.image}
        alt=""
        width={120}
        height={120}
        className="-mt-5 self-center"
        quality={100}
      />
      <div className="mt-3 flex items-center gap-1 justify-center">
        {coffee.tags.map((coffeeTag) => {
          return (
            <span
              key={coffeeTag}
              className="bg-yellow-100 text-yellow-900 rounded-full uppercase text-xxs px-2 py-1 font-bold"
            >
              {coffeeTag}
            </span>
          )
        })}
      </div>
      <h2 className="mt-4 font-title text-xl leading-tight text-base-subtitle">
        {coffee.title}
      </h2>
      <p className="mt-2 text-base-label text-sm leading-tight">
        {coffee.description}
      </p>
      <div className="flex items-center justify-between mt-8">
        <div className="text-sm text-base-text leading-tight">
          R$ {''}
          <span className="font-title text-2xl font-bold">
            {coffee.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2 ">
          <QuantityInput
            quantity={quantity}
            incrementQuantity={handleIncrement}
            decrementQuantity={handleDecrement}
          />

          <button className="bg-purple-900 p-2 flex items-center justify-center rounded-md">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
