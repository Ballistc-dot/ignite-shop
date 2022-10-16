import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  CartContainer,
  CartItemsContainer,
  CartItemsContent,
  CartTitle,
  Close,
  CartFooter,
  CartFooterContent,
} from '../styles/components/cart'
import { CartItems } from './CartItems'
import { Dispatch, SetStateAction, useState } from 'react'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import axios from 'axios'

interface ICart {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function Cart({ setOpen, isOpen }: ICart) {
  const { cartDetails, cartCount, totalPrice } = useShoppingCart()
  const [IsCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const cart = Object.values(cartDetails)
  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)
      const products = cart.map((prod) => {
        return {
          price: prod.defaultPriceId,
          quantity: prod.quantity,
        }
      })

      const response = await axios.post('/api/checkout', {
        products,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }
  const formattedTotal = formatCurrencyString({
    currency: 'brl',
    value: totalPrice,
  })
  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Portal>
        <CartContainer>
          <Close>
            <X color="#fff" size={24} />
          </Close>
          <CartTitle>Sacola de compras</CartTitle>
          <CartItemsContainer>
            <CartItemsContent>
              {cart.map((prod) => (
                <CartItems
                  key={prod.defaultPriceId}
                  id={prod.id}
                  name={prod.name}
                  imageUrl={prod.imageUrl}
                  price={prod.price}
                />
              ))}
            </CartItemsContent>
            <CartFooter>
              <CartFooterContent>
                <div>
                  <span style={{ color: '#E1E1E6', fontSize: 16 }}>
                    Quantidade
                  </span>
                  <span style={{ color: '#C4C4CC', fontSize: 18 }}>
                    {cartCount} itens
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      color: '#E1E1E6',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    Valor total
                  </span>
                  <span
                    style={{
                      color: '#E1E1E6',
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    {formattedTotal}
                  </span>
                </div>
              </CartFooterContent>
              <button
                disabled={IsCreatingCheckoutSession}
                onClick={handleBuyButton}
              >
                Finalizar compra
              </button>
            </CartFooter>
          </CartItemsContainer>
        </CartContainer>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
