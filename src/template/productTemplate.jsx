import React, { useState, useRef } from 'react'
import {
  TemplateWrapper,
  Gallery,
  ImagesContainer,
  MainImage,
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
  const [defaultImage, setDefaultImage] = useState(
    product.images[0].localFile.childImageSharp.fluid.src
  )
  const [toggleModal, setModal] = useState(false)
  const rest = useRef()
  const openModal = (img) => {
    dispatch(handleModal(img.localFile.childImageSharp.fluid.src))
    setModal(!toggleModal)
  }
  const closeModal = () => {
    setModal(!toggleModal)
  }
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
      {toggleModal ? <ImageModal closeModal={closeModal} /> : null}
      <Gallery>
        <AniLink cover to="/">
          Powrót
        </AniLink>
        <ImagesContainer>
          {product.images.map((img) => {
            return (
              <ClickableImage>
                <Img
                  fadeIn="true"
                  backgroundColor="#ffffff"
                  objectFit="cover"
                  fluid={img.localFile.childImageSharp.fluid}
                />
              </ClickableImage>
            )
          })}
        </ImagesContainer>
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
