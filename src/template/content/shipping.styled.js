import styled from 'styled-components'
import { Description } from './content.styled'

export const ShippingWrapper = styled(Description)`
  display: flex;
  flex-flow: row;
  -webkit-flex-flow: row;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const ShippingTitle = styled.p`
  font-size: 1.1em;
  font-weight: 600;
`
export const Value = styled(ShippingTitle)``
