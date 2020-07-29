import styled from 'styled-components'
import { small, medium, large, xlarge } from '../components/breakpoints'

export const TemplateWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media all and (max-width: ${medium}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    height: auto;
  }
`
export const Gallery = styled.section`
  width: 50%;
  height: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media all and (max-width: ${medium}) {
    width: 100%;
    height: 70vh;
    overflow: hidden;
    flex-flow: column-reverse;
    -webkit-flex-flow: column-reverse;
  }

  & > a {
    display: none;
    @media all and (max-width: ${small}) {
      display: block;
      position: absolute;
      top: 5vw;
      left: 5vw;
      text-decoration: none;
      color: #000;
    }
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
export const RestImages = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const PreviewContainer = styled.button`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const Preview = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
