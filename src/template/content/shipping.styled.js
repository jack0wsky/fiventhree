import styled from 'styled-components'
import { Description } from './content.styled'
import { Title } from './content.styled'

export const ShippingWrapper = styled(Description)``

export const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1vw;
  margin: 10px 0 0;
`
export const ShippingTitle = styled(Title)`
  text-align: left;
`
export const ShippingMethod = styled.button`
  width: 100%;
  height: 10vh;
  background-color: transparent;
  border: ${({ selected }) =>
    selected ? '3px solid #000' : '1px solid #c1c1c1'};
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #e5e5e5;
  }
`
export const Label = styled.p`
  font-size: 1em;
`
export const Price = styled.p``
