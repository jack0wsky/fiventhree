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
    this.cart = createRef()
  }
  componentDidMount() {
    gsap.from(this.cart.current, {
      opacity: 0,
      x: '100%',
      ease: Power2.easeOut,
    })
  }
  componentWillUnmount() {
    console.log('unmount')
    gsap.to(this.cart.current, {
      opacity: 0,
      ease: Power2.easeOut,
    })
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
              return <CartProduct key={product.key} product={product} />
            })
          )}
        </Grid>
        {cart.length > 0 ? <Summary total={this.getTotalPrice} /> : null}
      </CartWrapper>
    )
  }
}

export default connect(mapStateToProps)(Cart)
