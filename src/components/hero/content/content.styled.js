import styled from 'styled-components'
import { small } from '../../breakpoints'

export const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: absolute;
  z-index: 10;
  padding: 10vw 5vw 5vw;
  @media all and (max-width: ${small}) {
    padding: 40vw 5vw 0;
    height: 55vh;
  }
`
export const TitlesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const Title = styled.h2`
  font-size: 5.5em;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Aktiv Grotesk Ex', sans-serif;

  @media all and (max-width: ${small}) {
    font-size: 3em;
  }
`
export const Stars = styled.img`
  width: 8.5vw;
  transform-origin: 0 0;
  transition: 0.3s ease-in-out;
  margin: 5px 0 0;
  //position: absolute;

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
    margin: 50px 0 0;
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
  align-items: center;
  -webkit-align-items: center;
`
export const CTA = styled.button`
  text-transform: uppercase;
  background-color: #ff0707;
  padding: 20px 40px 20px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`
