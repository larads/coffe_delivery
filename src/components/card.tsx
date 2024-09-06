'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { QuantityInput } from './form/quantity-input'
import { useCart } from '@/hooks/useCart'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
  quantity: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function Card({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const { addCoffeeToCart } = useCart()

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    if (quantity === 1) {
      return
    }
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      id: Number(coffee.id), // Converter para número
      quantity,
    }

    toast.success('Item Adicionado', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

    addCoffeeToCart(coffeeToAdd)
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

          <button
            onClick={handleAddToCart}
            className="bg-purple-900 p-2 flex items-center justify-center rounded-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}
