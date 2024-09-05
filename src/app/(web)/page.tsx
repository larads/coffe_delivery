import Image from 'next/image'
import data from '@/utils/data.json'
import { Card } from '@/components/card'
import { ShoppingCart, Coffee, Timer, Package } from 'lucide-react'

const coffees = data.coffees

export default function Home() {
  return (
    <div className="pb-14">
      <div className="relative">
        <div className="flex items-start justify-between py-24  gap-10">
          <div className="flex flex-col">
            <div className="space-y-4">
              <h1 className="text-base-title font-title text-5xl font-bold leading-tight">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-base-subtitle text-xl leading-tight">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <div className="grid grid-cols-2 mt-16 gap-5">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-900 rounded-full p-2">
                  <ShoppingCart className="text-white fill-white" />
                </div>

                <span className="text-base-text leading-tight text-sm">
                  Compra simples e segura
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-base-text rounded-full p-2">
                  <Package className="text-white" />
                </div>

                <span className="text-base-text leading-tight text-sm">
                  Embalagem mantém o café intacto
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-full p-2">
                  <Timer className="text-white" />
                </div>

                <span className="text-base-text leading-tight text-sm">
                  Entrega rápida e rastreada
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-purple-500 rounded-full p-2">
                  <Coffee className="text-white" />
                </div>

                <span className="text-base-text leading-tight text-sm">
                  O café chega fresquinho até você
                </span>
              </div>
            </div>
          </div>

          <Image
            src="/hero.svg"
            alt="Café do Coffee Delivery"
            width={476}
            height={360}
          />
        </div>

        <Image
          src={'/hero-bg.svg'}
          alt=""
          height={544}
          width={800}
          className="absolute top-0 left-0 max-h-[544px] w-full object-cover blur-sm"
        />
      </div>

      <main className="flex flex-col gap-14 mt-8">
        <h2 className="font-title font-bold leading-tight text-base-subtitle text-4xl">
          Nossos Cafés
        </h2>

        <div className="grid grid-cols-4 gap-8">
          {coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </div>
      </main>
    </div>
  )
}
