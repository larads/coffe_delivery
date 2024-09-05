import { Minus, Plus } from 'lucide-react'

interface QuantityInputProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  decrementQuantity,
  incrementQuantity,
}: QuantityInputProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-base-button rounded-md">
      <button onClick={decrementQuantity}>
        <Minus className="w-4 h-4 text-purple-900 hover:text-purple-500" />
      </button>

      {quantity}

      <button onClick={incrementQuantity}>
        <Plus className="w-4 h-4 text-purple-900 hover:text-purple-500" />
      </button>
    </div>
  )
}
