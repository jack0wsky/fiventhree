import styled from 'styled-components'
import { colors } from '../../../theme'

export const Popup = styled.div`
  width: 100px;
  height: 70px;
  background-color: #fff;
  position: absolute;
  top: 120%;
  left: 50%;
  margin: 0 0 0 -50px;
  visibility: hidden;
`
export const MapPointWrapper = styled.button`
  width: auto;
  height: auto;
  border: none;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }
  &:focus ${Popup} {
    visibility: visible;
  }
`
export const Point = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${colors.action};
  border: 1px solid #fff;
`
