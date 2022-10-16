import Image from 'next/future/image'
import {
  CartItemsContainer,
  CartItemsContent,
  ImageCard,
} from '../styles/components/cartItems'
import camiseta from '../assets/camiseta.png'

export function CartItems() {
  return (
    <CartItemsContainer>
      <ImageCard>
        <Image src={camiseta} width={95} height={95} alt="" />
      </ImageCard>
      <CartItemsContent>
        <h3>Camiseta Beyound the Limits</h3>
        <strong>R$ 79,90</strong>

        <button>Remover</button>
      </CartItemsContent>
    </CartItemsContainer>
  )
}
