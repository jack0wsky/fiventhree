import styled from 'styled-components'
import { medium, large, xlarge } from '../breakpoints'

export const Wrapper = styled.header`
  height: 100px;
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
  bottom: 0;
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
  &:hover {
    height: auto;
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

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const MobileBurger = styled.button`
  display: none;

  @media all and (max-width: ${medium}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    padding: 10px 0 10px;
    width: 50px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
  }
`
export const BurgerIcon = styled.img`
  display: none;

  @media all and (max-width: ${medium}) {
    display: block;
    height: 100%;
    width: 100%;
  }
`
export const RightAside = styled.section`
  height: 100%;
  width: 15vw;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${medium}) {
    width: auto;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 25vw;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 20vw;
  }
`
export const SocialMedia = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
