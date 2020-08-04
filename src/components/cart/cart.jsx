import React, { Component, createRef } from 'react'
import { CartWrapper, Header, Exit, Line, Grid } from './cart.styled'
import { connect } from 'react-redux'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { EasePack } from 'gsap/EasePack'
import { Power2 } from 'gsap/all'
import { toggleCart } from '../../actions/toggleCart'
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
    }
    this.cart = createRef()
  }
  componentDidMount() {
    gsap.from(this.cart.current, {
      opacity: 0,
      x: '100%',
      ease: Power2.easeOut,
    })
    this.checkIfDataExist()
  }

  componentWillUnmount() {
    gsap.to(this.cart.current, {
      opacity: 0,
      ease: Power2.easeOut,
    })
  }

  checkIfDataExist = (cart) => {
    const data = localStorage.getItem('cart')
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

  render() {
    const { dispatch, cart } = this.props
    const cartData = JSON.parse(localStorage.getItem('cart'))
    return (
      <CartWrapper ref={this.cart} toggle={this.props.toggleCart}>
        <Header>
          <Exit onClick={() => dispatch(toggleCart())}>
            <Line />
            <Line />
          </Exit>
        </Header>
        <Grid length={cart.length}>
          {cart.length === 0 ? (
            <p>No items, find something special</p>
          ) : (
            cart.map((product) => {
              return (
                <CartProduct
                  quantityUpdate={this.state.quantityUpdate}
                  handleQuantityUpdate={this.handleQuantityUpdate}
                  key={product.key}
                  product={product}
                />
              )
            })
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
