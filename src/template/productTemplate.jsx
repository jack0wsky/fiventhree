import React, { useState, useEffect } from 'react'
import {
  TemplateWrapper,
  Gallery,
  ImagesContainer,
  ClickableImage,
  Image,
} from './productTemplate.styled'
import Content from './content/content'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import ImageModal from './imageModal/imageModal'
import { useDispatch, useSelector } from 'react-redux'
import { handleModal } from '../actions/handleModal'
import { getProductData } from '../actions/reviews/getProductData'

const ProductTemplate = ({ pageContext: { product, variant } }) => {
  const dispatch = useDispatch()
  const [toggleModal, setModal] = useState(false)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    dispatch(getProductData(product.images[0].originalSrc, product.shopifyId))
  }, [dispatch])

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
          {product.images.map(({ originalSrc }) => {
            return (
              <ClickableImage
                key={originalSrc}
                onClick={() => openModal(originalSrc, '85vh', '50vw')}
              >
                <Image src={originalSrc} alt="zdjęcia produktu" />
              </ClickableImage>
            )
          })}
        </ImagesContainer>
      </Gallery>
      <Content key={variant.shopifyId} product={product} variant={variant} />
    </TemplateWrapper>
  )
}

export default ProductTemplate
