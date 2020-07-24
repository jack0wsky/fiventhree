import React, { useState } from 'react'
import {
  TemplateWrapper,
  Gallery,
  ImageContainer,
  MainImage,
  RestImages,
  PreviewContainer,
  Preview,
} from './productTemplate.styled'
import Content from './content/content'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'

const ProductTemplate = ({ pageContext: { product } }) => {
  const [defaultImage, setDefaultImage] = useState(
    product.images[0].originalSrc
  )

  const setImage = (src) => {
    setDefaultImage(src)
  }
  return (
    <TemplateWrapper>
      <Gallery>
        <AniLink cover to="/">
          Powrót
        </AniLink>
        <RestImages>
          {product.images.map((img) => {
            return (
              <PreviewContainer onClick={() => setImage(img.originalSrc)}>
                <Preview src={img.originalSrc} />
              </PreviewContainer>
            )
          })}
        </RestImages>
        <ImageContainer>
          <MainImage src={defaultImage} />
        </ImageContainer>
      </Gallery>
      <Content setImage={setImage} product={product} />
    </TemplateWrapper>
  )
}

export default ProductTemplate
