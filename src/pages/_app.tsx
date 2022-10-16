import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'
import { CartProvider } from 'use-shopping-cart'

import { Cart } from '../components/Cart'
import { useState } from 'react'

import { useRouter } from 'next/router'
import { Header } from '../components/Header'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)

  function handleOpenCart() {
    setOpen(true)
  }
  const router = useRouter()

  const isSuccessPage = router.pathname === '/success'

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl={`${process.env.NEXT_URL}/success`}
      cancelUrl={process.env.NEXT_URL}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
    >
      <Container>
        {!isSuccessPage && <Header onOpenCart={handleOpenCart} />}
        <Cart isOpen={open} setOpen={setOpen} />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}

export default App
