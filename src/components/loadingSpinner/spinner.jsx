import React from 'react'
import { Wrapper, Loading } from './spinner.styled'

const Spinner = ({ width, borderColor, color }) => {
  return (
    <Wrapper width={width}>
      <Loading borderColor={borderColor} color={color} />
    </Wrapper>
  )
}

export default Spinner
