import React, { Component } from 'react'
import { Link } from 'gatsby'
import { SizeWrapper, SizeContainer } from './size.styled'

class Size extends Component {
  render() {
    const { title, sku, available } = this.props
    const ifActive = {
      color: '#fff',
      backgroundColor: '#000',
    }
    return (
      <SizeWrapper available={available}>
        {available ? (
          <Link to={`/produkty/${sku}`} activeStyle={ifActive}>
            <SizeContainer>{title}</SizeContainer>
          </Link>
        ) : (
          <SizeContainer>{title}</SizeContainer>
        )}
      </SizeWrapper>
    )
  }
}

export default Size
