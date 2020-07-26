import React, { Component } from 'react'
import { SizeWrapper, Radio, Label } from './size.styled'

class Size extends Component {
  render() {
    const { size: sizeValue, selectSize } = this.props
    return (
      <SizeWrapper>
        <Radio
          onChange={() => selectSize(sizeValue)}
          sizeValue={sizeValue}
          name="size"
          type="radio"
        />
      </SizeWrapper>
    )
  }
}

export default Size
