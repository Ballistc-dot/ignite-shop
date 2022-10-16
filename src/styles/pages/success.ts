import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '0 auto',
  height: '100vh',
  marginTop: 64,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  width: 140,
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  marginTop: 104,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: -50,
  boxShadow: '-3px 5px 24px 5px #000000',
  img: {
    objectFit: 'cover',
  },
})

export const ImagesContainer = styled('div', {
  display: 'flex',
  marginBottom: 48,
  justifyContent: 'center',
  alignItems: 'center',
})
