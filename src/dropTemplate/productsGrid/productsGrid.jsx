import React from 'react'
import { Wrapper, Grid } from './productsGrid.styled'
import LimitedProduct from './limitedProduct/limitedProduct'
import { addToCart } from '../../actions/addToCart'
import { useDispatch } from 'react-redux'
import { setLineItems } from '../../actions/setLineItems'

const ProductsGrid = ({ items }) => {
  const dispatch = useDispatch()
  const addProduct = (item, price, id, qtity) => {
    const prod = JSON.parse(id)
    dispatch(addToCart(item, prod.price, prod.title, prod.shopifyId, qtity))
    dispatch(setLineItems(prod.shopifyId, qtity))
  }
  return (
    <Wrapper>
      <Grid>
        {items.map((item) => {
          return (
            <LimitedProduct
              item={item}
              key={item.shopifyId}
              addProduct={addProduct}
            />
          )
        })}
      </Grid>
    </Wrapper>
  )
}

export default ProductsGrid
