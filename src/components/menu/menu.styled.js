import styled from 'styled-components'
import { small } from '../breakpoints'

export const MenuWrapper = styled.section`
  display: none;
  @media all and (max-width: ${small}) {
    width: 100vw;
    height: 50vh;
    background-color: #dedede;
    position: fixed;
    z-index: 45;
    transition: 0.3s ease-in-out;
    bottom: 50%;
  }
`
