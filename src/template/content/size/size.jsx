import React, { Component } from 'react'
import { SizeWrapper, Radio, Label } from './size.styled'

class Size extends Component {
  constructor() {
    super()
    this.state = {
      selected: false,
    }
  }
  selectSize = () => {
    this.setState({ selected: !this.state.selected }, () => {
      console.log(this.state.selected)
    })
  }
  render() {
    const { size: sizeValue } = this.props
    return (
      <SizeWrapper>
        <Radio name="size" type="radio" />
        <Label>{sizeValue}</Label>
      </SizeWrapper>
    )
  }
}

export default Size
