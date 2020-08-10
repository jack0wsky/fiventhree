import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/addToCart'
import { toggleCart } from '../../actions/toggleCart'
import { setLineItems } from '../../actions/setLineItems'
import Shipping from './shipping/shipping'
import Client from 'shopify-buy'
import {
  ContentWrapper,
  CartHeader,
  Head,
  Type,
  Name,
  Price,
  Sizes,
  Error,
  Description,
  Title,
  Text,
  AddToCart,
  DecrementQuantity,
  Add,
  IncrementQuantity,
  MobileAddToCart,
  Button,
  Icon,
  Line,
  MobileIncrement,
  MobileDecrement,
  DescriptionHead,
  ToggleBtn,
} from './content.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Size from './size/size'
import { setCheckoutId } from '../../actions/setCheckoutId'
import CartStatus from '../../components/header/cartStatus/cartStatus'
import SizesTable from './sizesTable/sizesTable'
import AddToCartIcon from './addToCartIcon'
import { colors } from '../../theme'

const mapStateToProps = (state) => ({
  cart: state.handleCart,
  checkoutId: state.id,
})

class Content extends Component {
  constructor() {
    super()
    this.state = {
      selected: false,
      quantity: 1,
      error: '',
      checkoutId: '',
      switchTabs: false,
      checkIfAvailable: true,
      adding: false,
    }
    this.sizes = createRef()
  }
  componentDidMount() {
    const { dispatch, product } = this.props
    this.client = Client.buildClient({
      storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
      domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
    })
    this.client.checkout.create().then((checkout) => {
      dispatch(setCheckoutId(checkout.attrs.id.value))
    })
    this.fetchSizes(product)
  }
  fetchSizes = async (item) => {
    const cachedSizes = localStorage.getItem('product')
    if (cachedSizes) {
      const parsed = JSON.parse(cachedSizes)
      if (parsed.id !== item.shopifyId) {
        localStorage.removeItem('product')
        await this.client.product
          .fetch(item.shopifyId)
          .then((fetchedProduct) => {
            localStorage.setItem('product', JSON.stringify(fetchedProduct))
          })
      }
    } else {
      await this.client.product.fetch(item.shopifyId).then((fetchedProduct) => {
        this.setState({ sizes: fetchedProduct }, () => {
          localStorage.setItem('product', JSON.stringify(this.state.sizes))
        })
      })
    }
  }

  handleAddToCart = async (product, variant) => {
    const cacheExist = localStorage.getItem('cart')
    const { dispatch, cart } = this.props
    dispatch(
      addToCart(
        product,
        variant.price,
        variant.title,
        variant.shopifyId,
        this.state.quantity
      )
    )
    dispatch(setLineItems(variant.shopifyId, this.state.quantity))
    const exitingCart = localStorage.getItem('cart')
    if (exitingCart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  componentDidUpdate() {
    const { cart } = this.props
    const exitingCart = localStorage.getItem('cart')
    if (exitingCart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }

  render() {
    const { dispatch, product, setImage, variant } = this.props
    const cachedProduct = JSON.parse(localStorage.getItem('product'))
    return (
      <ContentWrapper>
        <CartHeader>
          <AniLink cover to="/">
            Powrót
          </AniLink>
          <CartStatus />
        </CartHeader>
        <MobileAddToCart>
          <Button onClick={() => this.handleAddToCart(product, variant)}>
            <Icon>
              <Line />
              <Line />
            </Icon>
          </Button>
        </MobileAddToCart>
        <Head>
          <Type>{product.productType}</Type>
          <Name>{product.title}</Name>
        </Head>
        <Price>{variant.price} PLN</Price>
        <Sizes id="sizes">
          {cachedProduct
            ? cachedProduct.variants.map((option) => {
                return (
                  <Size
                    available={option.available}
                    title={option.title}
                    sku={option.sku}
                    key={option.sku}
                  />
                )
              })
            : null}
        </Sizes>
        {this.state.checkIfAvailable ? null : (
          <Error>Size isn't available</Error>
        )}
        <Description>
          <DescriptionHead switch={this.state.switchTabs}>
            <Title onClick={() => this.setState({ switchTabs: false })}>
              Opis
            </Title>
            <Title onClick={() => this.setState({ switchTabs: true })}>
              Tabela rozmiarów
            </Title>
          </DescriptionHead>
          {this.state.switchTabs ? (
            <SizesTable />
          ) : (
            <Text>{product.description}</Text>
          )}
        </Description>
        <Shipping />
        <AddToCart>
          <DecrementQuantity
            onClick={() =>
              this.setState((prevState) => ({
                quantity: Math.max(prevState.quantity - 1, 1),
              }))
            }
          >
            -
          </DecrementQuantity>
          <Add onClick={() => this.handleAddToCart(product, variant)}>
            {this.state.adding
              ? 'loading...'
              : `Dodaj ${this.state.quantity} do koszyka`}
          </Add>
          <IncrementQuantity
            onClick={() =>
              this.setState((prevState) => ({
                quantity: Math.max(prevState.quantity + 1, 1),
              }))
            }
          >
            +
          </IncrementQuantity>
        </AddToCart>
      </ContentWrapper>
    )
  }
}

export default connect(mapStateToProps)(Content)

/*
<MobileDecrement
            onClick={() =>
              this.setState((prevState) => ({
                quantity: Math.max(prevState.quantity - 1, 1),
              }))
            }
          >

<MobileIncrement
            onClick={() =>
              this.setState((prevState) => ({
                quantity: Math.max(prevState.quantity + 1, 1),
              }))
            }
          >
 */
