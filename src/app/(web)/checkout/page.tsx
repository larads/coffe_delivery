'use client'

import { RadioInput } from '@/components/form/radio-input'
import { TextInput } from '@/components/form/text-input'
import {
  MapPin,
  DollarSign,
  CreditCardIcon,
  Landmark,
  Banknote,
} from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function Checkout() {
  const { register, handleSubmit, watch } = useForm({})

  const selectedPaymentMethod = watch('paymentMethod')

  function handleOrderCheckout(data: unknown) {
    console.log(data)
  }

  return (
    <main className="mt-10">
      <div className="grid grid-cols-checkoutPage gap-8">
        <section className="space-y-4">
          <h2 className="font-title text-lg leading-tight font-bold text-base-subtitle">
            Complete seu pedido
          </h2>
          <div className="flex flex-col gap-3">
            <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
              <div className="bg-base-card p-10 flex flex-col rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-7 h-7 text-yellow-500" />

                  <div className="flex flex-col">
                    <p className="text-base-subtitle leading-tight">
                      Endereço de Entrega
                    </p>
                    <p className="text-base-text text-sm leading-tight">
                      Informe o endereço onde deseja receber seu pedido
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  <TextInput placeholder="CEP" {...register('cep')} />
                  <TextInput placeholder="Rua" {...register('street')} />

                  <div className="grid grid-cols-2 gap-4">
                    <TextInput
                      placeholder="Número"
                      type="number"
                      {...register('number')}
                    />
                    <TextInput
                      placeholder="Complemento"
                      {...register('fullAddress')}
                    />
                  </div>

                  <div className="grid grid-cols-inputs gap-4">
                    <TextInput
                      placeholder="Bairro"
                      {...register('neighborhood')}
                    />
                    <TextInput placeholder="Cidade" {...register('city')} />
                    <TextInput placeholder="UF" {...register('state')} />
                  </div>
                </div>
              </div>

              <div className="bg-base-card p-10 rounded-md shadow-sm mt-8">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-7 h-7 text-purple-500" />

                    <div className="flex flex-col">
                      <p className="text-base-subtitle leading-tight">
                        Pagamento
                      </p>
                      <p className="text-base-text text-sm leading-tight">
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <RadioInput
                      isSelected={selectedPaymentMethod === 'credit'}
                      {...register('paymentMethod')}
                      value={'credit'}
                    >
                      <CreditCardIcon className="w-6 h-6 text-purple-500" />
                      <span>Cartão de crédito</span>
                    </RadioInput>

                    <RadioInput
                      isSelected={selectedPaymentMethod === 'debit'}
                      {...register('paymentMethod')}
                      value={'debit'}
                    >
                      <Landmark className="w-6 h-6 text-purple-500" />
                      <span>Cartão de débito</span>
                    </RadioInput>

                    <RadioInput
                      isSelected={selectedPaymentMethod === 'cash'}
                      {...register('paymentMethod')}
                      value={'cash'}
                    >
                      <Banknote className="w-6 h-6 text-purple-500" />
                      <span>Dinheiro</span>
                    </RadioInput>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-title text-lg leading-tight font-bold text-base-subtitle">
            Cafés selecionados
          </h2>
          <div className="bg-base-card p-10">
            <button
              type="submit"
              form="order"
              className="bg-yellow-500 text-white px-5 py-3 rounded-md w-full uppercase text-sm font-bold leading-relaxed"
            >
              Confirmar pedido
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
