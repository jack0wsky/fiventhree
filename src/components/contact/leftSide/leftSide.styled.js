import styled from 'styled-components'
import { medium } from '../../breakpoints'

export const Wrapper = styled.section`
  width: 50%;
  height: 100%;
  background-color: #ccc;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
`
export const Img = styled.img`
  object-fit: cover;
`
