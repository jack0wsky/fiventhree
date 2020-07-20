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

const Product = ({ product }) => {
  return (
    <ProductWrapper>
      <ImageSlider>
        <LastestLabel>Nowosc</LastestLabel>
      </ImageSlider>
      <Details>
        <Price>{product.price} PLN</Price>
        <SecondLine>
          <Name>{product.name}</Name>
          <AddToCart>Kup teraz</AddToCart>
        </SecondLine>
      </Details>
    </ProductWrapper>
  )
}

export default Product
