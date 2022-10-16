import Image from 'next/future/image'
import {
  CartItemsContainer,
  CartItemsContent,
  ImageCard,
} from '../styles/components/cartItems'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

interface ICart {
  id: string
  name: string
  price: number
  imageUrl: string
}

export function CartItems({ id, name, price, imageUrl }: ICart) {
  const formattedPrice = formatCurrencyString({ currency: 'brl', value: price })
  const { removeItem } = useShoppingCart()

  function handleRemoveFromCart() {
    removeItem(id)
  }
  return (
    <CartItemsContainer>
      <ImageCard>
        <Image src={imageUrl} width={95} height={95} alt="" />
      </ImageCard>
      <CartItemsContent>
        <h3>{name}</h3>
        <strong>{formattedPrice}</strong>

        <button onClick={handleRemoveFromCart}>Remover</button>
      </CartItemsContent>
    </CartItemsContainer>
  )
}
