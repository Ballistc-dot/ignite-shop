import { AppProps } from 'next/app'
import * as Dialog from '@radix-ui/react-dialog'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { CartButton, CartCount, Container, Header } from '../styles/pages/app'

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
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <CartButton onClick={handleOpenCart}>
          <Handbag size={24} color="#C4C4CC" weight="bold" />
          <CartCount>1</CartCount>
        </CartButton>
      </Header>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger />
        <Dialog.Portal>
          <Cart />
        </Dialog.Portal>
      </Dialog.Root>
      <Component {...pageProps} />
    </Container>
  )
}

export default App
