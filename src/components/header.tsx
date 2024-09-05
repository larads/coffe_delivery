import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { ShoppingCartButton } from './shopping-cart-button'

export function Header() {
  return (
    <header className="flex items-center justify-between my-8">
      <Image src={'/Logo.png'} alt="" width={85} height={40} quality={100} />

      <div className="flex items-center gap-3">
        <div className="flex items-center p-2 justify-center gap-1 bg-purple-100 rounded-md">
          <MapPin className="w-5 h-5 text-purple-500" strokeWidth={2} />
          <span className="text-purple-900 text-sm leading-tight">
            Porto Alegre, RS
          </span>
        </div>
        <ShoppingCartButton />
      </div>
    </header>
  )
}
