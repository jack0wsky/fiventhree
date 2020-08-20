import React, { Component, createRef } from 'react'
import {
  CartWrapper,
  Header,
  Exit,
  Line,
  Grid,
  EmptyPlaceholder,
  Text,
  Illustration,
  CTA,
} from './cart.styled'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { EasePack } from 'gsap/EasePack'
import { Power2 } from 'gsap/all'
import { toggleCart } from '../../actions/toggleCart'
import CartProduct from './cartProduct/cartProduct'
import Summary from './summary/summary'
import EmptyCart from '../../assets/empty cart.svg'

gsap.registerPlugin(CSSPlugin, EasePack, Power2)

const mapStateToProps = (state) => ({
  toggleCart: state.toggleCart,
  cart: state.handleCart,
})

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      quantityUpdate: false,
      inPostData: null,
    }
    this.cart = createRef()
  }
  componentDidMount = async () => {
    gsap.from(this.cart.current, {
      opacity: 0,
      x: '100%',
      ease: Power2.easeOut,
    })
    this.showCartProducts()
  }

  handleQuantityUpdate = () => {
    this.setState({ quantityUpdate: !this.state.quantityUpdate })
  }
  addProducts = () => {
    const { dispatch } = this.props
    gsap.to(this.cart.current, {
      opacity: 0,
      x: '100%',
      ease: Power2.easeOut,
      duration: 0.3,
    })
    setTimeout(() => {
      dispatch(toggleCart())
    }, 300)
    navigate('/produkty')
  }

  getTotalPrice = () => {
    const { cart } = this.props
    let sum = cart.reduce((acc, cur) => {
      return (acc += cur.price * cur.quantity)
    }, 0)
    sum += 8.99
    return sum.toFixed(2)
  }
  closeCart = () => {
    const { handleCartAnimation } = this.props
    handleCartAnimation()
    gsap.to(this.cart.current, {
      opacity: 0,
      x: '100%',
      ease: Power2.easeOut,
      duration: 0.3,
    })
    setTimeout(() => {
      this.props.dispatch(toggleCart())
    }, 300)
  }

  showCartProducts = () => {
    const { cart } = this.props
    if (cart.length > 0) {
      return cart.map((product) => {
        return (
          <CartProduct
            quantityUpdate={this.state.quantityUpdate}
            handleQuantityUpdate={this.handleQuantityUpdate}
            key={product.shopifyId}
            product={product}
          />
        )
      })
    } else {
      if (typeof window !== 'undefined') {
        const existingInCache = localStorage.getItem('cart')
        if (existingInCache) {
          const cachedCart = JSON.parse(existingInCache)
          return cachedCart.map((product) => {
            return (
              <CartProduct
                quantityUpdate={this.state.quantityUpdate}
                handleQuantityUpdate={this.handleQuantityUpdate}
                key={product.id}
                product={product}
              />
            )
          })
        }
      }
    }
  }

  showSummary = () => {
    const { cart } = this.props
    if (cart.length > 0) {
      return (
        <Summary
          quantityUpdate={this.state.quantityUpdate}
          total={this.getTotalPrice}
        />
      )
    } else {
      if (typeof window !== 'undefined') {
        let existingCache = localStorage.getItem('cart')
        if (existingCache) {
          return (
            <Summary
              quantityUpdate={this.state.quantityUpdate}
              total={this.getTotalPrice}
            />
          )
        }
      }
    }
  }

  render() {
    const { cart } = this.props
    return (
      <CartWrapper ref={this.cart} toggle={this.props.toggleCart}>
        <Header>
          <Exit onClick={() => this.closeCart()}>
            <Line />
            <Line />
          </Exit>
        </Header>
        <Grid length={cart.length} cache={localStorage.getItem('cart')}>
          {cart.length > 0 ? (
            cart.map((product) => {
              return (
                <CartProduct
                  quantityUpdate={this.state.quantityUpdate}
                  handleQuantityUpdate={this.handleQuantityUpdate}
                  key={product.shopifyId}
                  product={product}
                />
              )
            })
          ) : (
            <EmptyPlaceholder>
              <Illustration src={EmptyCart} alt="emptyCart" />
              <Text>Trochę tu pusto</Text>
              <CTA onClick={() => this.addProducts()}>Dodaj produkty</CTA>
            </EmptyPlaceholder>
          )}
        </Grid>
        {this.showSummary()}
      </CartWrapper>
    )
  }
}

export default connect(mapStateToProps)(Cart)
