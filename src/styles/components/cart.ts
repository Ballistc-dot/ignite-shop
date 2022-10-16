import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const CartContainer = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,
  width: 480,
  height: '100vh',
  padding: '72px 48px',
})

export const CartTitle = styled(Dialog.Title, {
  fontSize: 20,
  fontWeight: 'bold',
  color: '$gray100',
})

export const Close = styled(Dialog.Close, {
  backgroundColor: 'transparent',
  border: 'none',
  right: 24,
  top: 24,
  position: 'fixed',
  cursor: 'pointer',
})

export const CartItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: 32,
  height: '100%',
  flex: 1,
})

export const CartItemsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const CartFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  button: {
    height: 69,
    backgroundColor: '$green500',
    border: 'none',
    borderRadius: 8,
    marginTop: 57,
    color: '$white',
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
export const CartFooterContent = styled('div', {
  display: 'flex',
  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  gap: 7,
  flexDirection: 'column',
})
