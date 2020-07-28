import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { colors } from '../../theme'
import {
  ProductWrapper,
  ImageSlider,
  Image,
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
        {item.images.map((img) => {
          return <Image src={img.originalSrc} />
        })}
      </ImageSlider>
      <Details>
        <Price>{item.variants[0].price} PLN</Price>
        <SecondLine>
          <AniLink
            cover
            bg={colors.darkRed}
            to={`/produkty/${item.variants[0].sku}`}
          >
            <Name>{item.title}</Name>
            <AddToCart>Kup teraz</AddToCart>
          </AniLink>
        </SecondLine>
      </Details>
    </ProductWrapper>
  )
}

export default Product
