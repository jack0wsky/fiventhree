import styled from 'styled-components'
import { colors } from '../../theme'
import { small } from '../breakpoints'

export const Image = styled.img`
  height: 100%;
  width: 40vw;
  object-fit: cover;
  transition: 0.3s ease-in-out;
`
export const ProductWrapper = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  font-family: 'Aktiv Grotesk Ex', sans-serif;

  &:hover ${Image} {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }
  @media all and (max-width: ${small}) {
    width: 90vw;
  }
`
export const ImageSlider = styled.section`
  width: 100%;
  height: 80%;
  background-color: #ccc;
  position: relative;
  border: none;
  display: flex;
  overflow: hidden;
`
export const LastestLabel = styled.p`
  font-size: 0.7em;
  position: absolute;
  top: 2vw;
  text-transform: uppercase;
  width: max-content;
  padding: 10px 20px 10px;
  background-color: ${colors.action};
  color: #fff;
`
export const Details = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;

  @media all and (max-width: ${small}) {
    height: 15vh;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
`
export const Name = styled.h3`
  font-size: 1em;
  font-family: 'Aktiv Grotesk Ex', sans-serif;
  text-decoration: none;
  color: #000;
`
export const Price = styled.p`
  font-size: 1em;
  text-decoration: none;
  color: #000;
`
export const SecondLine = styled.div`
  width: 100%;

  a {
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    -webkit-align-items: center;
    text-decoration: none;

    @media all and (max-width: ${small}) {
      flex-flow: column;
      -webkit-flex-flow: column;
      align-items: flex-start;
    }
  }
`
export const AddToCart = styled.button`
  text-transform: uppercase;
  font-size: 0.9em;
  padding: 15px 30px 15px;
  border: none;
  background-color: ${colors.action};
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    width: 100%;
  }
`
