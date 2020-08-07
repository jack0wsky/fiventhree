import styled from 'styled-components'
import { small, medium, large } from '../../breakpoints'

export const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
  position: absolute;
  z-index: 22;
  padding: 10vw 5vw 5vw;

  @media all and (max-width: ${small}) {
    padding: 40vw 5vw 5vw;
    height: 55vh;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    padding: 30vw 5vw 5vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    padding: 20vw 5vw 5vw;
  }
`
export const Stars = styled.img`
  width: 8.5vw;
  transform-origin: 0 0;
  transition: 0.3s ease-in-out;
  margin: 5px 0 0;

  ${(props) => {
    if (!props.scrolled) {
      return `
            transform: scale(9);
            margin: 0;
            bottom: 0;
          `
    }
  }};

  @media all and (max-width: ${small}) {
    margin: 10px 0 0;
    width: 40vw;

    ${(props) => {
      if (!props.scrolled) {
        return `
            transform: scale(2.2);
            margin: 0;
            bottom: 0;
          `
      }
    }};
  }
`
export const CTASection = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: flex-end;
  -webkit-align-items: flex-end;

  a {
    text-decoration: none;
    text-transform: uppercase;
    background-color: #ff0707;
    padding: 20px 40px 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    transition: 0.3s ease-in-out;

    &:focus {
      outline: none;
    }
    &:hover {
      transition: 0.3s ease-in-out;
      transform: translateY(-5px);
    }
  }
`
