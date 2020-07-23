import React from 'react'
import {
  ProductWrapper,
  ImageSlider,
  LastestLabel,
  Details,
  Name,
  Price,
  SecondLine,
  AddToCart,
} from './product.styled'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/addToCart'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <ProductWrapper>
      <ImageSlider>
        <LastestLabel>Nowosc</LastestLabel>
      </ImageSlider>
      <Details>
        <Price>{product.price} PLN</Price>
        <SecondLine>
          <Name>{product.name}</Name>
          <AddToCart onClick={() => dispatch(addToCart(product, 1))}>
            Kup teraz
          </AddToCart>
        </SecondLine>
      </Details>
    </ProductWrapper>
  )
}

export default Product
