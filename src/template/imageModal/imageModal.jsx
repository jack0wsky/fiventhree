import React, { useEffect, useRef } from 'react'
import {
  ModalWrapper,
  SelectedImageContainer,
  CloseBtn,
} from './imageModal.styled'
import { useSelector } from 'react-redux'
import Img from 'gatsby-image'
import Cancel from '../../components/inPost/exit'
import { Image } from '../productTemplate.styled'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const ImageModal = ({ closeModal, width, height }) => {
  const modal = useSelector((state) => state.modal)
  const container = useRef()
  useEffect(() => {
    gsap.from(container.current, {
      height: 0,
      duration: 0.7,
    })
  }, [])
  return (
    <ModalWrapper>
      <SelectedImageContainer width={width} height={height} ref={container}>
        <CloseBtn onClick={() => closeModal()}>
          <Cancel color={'#000'} height={'30px'} />
        </CloseBtn>
        <Image src={modal} alt="product-image-preview" />
      </SelectedImageContainer>
    </ModalWrapper>
  )
}

export default ImageModal
