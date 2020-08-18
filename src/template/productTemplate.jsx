import React, { useState } from 'react'
import {
  TemplateWrapper,
  Gallery,
  ImagesContainer,
  ClickableImage,
} from './productTemplate.styled'
import Content from './content/content'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import ImageModal from './imageModal/imageModal'
import { useDispatch } from 'react-redux'
import { handleModal } from '../actions/handleModal'
import Img from 'gatsby-image'
const ProductTemplate = ({ pageContext: { product, variant } }) => {
  const dispatch = useDispatch()
  const [toggleModal, setModal] = useState(false)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const openModal = (img, height, width) => {
    setHeight(height)
    setWidth(width)
    dispatch(handleModal(img))
    setModal(!toggleModal)
  }
  const closeModal = () => {
    setModal(!toggleModal)
  }
  return (
    <TemplateWrapper>
      {toggleModal ? (
        <ImageModal height={height} width={width} closeModal={closeModal} />
      ) : null}
      <Gallery>
        <AniLink cover to="/">
          Powrót
        </AniLink>
        <ImagesContainer>
          {product.images.map(
            ({
              localFile: {
                childImageSharp: { fluid },
              },
            }) => {
              const { presentationWidth, presentationHeight } = fluid
              return (
                <ClickableImage
                  onClick={() =>
                    openModal(fluid, presentationHeight, presentationWidth)
                  }
                >
                  <Img
                    fadeIn={true}
                    backgroundColor="#ffffff"
                    objectFit="cover"
                    fluid={fluid}
                    alt="zdjęcia produktu"
                  />
                </ClickableImage>
              )
            }
          )}
        </ImagesContainer>
      </Gallery>
      <Content key={variant.shopifyId} product={product} variant={variant} />
    </TemplateWrapper>
  )
}

export default ProductTemplate
