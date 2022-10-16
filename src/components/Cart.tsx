import { X } from 'phosphor-react'
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

export function Cart() {
  return (
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
              <span style={{ color: '#E1E1E6', fontSize: 16 }}>Quantidade</span>
              <span style={{ color: '#C4C4CC', fontSize: 18 }}>1 itens</span>
            </div>
            <div>
              <span
                style={{ color: '#E1E1E6', fontSize: 18, fontWeight: 'bold' }}
              >
                Valor total
              </span>
              <span
                style={{ color: '#E1E1E6', fontSize: 24, fontWeight: 'bold' }}
              >
                R$ 240,90
              </span>
            </div>
          </CartFooterContent>
          <button>Finalizar compra</button>
        </CartFooter>
      </CartItemsContainer>
    </CartContainer>
  )
}
