import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/addToCart'
import { removeFromCart } from '../../actions/removeFromCart'
import { toggleCart } from '../../actions/toggleCart'
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
} from './content.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Size from './size/size'
import { Preview, PreviewContainer } from '../productTemplate.styled'

const mapStateToProps = (state) => ({ cart: state.handleCart })

class Content extends Component {
  constructor() {
    super()
    this.state = {
      selected: false,
      quantity: 1,
      error: '',
    }
    this.sizes = createRef()
  }
  handleAddToCart = (product, variant) => {
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
  }
  decrementQuantity = (variant) => {
    const { dispatch } = this.props
    if (this.state.quantity === 1) {
      dispatch(removeFromCart(variant.shopifyId))
    } else {
      this.setState((prevState) => ({
        quantity: Math.max(prevState.quantity - 1, 1),
      }))
    }
  }

  render() {
    const { dispatch, product, setImage, variant } = this.props
    return (
      <ContentWrapper>
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
          <DecrementQuantity onClick={() => this.decrementQuantity(variant)}>
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
