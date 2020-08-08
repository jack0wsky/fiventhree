import styled from 'styled-components'
import { medium } from '../breakpoints'

export const Wrapper = styled.header`
  height: ${({ minify }) => (minify ? '0' : '100px')};
  width: 100vw;
  background-color: ${({ background }) =>
    background ? '#000' : 'transparent'};
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 5vw 0;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: fixed;
  z-index: 99;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  ${({ scrolled }) => {
    if (scrolled) {
      return `
            transform: translateY(-100px);
          `
    }
  }};
`
export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000;
  left: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
  transform-origin: 0 0;
  bottom: -100%;
`
export const Nav = styled.nav`
  width: 40%;
  padding: 15px 30px 15px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }
  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const ActiveBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #000;
  transform: translateY(100%);
`
