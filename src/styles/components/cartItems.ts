import { styled } from '..'

export const CartItemsContainer = styled('div', {
  display: 'flex',
  gap: 20,
})

export const CartItemsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    cursor: 'pointer',
    '&:hover': {
      color: '$green300',
    },
  },
  h3: {
    fontWeight: 'normal',
    color: '$gray300',
  },
  strong: {
    fontSize: 18,
    color: '$gray100',
  },
})

export const ImageCard = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: 102,
  height: 93,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
