import styled from 'styled-components'
import { small, medium, large, xlarge } from '../components/breakpoints'

export const TemplateWrapper = styled.main`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #fff;

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
    overflow: hidden;
    flex-flow: column-reverse;
    -webkit-flex-flow: column-reverse;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 50%;
    height: auto;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 65%;
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
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media all and (max-width: ${large}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    height: auto;
  }
`
export const ClickableImage = styled.button`
  width: 100%;
  height: 70vh;
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
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    height: 80vh;
  }
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
