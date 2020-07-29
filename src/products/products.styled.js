import styled from 'styled-components'
import { small, medium } from '../components/breakpoints'

export const ProductsWrapper = styled.main`
  width: 100vw;
  height: auto;
  padding: 0 10vw 0;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  @media all and (max-width: ${small}) {
    padding: 0 5vw 0;
  }
`
export const ProductsGrid = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;

  @media all and (max-width: ${medium}) {
    grid-template-columns: 1fr;
    grid-row-gap: 5vw;
  }
`
