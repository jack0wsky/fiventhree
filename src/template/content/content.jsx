import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/addToCart'
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
      size: '',
      selected: false,
      quantity: 1,
      error: '',
    }
    this.sizes = createRef()
  }
  selectSize = (size) => {
    this.setState({ size })
  }
  handleAddToCart = (product) => {
    const { dispatch, cart } = this.props
    console.log(cart)
    const found = cart.find((_product) => {
      return _product.key === _product.shopifyId
    })
    console.log(found)
    if (this.state.size === '') {
      this.setState({ error: 'You must choose size' })
    } else {
      this.setState({ error: '' })
      if (found !== undefined) {
        dispatch(
          addToCart(
            product.shopifyId,
            product.images[0].originalSrc,
            product.title,
            product.variants[0].price,
            this.state.size,
            this.state.quantity + 1
          )
        )
      } else {
        dispatch(
          addToCart(
            product.shopifyId,
            product.images[0].originalSrc,
            product.title,
            product.variants[0].price,
            this.state.size,
            this.state.quantity
          )
        )
      }
    }
  }

  render() {
    const { dispatch, product, setImage } = this.props
    return (
      <ContentWrapper>
        <AniLink cover to="/">
          Powrót
        </AniLink>
        <MobileGallery>
          {product.images.map((img) => {
            return (
              <PreviewContainer onClick={() => setImage(img.originalSrc)}>
                <Preview src={img.originalSrc} />
              </PreviewContainer>
            )
          })}
        </MobileGallery>
        <Head>
          <Type>{product.productType}</Type>
          <Name>{product.title}</Name>
        </Head>
        <Price>{product.variants[0].price} PLN</Price>
        <Sizes id="sizes" ref={this.sizes}>
          {product.options.map((option) => {
            return option.values.map((size) => {
              return (
                <Size selectSize={this.selectSize} size={size} key={size} />
              )
            })
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
          <Add onClick={() => this.handleAddToCart(product)}>
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
