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
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #bf0000;
  mix-blend-mode: multiply;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
