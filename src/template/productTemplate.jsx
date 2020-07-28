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

const ProductTemplate = ({ pageContext: { product, variant } }) => {
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
              <PreviewContainer
                key={img.id}
                onClick={() => setImage(img.originalSrc)}
              >
                <Preview src={img.originalSrc} />
              </PreviewContainer>
            )
          })}
        </RestImages>
        <ImageContainer>
          <MainImage src={defaultImage} />
        </ImageContainer>
      </Gallery>
      <Content
        key={variant.shopifyId}
        setImage={setImage}
        product={product}
        variant={variant}
      />
    </TemplateWrapper>
  )
}

export default ProductTemplate
