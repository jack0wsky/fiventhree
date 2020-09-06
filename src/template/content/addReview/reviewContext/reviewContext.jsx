import React from 'react'
import {
  ProductShortcut,
  ShortcutImage,
  Image,
  ShortcutData,
  Title,
  Size,
} from './reviewContext.styled'

const ReviewContext = ({ product, size }) => {
  return (
    <ProductShortcut>
      <ShortcutImage>
        <Image src={product.images[0].originalSrc} />
      </ShortcutImage>
      <ShortcutData>
        <Title>{product.title}</Title>
        <Size>Rozmiar: {size.title}</Size>
      </ShortcutData>
    </ProductShortcut>
  )
}

export default ReviewContext
