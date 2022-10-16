import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { CartButton, CartCount, Container, Header } from '../styles/pages/app'
import { CartProvider } from 'use-shopping-cart'

import Image from 'next/future/image'
import { Cart } from '../components/Cart'
import { useState } from 'react'
import { Handbag } from 'phosphor-react'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)

  function handleOpenCart() {
    setOpen(true)
  }
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl={`${process.env.BASE_URL}/success`}
      cancelUrl={process.env.BASE_URL}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <CartButton onClick={handleOpenCart}>
            <Handbag size={24} color="#C4C4CC" weight="bold" />
            <CartCount>1</CartCount>
          </CartButton>
        </Header>
        <Cart isOpen={open} setOpen={setOpen} />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}

export default App
