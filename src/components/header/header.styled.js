import styled from 'styled-components'
import { small } from '../breakpoints'

export const Wrapper = styled.header`
  height: ${({ minify }) => (minify ? '80px' : '100px')};
  width: 100vw;
  background-color: #000;
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
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 600;
  }
  @media all and (max-width: ${small}) {
    display: none;
  }
`
