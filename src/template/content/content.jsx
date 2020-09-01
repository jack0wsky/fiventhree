import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/addToCart'
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
  DescriptionHead,
  MobileButton,
  MobileQuantity,
  MobileDecrement,
  MobileValue,
  MobileIncrement,
  MobileSizes,
  BasicsWrapper,
  ReviewsButton,
  Icon,
} from './content.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Size from './size/size'
import { setCheckoutId } from '../../actions/setCheckoutId'
import SizesTable from './sizesTable/sizesTable'
import ProductReview from './review/review'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { colors } from '../../theme'
import addIcon from '../../assets/add-icon.svg'
import { handleReviewForm } from '../../actions/reviews/handleReviewForm'
import { Link } from 'gatsby'
gsap.registerPlugin(CSSPlugin)

const mapStateToProps = (state) => ({
  cart: state.handleCart,
  checkoutId: state.id,
})

const ifActive = {
  color: '#fff',
  backgroundColor: '#000',
}

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
      inPostLocker: true,
      sizes: [],
    }
    this.sizes = createRef()
    this.mobileBtn = createRef()
    this.description = createRef()
  }
  componentDidMount = async () => {
    const { dispatch, product } = this.props
    this.client = Client.buildClient({
      storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
      domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
    })
    this.client.checkout.create().then((checkout) => {
      dispatch(setCheckoutId(checkout.attrs.id.value))
    })
    await this.fetchSizes(product)
  }

  fetchSizes = async (item) => {
    await this.client.product.fetch(item.shopifyId).then(({ variants }) => {
      this.setState({ sizes: variants }, () => {
        if (typeof window !== 'undefined') {
          JSON.parse(localStorage.getItem('product'))
        }
      })
    })
  }

  addingToCart = () => {
    this.setState({ adding: !this.state.adding })
  }
  handleAddToCart = (product, variant, e) => {
    const { dispatch } = this.props
    if (e.target.name === 'mobile') {
      gsap.to(this.mobileBtn.current, {
        width: '100%',
        backgroundColor: '#0bb300',
        duration: 0.3,
      })
      setTimeout(() => {
        gsap.to(this.mobileBtn.current, {
          width: '50%',
          backgroundColor: colors.action,
          duration: 0.3,
        })
      }, 1000)
    }

    this.addingToCart()

    dispatch(
      addToCart(
        product,
        variant.price,
        variant.title,
        variant.shopifyId,
        this.state.quantity
      )
    )
    setTimeout(() => {
      this.addingToCart()
    }, 1000)
    dispatch(setLineItems(variant.shopifyId, this.state.quantity))
  }

  render() {
    const { product, variant, dispatch } = this.props
    return (
      <ContentWrapper>
        <CartHeader>
          <AniLink cover to="/">
            Powrót
          </AniLink>
        </CartHeader>
        <ProductReview />
        <BasicsWrapper>
          <Head>
            <Type>{product.productType}</Type>
            <Name>{product.title}</Name>
          </Head>
          <Price>{variant.price} PLN</Price>
          <Sizes id="sizes">
            {this.state.sizes ? (
              this.state.sizes.map(({ title, available, sku }) => {
                return (
                  <Size
                    available={available}
                    title={title}
                    sku={sku}
                    key={sku}
                  />
                )
              })
            ) : (
              <p>Sprawdzam dostepność</p>
            )}
          </Sizes>
          {this.state.checkIfAvailable ? null : (
            <Error>Rozmiar jest niedostępny</Error>
          )}
        </BasicsWrapper>
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
            <Text
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          )}
        </Description>
        <Shipping inPostLocker={this.state.inPostLocker} />
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
          <Add onClick={(e) => this.handleAddToCart(product, variant, e)}>
            {this.state.adding
              ? 'Dodany!'
              : `Dodaj ${this.state.quantity} do koszyka`}
          </Add>
          <IncrementQuantity
            onClick={() =>
              this.setState((prevState) => ({
                quantity: prevState.quantity + 1,
              }))
            }
          >
            +
          </IncrementQuantity>
        </AddToCart>
        <ReviewsButton onClick={() => dispatch(handleReviewForm())}>
          Dodaj opinię
          <Icon src={addIcon} size={'35px'} />
        </ReviewsButton>

        <MobileAddToCart>
          <MobileSizes>
            {this.state.sizes ? (
              this.state.sizes.map(({ title, available, sku }) => {
                return (
                  <Link
                    to={`/produkty/${sku}`}
                    available={available.toString()}
                    key={sku}
                    activeStyle={ifActive}
                  >
                    {title}
                  </Link>
                )
              })
            ) : (
              <p>Sprawdzam dostepność</p>
            )}
          </MobileSizes>
          <MobileQuantity>
            <MobileDecrement
              onClick={() =>
                this.setState((prevState) => ({
                  quantity: Math.max(prevState.quantity - 1, 1),
                }))
              }
            >
              -
            </MobileDecrement>
            <MobileValue>{this.state.quantity}</MobileValue>
            <MobileIncrement
              onClick={() =>
                this.setState((prevState) => ({
                  quantity: prevState.quantity + 1,
                }))
              }
            >
              +
            </MobileIncrement>
          </MobileQuantity>
          <MobileButton
            ref={this.mobileBtn}
            onClick={(e) => this.handleAddToCart(product, variant, e)}
          >
            {this.state.adding ? 'Dodany!' : 'Dodaj do koszyka'}
          </MobileButton>
        </MobileAddToCart>
      </ContentWrapper>
    )
  }
}

export default connect(mapStateToProps)(Content)
