'use client'
import {
  Trash,
  MapPin,
  Banknote,
  Landmark,
  DollarSign,
  CreditCardIcon,
} from 'lucide-react'
import * as zod from 'zod'
import Image from 'next/image'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Divider } from '@/components/divider'
import { TextInput } from '@/components/form/text-input'
import { RadioInput } from '@/components/form/radio-input'
import { QuantityInput } from '@/components/form/quantity-input'

const orderFormValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string().min(1, 'Informe o seu endereço'),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export default function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  function handleOrderCheckout(data: OrderFormData) {
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
                  <TextInput
                    maxLength={8}
                    placeholder="CEP"
                    error={errors.cep}
                    {...register('cep', { valueAsNumber: true })}
                  />
                  <TextInput
                    placeholder="Rua"
                    error={errors.street}
                    {...register('street')}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <TextInput
                      placeholder="Número"
                      error={errors.number}
                      {...register('number')}
                    />
                    <TextInput
                      placeholder="Complemento"
                      error={errors.fullAddress}
                      {...register('fullAddress')}
                    />
                  </div>

                  <div className="grid grid-cols-inputs gap-4">
                    <TextInput
                      placeholder="Bairro"
                      error={errors.neighborhood}
                      {...register('neighborhood')}
                    />
                    <TextInput
                      placeholder="Cidade"
                      error={errors.city}
                      {...register('city')}
                    />
                    <TextInput
                      maxLength={2}
                      placeholder="UF"
                      error={errors.state}
                      {...register('state')}
                    />
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
            <Fragment>
              <div className="flex items-start justify-between px-1 py-2">
                <div className="flex items-start gap-5">
                  <Image
                    src={'/coffees/americano.png'}
                    alt=""
                    width={64}
                    height={64}
                    quality={100}
                  />

                  <div className="flex flex-col items-start gap-2">
                    <h2 className="leading-tight text-base-subtitle">
                      Expresso Americano
                    </h2>

                    <div className="flex items-center gap-2">
                      <QuantityInput
                        decrementQuantity={() => {}}
                        incrementQuantity={() => {}}
                        quantity={1}
                      />

                      <button className="bg-base-button rounded-md flex items-center gap-2 p-2 hover:bg-base-hover">
                        <Trash className="w-4 h-4 text-purple-500" />
                        <span className="text-sm leading-relaxed text-base-text uppercase">
                          REMOVER
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <span className="font-bold leading-tight text-base-text">
                  R$ 9,90
                </span>
              </div>

              <Divider />
            </Fragment>

            <Fragment>
              <div className="flex items-start justify-between px-1 py-2">
                <div className="flex items-start gap-5">
                  <Image
                    src={'/coffees/americano.png'}
                    alt=""
                    width={64}
                    height={64}
                    quality={100}
                  />

                  <div className="flex flex-col items-start gap-2">
                    <h2 className="leading-tight text-base-subtitle">
                      Expresso Americano
                    </h2>

                    <div className="flex items-center gap-2">
                      <QuantityInput
                        decrementQuantity={() => {}}
                        incrementQuantity={() => {}}
                        quantity={1}
                      />

                      <button className="bg-base-button rounded-md flex items-center gap-2 p-2 hover:bg-base-hover">
                        <Trash className="w-4 h-4 text-purple-500" />
                        <span className="text-sm leading-relaxed text-base-text uppercase">
                          REMOVER
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <span className="font-bold leading-tight text-base-text">
                  R$ 9,90
                </span>
              </div>

              <Divider />
            </Fragment>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-base-text leading-tight">
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </div>

              <div className="flex items-center justify-between text-base-text leading-tight">
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>

              <div className="flex items-center justify-between text-base-subtitle text-xl font-bold leading-tight">
                <p>Total</p>
                <span>R$ 33,20</span>
              </div>
            </div>
            <button
              type="submit"
              form="order"
              disabled={!selectedPaymentMethod}
              className="bg-yellow-500 text-white px-5 py-3 rounded-md w-full uppercase text-sm font-bold leading-relaxed disabled:opacity-30 disabled:cursor-not-allowed hover:bg-yellow-900 transition-colors duration-200 m-6"
            >
              Confirmar pedido
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
