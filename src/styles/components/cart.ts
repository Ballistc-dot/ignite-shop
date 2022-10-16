import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const CartContainer = styled(Dialog.Content, {
  backgroundColor: 'white',
  position: 'fixed',
  top: 0,
  right: 0,
  width: '40vw',
  height: '100vh',
  padding: 25,
})
