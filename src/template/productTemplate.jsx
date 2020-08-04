import React, { useState, useRef } from 'react'
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

const ProductTemplate = ({ pageContext: { product, variant } }) => {
  const [defaultImage, setDefaultImage] = useState(
    product.images[0].localFile.childImageSharp.fluid.src
  )
  const rest = useRef()
  const setImage = (src, e) => {
    const images = [...rest.current.children]
    images.forEach((img) => {
      img.style.border = 'none'
    })
    e.currentTarget.style.border = '4px solid #ff0043'
    setDefaultImage(src)
  }
  return (
    <TemplateWrapper>
      <Gallery>
        <AniLink cover to="/">
          Powrót
        </AniLink>
        <RestImages ref={rest}>
          {product.images.map((img) => {
            return (
              <PreviewContainer
                key={img.id}
                onClick={(e) =>
                  setImage(img.localFile.childImageSharp.fluid.src, e)
                }
              >
                <Preview src={img.localFile.childImageSharp.fluid.src} />
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
