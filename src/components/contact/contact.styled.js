import styled from 'styled-components'
import { medium } from '../breakpoints'

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${medium}) {
    flex-flow: column;
    -webkit-flex-flow: column;
  }
`
