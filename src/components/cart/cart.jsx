import React, { Component, createRef } from 'react'
import { CartWrapper, Header, Exit, Line, Grid } from './cart.styled'
import { connect } from 'react-redux'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { EasePack } from 'gsap/EasePack'
import { Power2 } from 'gsap/all'
import { toggleCart } from '../../actions/toggleCart'

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
        <Grid>
          {cart.length === 0 ? <p>No items, find something special</p> : null}
        </Grid>
      </CartWrapper>
    )
  }
}

export default connect(mapStateToProps)(Cart)
