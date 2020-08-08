import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../../actions/removeFromCart'
import { removeLineItems } from '../../../actions/removeLineItems'
import { decrementQuantity } from '../../../actions/decrementQuantity'
import { incrementQuantity } from '../../../actions/incrementQuantity'
import Img from 'gatsby-image'
import {
  Wrapper,
  Preview,
  Data,
  Name,
  Price,
  Size,
  Quantity,
  Decrement,
  Increment,
  Value,
  Remove,
  RemoveBtn,
  Image,
} from './cartProduct.styled'
import Cancel from './removeIcon/removeIcon'

const mapStateToProps = (state) => ({ cart: state.handleCart })

class CartProduct extends Component {
  state = {
    quantity: this.props.product.quantity,
  }

  ifLowestQuantity = (id) => {
    const { dispatch, handleQuantityUpdate, product } = this.props
    if (product.quantity !== 1) {
      dispatch(decrementQuantity(id))
    }
    handleQuantityUpdate()
  }
  incrementProductQuantity = (id) => {
    const { dispatch, handleQuantityUpdate } = this.props
    dispatch(incrementQuantity(id))
    handleQuantityUpdate()
  }
  removeCartItem = (id) => {
    const { dispatch } = this.props
    dispatch(removeFromCart(id))
    dispatch(removeLineItems(id))
  }
  render() {
    const { product } = this.props
    return (
      <Wrapper>
        <Preview>
          <Img
            fluid={product.product.images[0].localFile.childImageSharp.fluid}
          />
        </Preview>
        <Data>
          <Name>{product.product.title}</Name>
          <Price>{product.product.variants[0].price} PLN</Price>
          <Size>Rozmiar: {product.size}</Size>
          <Quantity>
            <Decrement onClick={() => this.ifLowestQuantity(product.shopifyId)}>
              -
            </Decrement>
            <Value>{product.quantity}</Value>
            <Increment
              onClick={() => this.incrementProductQuantity(product.shopifyId)}
            >
              +
            </Increment>
          </Quantity>
        </Data>
        <Remove>
          <RemoveBtn onClick={() => this.removeCartItem(product.shopifyId)}>
            <Cancel height={'30px'} color={'#000'} />
            Usuń
          </RemoveBtn>
        </Remove>
      </Wrapper>
    )
  }
}

export default connect(mapStateToProps)(CartProduct)
