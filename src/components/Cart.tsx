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
import { Dispatch, SetStateAction } from 'react'

interface ICart {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function Cart({ setOpen, isOpen }: ICart) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <CartContainer>
          <Close>
            <X color="#fff" size={24} />
          </Close>
          <CartTitle>Sacola de compras</CartTitle>
          <CartItemsContainer>
            <CartItemsContent>
              <CartItems />
              <CartItems />
              <CartItems />
            </CartItemsContent>
            <CartFooter>
              <CartFooterContent>
                <div>
                  <span style={{ color: '#E1E1E6', fontSize: 16 }}>
                    Quantidade
                  </span>
                  <span style={{ color: '#C4C4CC', fontSize: 18 }}>
                    1 itens
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
                    R$ 240,90
                  </span>
                </div>
              </CartFooterContent>
              <button>Finalizar compra</button>
            </CartFooter>
          </CartItemsContainer>
        </CartContainer>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
