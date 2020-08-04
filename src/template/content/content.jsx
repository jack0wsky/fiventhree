import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/addToCart'
import { toggleCart } from '../../actions/toggleCart'
import { setLineItems } from '../../actions/setLineItems'
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
  MobileGallery,
  MobileAddToCart,
  Button,
  MobileIncrement,
  MobileDecrement,
  DescriptionHead,
  ToggleBtn,
  Icon,
  Line,
} from './content.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Size from './size/size'
import { Preview, PreviewContainer } from '../productTemplate.styled'
import { setCheckoutId } from '../../actions/setCheckoutId'
import CartStatus from '../../components/header/cartStatus/cartStatus'
import SizesTable from './sizesTable/sizesTable'

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
    }
    this.sizes = createRef()
  }
  componentDidMount() {
    const { dispatch } = this.props
    this.client = Client.buildClient({
      storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
      domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
    })
    this.client.checkout.create().then((checkout) => {
      dispatch(setCheckoutId(checkout.attrs.id.value))
    })
  }

  handleAddToCart = async (product, variant) => {
    const { dispatch } = this.props
    await this.client.product
      .fetch(product.shopifyId)
      .then((fetchedProduct) => {
        const fetchedVariant = fetchedProduct.variants.find((option) => {
          return option.id === variant.shopifyId
        })
        console.log(fetchedVariant.available)
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
    dispatch(setLineItems(variant.shopifyId, this.state.quantity))
  }

  render() {
    const { dispatch, product, setImage, variant } = this.props
    return (
      <ContentWrapper>
        <CartHeader>
          <CartStatus />
        </CartHeader>
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
                onClick={(e) =>
                  setImage(img.localFile.childImageSharp.fluid.src, e)
                }
              >
                <Preview src={img.localFile.childImageSharp.fluid.src} />
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
