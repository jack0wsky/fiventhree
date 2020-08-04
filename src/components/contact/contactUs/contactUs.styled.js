import styled from 'styled-components'
import { medium } from '../../breakpoints'

export const Wrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 12vh 0 0;

  @media all and (max-width: ${medium}) {
    width: 100%;
    height: auto;
  }
`
export const HeadTitle = styled.h3`
  font-size: 5em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #000;

  @media all and (max-width: ${medium}) {
    padding: 0 0 0 5vw;
    font-size: 4.5em;
  }
`
