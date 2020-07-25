import styled from 'styled-components'
import { colors } from '../../theme'
import { small } from '../../components/breakpoints'

export const ContentWrapper = styled.section`
  width: 50%;
  height: auto;
  padding: 100px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  @media all and (max-width: ${small}) {
    width: 100%;
    height: 50%;
    padding: 5vw;
  }
  & > a {
    @media all and (max-width: ${small}) {
      display: none;
    }
  }
`
export const Cart = styled.section`
  width: 100%;
  height: 100px;
`
export const Reviews = styled.div`
  width: 50%;
  height: 50px;
`
export const Name = styled.h3`
  font-size: 2em;

  @media all and (max-width: ${small}) {
    font-size: 1.2em;
  }
`
export const Price = styled(Name)``

export const Sizes = styled.section`
  width: 50%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    height: 10vh;
  }
`
export const Description = styled.section`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  width: 50%;
  font-weight: 500;

  @media all and (max-width: ${small}) {
    width: 100%;
    height: auto;
    padding: 0 0 2vh;
  }
`
export const Title = styled.h4`
  font-size: 1.1em;
  margin: 0 0 20px;
`
export const Text = styled.p`
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
`
export const AddToCart = styled.section`
  width: max-content;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
`
export const DecrementQuantity = styled.button`
  height: 60px;
  width: 60px;
  border: none;
  background-color: ${colors.action};
  font-size: 1.2em;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`
export const Add = styled.button`
  height: 60px;
  padding: 15px 30px 15px;
  font-size: 1em;
  background-color: ${colors.darkRed};
  border: none;
  cursor: pointer;
  color: #fff;

  &:focus {
    outline: none;
  }
`
export const IncrementQuantity = styled(DecrementQuantity)``

export const MobileGallery = styled.section`
  display: none;

  @media all and (max-width: ${small}) {
    display: flex;
    width: 100%;
    height: 15vh;
    background-color: #ccc;
  }
`
