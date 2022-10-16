import * as Dialog from '@radix-ui/react-dialog'
import { CartContainer } from '../styles/components/cart'

export function Cart() {
  return (
    <Dialog.Content>
      <Dialog.Title>Carrinho</Dialog.Title>
      <Dialog.Description>Seu carrinho</Dialog.Description>
      <CartContainer></CartContainer>
      <Dialog.Close />
    </Dialog.Content>
  )
}
