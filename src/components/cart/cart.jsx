import React, { Component, createRef } from 'react'
import {
  CartWrapper,
  Header,
  Exit,
  Line,
  Grid,
  CartPlaceholder,
  Text,
  CTA,
} from './cart.styled'
import { connect } from 'react-redux'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { EasePack } from 'gsap/EasePack'
import { Power2 } from 'gsap/all'
import { toggleCart } from '../../actions/toggleCart'
import { getFromLocalStorage } from '../../actions/getFromLocalStorage'
import CartProduct from './cartProduct/cartProduct'
import Summary from './summary/summary'

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
    const { cart, dispatch } = this.props
    const cartData = localStorage.getItem('cart')
    console.log('cart state', cart)
    console.log('cart from cache', JSON.parse(cartData))
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
        <Grid length={cart.length}>
          {cart.length > 0 ? (
            cart.map((product) => {
              return (
                <CartProduct
                  quantityUpdate={this.state.quantityUpdate}
                  handleQuantityUpdate={this.handleQuantityUpdate}
                  key={product.id}
                  product={product}
                />
              )
            })
          ) : (
            <CartPlaceholder>
              <Text>Trochę tu pusto, nie sądzisz?</Text>
              <CTA onClick={() => this.closeCart()}>Dodaj produkty</CTA>
            </CartPlaceholder>
          )}
        </Grid>
        {cart.length > 0 ? (
          <Summary
            quantityUpdate={this.state.quantityUpdate}
            total={this.getTotalPrice}
          />
        ) : null}
      </CartWrapper>
    )
  }
}

export default connect(mapStateToProps)(Cart)
