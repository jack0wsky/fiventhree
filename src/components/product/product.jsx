import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { colors } from '../../theme'
import Img from 'gatsby-image'
import {
  ProductWrapper,
  ImageSlider,
  Details,
  Name,
  Price,
  SecondLine,
  AddToCart,
  OnHover,
} from './product.styled'

const Product = ({ product }) => {
  return (
    <ProductWrapper>
      <ImageSlider>
        <OnHover />
        <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
      </ImageSlider>
      <Details>
        <Price>{product.variants[0].price} PLN</Price>
        <SecondLine>
          <AniLink
            cover
            bg={colors.darkRed}
            to={`/produkty/${product.variants[0].sku}`}
          >
            <Name>{product.title}</Name>
            <AddToCart>Kup teraz</AddToCart>
          </AniLink>
        </SecondLine>
      </Details>
    </ProductWrapper>
  )
}

export default Product
