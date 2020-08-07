import React from 'react'
import {
  ModalWrapper,
  SelectedImageContainer,
  Image,
  CloseBtn,
} from './imageModal.styled'
import { useSelector } from 'react-redux'

const ImageModal = ({ closeModal }) => {
  const modal = useSelector((state) => state.modal)
  return (
    <ModalWrapper>
      <SelectedImageContainer>
        <CloseBtn onClick={() => closeModal()}></CloseBtn>
        <Image src={modal} />
      </SelectedImageContainer>
    </ModalWrapper>
  )
}

export default ImageModal
