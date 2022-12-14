import { GetServerSideProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  SuccessContainer,
  ImagesContainer,
} from '../styles/pages/success'

import logo from '../assets/logo.svg'

interface SuccessProps {
  costumerName: string
  products: [
    {
      images: [string]
    },
  ]
}

export default function Success({ costumerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <Image src={logo} alt="" />
        <ImagesContainer>
          {products.map((prod) => (
            <ImageContainer key={prod.images[0]}>
              <Image src={prod.images[0]} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>
        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de{' '}
          <strong>{products.length}</strong> camisetas já está a caminho da sua
          casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details.name
  const products = session.line_items.data.map(
    (product) => product.price.product,
  )

  return {
    props: {
      costumerName,
      products,
    },
  }
}
