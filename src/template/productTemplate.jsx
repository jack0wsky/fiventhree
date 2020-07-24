import React from 'react'
import { TemplateWrapper, Gallery } from './productTemplate.styled'
import Content from './content/content'

const ProductTemplate = ({ pageContext: { product } }) => {
  return (
    <TemplateWrapper>
      <Gallery></Gallery>
      <Content product={product} />
    </TemplateWrapper>
  )
}

export default ProductTemplate
