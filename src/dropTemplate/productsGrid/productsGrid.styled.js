import styled from 'styled-components'
import { small, medium, large } from '../../components/breakpoints'

export const Wrapper = styled.div`
  width: 40vw;
  height: 55vh;

  @media all and (max-width: ${small}) {
    width: 100vw;
    height: auto;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 90vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 70vw;
  }
`
export const Grid = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);

  @media all and (max-width: ${small}) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`
