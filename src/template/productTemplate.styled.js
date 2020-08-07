import styled from 'styled-components'
import { small, medium, large, xlarge } from '../components/breakpoints'

export const TemplateWrapper = styled.main`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  overflow: hidden;

  @media all and (max-width: ${medium}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    height: auto;
  }
`
export const Gallery = styled.section`
  width: 70%;
  height: auto;
  min-height: 150vh;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media all and (max-width: ${small}) {
    height: auto;
    width: 100%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 100%;
    height: auto;
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
export const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media all and (max-width: ${medium}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    height: auto;
  }
`
export const ClickableImage = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: start;
  scroll-behavior: smooth;

  div {
    width: 100%;
    height: 100%;
  }

  &:focus {
    outline: none;
  }

  @media all and (max-width: ${small}) {
    height: 60vh;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    height: 70vh;
  }
`
export const MainImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
export const RestImages = styled.section`
  width: auto;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 100%;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const PreviewContainer = styled.a`
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
