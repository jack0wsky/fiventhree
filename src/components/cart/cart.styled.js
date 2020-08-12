import styled from 'styled-components'
import { colors } from '../../theme'
import { small, medium, large, xlarge } from '../breakpoints'

export const CartWrapper = styled.section`
  width: 35vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  padding: 0 0 5vw;

  @media all and (max-width: ${medium}) {
    width: 100vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 50vw;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 40vw;
  }
`
export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 2vw 0;
`
export const Exit = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  span:nth-child(1) {
    transform: rotate(-45deg);
  }
  span:nth-child(2) {
    transform: rotate(45deg);
  }
  position: relative;

  &:hover span {
    transition: 0.3s ease-in-out;
    transform: scale(0.9);
    background-color: ${colors.action};
  }
`
export const Line = styled.span`
  width: 80%;
  height: 2px;
  background-color: #000;
  display: block;
  transform-origin: center center;
  position: absolute;
  transition: 0.3s ease-in-out;
`
export const Grid = styled.section`
  width: 100%;
  padding: 0 2vw 0;

  ${({ length }) => {
    if (length > 0) {
      return `
          display: grid;
          grid-template-columns: 100%;
          grid-template-rows: repeat(${length}, 1fr);
          grid-row-gap: 5px;
          height: auto;
          `
    } else {
      return `
        display: flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        height: 50vh;
        `
    }
  }};
`
export const CartPlaceholder = styled.div`
  font-size: 1em;
  display: flex;
  flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  height: auto;
  width: 70%;
`
export const Text = styled.p`
  font-size: 1em;
`
export const CTA = styled.button`
  border: none;
  padding: 15px 30px 15px;
  background-color: ${colors.action};
  color: #fff;
  cursor: pointer;
  margin: 30px 0 0;

  &:focus {
    outline: none;
  }
`
