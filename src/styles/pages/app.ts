import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  backgroundColor: '$gray800',
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
})

export const CartCount = styled('div', {
  width: 24,
  height: 24,
  position: 'absolute',
  backgroundColor: '$green300',
  marginBottom: 38,
  marginLeft: 38,
  borderRadius: '50%',
  border: '#121214 solid 3px ',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
})
