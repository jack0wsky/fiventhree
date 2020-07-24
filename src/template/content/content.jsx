import React from 'react'
import {
  ContentWrapper,
  Name,
  Price,
  Sizes,
  Size,
  Description,
  Title,
  Text,
  AddToCart,
} from './content.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Content = ({ product }) => {
  console.log(product)
  return (
    <ContentWrapper>
      <AniLink cover to="/">
        Powrót
      </AniLink>
      <Name>{product.title}</Name>
      <Price>{product.variants[0].price} PLN</Price>
      <Sizes>
        {product.options.map((option) => {
          return option.values.map((size) => {
            return <Size key={size}>{size}</Size>
          })
        })}
      </Sizes>
      <Description>
        <Title>Opis</Title>
        <Text>{product.description}</Text>
      </Description>
      <AddToCart>Dodaj do koszyka</AddToCart>
    </ContentWrapper>
  )
}

export default Content
