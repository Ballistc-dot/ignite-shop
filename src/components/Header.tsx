import logoImg from '../assets/logo.svg'
import { Handbag } from 'phosphor-react'
import {
  HeaderContainer,
  CartButton,
  CartCount,
} from '../styles/components/header'
import Image from 'next/future/image'
import { useShoppingCart } from 'use-shopping-cart'

interface IHeader {
  onOpenCart(): void
}

export function Header({ onOpenCart }: IHeader) {
  const { cartCount } = useShoppingCart()

  const isCartEmpty = cartCount < 1

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <CartButton onClick={onOpenCart}>
        <Handbag
          size={24}
          color={isCartEmpty ? '#C4C4CC' : '#8D8D99'}
          weight="bold"
        />
        {!isCartEmpty && <CartCount>{cartCount}</CartCount>}
      </CartButton>
    </HeaderContainer>
  )
}
