import styled from 'styled-components'
import { medium } from '../breakpoints'
import { colors } from '../../theme'

export const MobileCartWrapper = styled.button`
  display: none;

  @media all and (max-width: ${medium}) {
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    width: 70px;
    height: 70px;
    background-color: #000000;
    border-radius: 50%;
    position: fixed;
    z-index: 50;
    bottom: 25vw;
    right: 5vw;
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
    }
  }
`
export const CartLength = styled.div`
  display: none;

  @media all and (max-width: ${medium}) {
    position: absolute;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${colors.darkRed};
    color: #fff;
    right: 0;
    top: 0;
    font-size: 1em;
  }
`
