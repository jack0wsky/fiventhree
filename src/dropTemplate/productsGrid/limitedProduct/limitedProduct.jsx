import React, { useState } from 'react'
import {
  DecrementQuantity,
  Image,
  IncrementQuantity,
  Preview,
  Data,
  Wrapper,
  PropsWrapper,
  QuantityWrapper,
  SizeSelector,
  AddToCart,
} from './limitedProduct.styled'

const LimitedProduct = ({ item, addProduct }) => {
  const [quantity, setQuantity] = useState(1)
  const [currentId, setCurrentId] = useState(JSON.stringify(item.variants[0]))
  const sizeSelect = (e) => {
    setCurrentId(e.target.value)
  }
  return (
    <Wrapper>
      <Preview>
        <Image src={item.images[0].originalSrc} />
      </Preview>
      <Data>
        <p>{item.title}</p>
        <p>{item.variants[0].price} PLN</p>
        <PropsWrapper>
          <SizeSelector onChange={(e) => sizeSelect(e)}>
            {item.variants.map((variant) => {
              return (
                <option
                  value={JSON.stringify(variant)}
                  name={variant.title}
                  key={variant.shopifyId}
                >
                  {variant.title}
                </option>
              )
            })}
          </SizeSelector>
          <QuantityWrapper>
            <DecrementQuantity
              quantity={quantity}
              disabled={quantity === 1}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </DecrementQuantity>
            <p>{quantity}</p>
            <IncrementQuantity onClick={() => setQuantity(quantity + 1)}>
              +
            </IncrementQuantity>
          </QuantityWrapper>
        </PropsWrapper>
        <AddToCart
          onClick={() =>
            addProduct(item, item.variants[0].price, currentId, quantity)
          }
        >
          Dodaj do koszyka
        </AddToCart>
      </Data>
    </Wrapper>
  )
}

export default LimitedProduct
