import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/addToCart'
import {
  ContentWrapper,
  Reviews,
  Name,
  Price,
  Sizes,
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

class Content extends Component {
  constructor() {
    super()
    this.state = {
      size: '',
      selected: false,
      quantity: 1,
    }
    this.sizes = createRef()
  }
  selectSize = (size, e) => {
    this.setState({ size: size }, () => {
      this.setState({ selected: !this.state.selected })
    })
  }
  render() {
    const { dispatch, product, setImage } = this.props
    return (
      <ContentWrapper>
        <AniLink cover to="/">
          Powrót
        </AniLink>
        <Reviews id="shopify-product-reviews" data-id={product.id}>
          reviews
        </Reviews>
        <MobileGallery>
          {product.images.map((img) => {
            return (
              <PreviewContainer onClick={() => setImage(img.originalSrc)}>
                <Preview src={img.originalSrc} />
              </PreviewContainer>
            )
          })}
        </MobileGallery>
        <Name>{product.title}</Name>
        <Price>{product.variants[0].price} PLN</Price>
        <Sizes id="sizes" ref={this.sizes}>
          {product.options.map((option) => {
            return option.values.map((size) => {
              return <Size size={size} key={size} />
            })
          })}
        </Sizes>
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
          <Add
            onClick={() =>
              dispatch(
                addToCart(
                  product.shopifyId,
                  product.images[0].originalSrc,
                  product.title,
                  product.variants[0].price,
                  'M',
                  this.state.quantity
                )
              )
            }
          >
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

export default connect()(Content)
