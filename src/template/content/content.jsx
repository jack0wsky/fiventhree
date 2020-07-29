import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/addToCart'
import { removeFromCart } from '../../actions/removeFromCart'
import { toggleCart } from '../../actions/toggleCart'
import Client from 'shopify-buy'
import {
  ContentWrapper,
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
  MobileGallery,
  MobileAddToCart,
  Button,
  MobileIncrement,
  MobileDecrement,
} from './content.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Size from './size/size'
import { Preview, PreviewContainer } from '../productTemplate.styled'
import { setCheckoutId } from '../../actions/setCheckoutId'

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
    }
    this.sizes = createRef()
  }
  componentDidMount() {
    this.client = Client.buildClient({
      storefrontAccessToken: 'a4c2019ba733587b174a498f66dd2be9',
      domain: `fiventhree.myshopify.com`,
    })
  }

  handleAddToCart = (product, variant) => {
    const { dispatch } = this.props
    this.client.product.fetch(product.shopifyId).then((product) => {
      console.log(product)
    })
    this.client.checkout.create().then((checkout) => {
      dispatch(setCheckoutId(checkout.attrs.id.value))
    })
    dispatch(
      addToCart(
        product,
        variant.price,
        variant.title,
        variant.shopifyId,
        this.state.quantity
      )
    )
  }

  render() {
    const { dispatch, product, setImage, variant } = this.props
    return (
      <ContentWrapper>
        <MobileAddToCart>
          <MobileDecrement
            onClick={() =>
              this.setState((prevState) => ({
                quantity: Math.max(prevState.quantity - 1, 1),
              }))
            }
          >
            -
          </MobileDecrement>
          <Button onClick={() => this.handleAddToCart(product, variant)}>
            Kup
          </Button>
          <MobileIncrement
            onClick={() =>
              this.setState((prevState) => ({
                quantity: Math.max(prevState.quantity + 1, 1),
              }))
            }
          >
            +
          </MobileIncrement>
        </MobileAddToCart>
        <AniLink cover to="/">
          Powrót
        </AniLink>
        <MobileGallery>
          {product.images.map((img) => {
            return (
              <PreviewContainer
                key={img.id}
                onClick={() => setImage(img.originalSrc)}
              >
                <Preview src={img.originalSrc} />
              </PreviewContainer>
            )
          })}
        </MobileGallery>
        <Head>
          <Type>{product.productType}</Type>
          <Name>{product.title}</Name>
        </Head>
        <Price>{variant.price} PLN</Price>
        <Sizes id="sizes" ref={this.sizes}>
          {product.variants.map((variant) => {
            return (
              <Size title={variant.title} sku={variant.sku} key={variant.sku} />
            )
          })}
        </Sizes>
        <Error>{this.state.error}</Error>
        <Description>
          <Title>Opis</Title>
          <Text>{product.description}</Text>
        </Description>
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
            Dodaj {this.state.quantity} do koszyka
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
