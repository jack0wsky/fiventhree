import styled from 'styled-components'
import { colors } from '../../../theme'

export const PointWrapper = styled.div`
  width: 100%;
  height: ${({ toggle }) => (toggle ? '15vh' : '10vh')};
  padding: 20px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`
export const Address = styled.h3`
  font-size: 1em;
`
export const Description = styled.p`
  font-size: 0.8em;
  font-family: 'Helvetica Neue', sans-serif;
`
export const ChooseBtn = styled.button`
  width: 100%;
  font-size: 1em;
  border: none;
  padding: 15px 30px 15px;
  cursor: pointer;
  background-color: ${colors.action};
  color: #fff;

  &:focus {
    outline: none;
  }
`
