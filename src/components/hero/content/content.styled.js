import styled from 'styled-components'
import { small } from '../../breakpoints'

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  position: absolute;
  z-index: 10;
  padding: 10vw 5vw 0;
  @media all and (max-width: ${small}) {
    padding: 40vw 5vw 0;
  }
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
  width: 80vw;
  transform-origin: 0 0;
`
