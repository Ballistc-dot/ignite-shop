import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

interface ProductProps {
  product: {
    sku: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
    currency: string
  }
}

export default function Product({ product }: ProductProps) {
  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
  // useState(false)

  const { addItem, cartDetails } = useShoppingCart()

  const cart = Object.values(cartDetails)
  const alreadyAddToCart = cart.filter((prod) => prod.id === product.sku)

  async function handleAddProductToCart() {
    if (alreadyAddToCart.length > 0) {
      alert('você só pode adicionar um produto desse no carrinho!')
    } else {
      addItem(product)
    }
  }
  const formattedPrice = formatCurrencyString({
    currency: 'brl',
    value: product.price,
  })

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formattedPrice}</span>

          <p>{product.description}</p>

          <button onClick={handleAddProductToCart}>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_MLH5Wy0Y97hDAC' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        sku: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
        currency: price.currency,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
