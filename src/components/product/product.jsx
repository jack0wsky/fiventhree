import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
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
  const { node: item } = product
  return (
    <ProductWrapper>
      <ImageSlider>
        <LastestLabel>Nowosc</LastestLabel>
      </ImageSlider>
      <Details>
        <Price>{item.variants[0].price} PLN</Price>
        <SecondLine>
          <AniLink cover to={`/produkty/${item.shopifyId}`}>
            <Name>{item.title}</Name>
            <AddToCart>Kup teraz</AddToCart>
          </AniLink>
        </SecondLine>
      </Details>
    </ProductWrapper>
  )
}

export default Product
