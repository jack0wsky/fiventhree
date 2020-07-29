import styled from 'styled-components'
import { colors } from '../../theme'
import { small, medium, large, xlarge } from '../../components/breakpoints'

export const ContentWrapper = styled.section`
  width: 50%;
  height: auto;
  padding: 100px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: relative;

  @media all and (max-width: ${medium}) {
    width: 100%;
    height: 50%;
    padding: 5vw;
  }
  & > a {
    @media all and (max-width: ${small}) {
      display: none;
    }
  }

  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    padding: 5vw;
    height: 70%;
    margin: auto;
  }
`
export const Head = styled.div`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;

  @media all and (max-width: ${small}) {
    margin: 5vh 0 0;
  }
`
export const Type = styled.p`
  opacity: 0.5;
  font-size: 0.9em;
`
export const Name = styled.h3`
  font-size: 2em;

  @media all and (max-width: ${small}) {
    font-size: 1.2em;
  }
`
export const Price = styled(Name)`
  font-size: 1.3em;
`

export const Sizes = styled.section`
  width: 40%;
  height: 5vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  @media all and (max-width: ${small}) {
    height: 10vh;
    width: 100%;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 60%;
  }
`
export const Error = styled.p`
  font-size: 0.8em;
  color: #ff0043;
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
    padding: 0 0 10vh;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 100%;
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

  @media all and (max-width: ${small}) {
    display: none;
  }
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
  background-color: ${colors.action};
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
    margin: 5vh 0 0;
  }
`
export const MobileAddToCart = styled.section`
  display: none;

  @media all and (max-width: ${small}) {
    display: flex;
    width: 60%;
    height: 70px;
    position: absolute;
    left: 50%;
    margin: -35px 0 0 -30%;
    top: 0;
    border: none;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    -webkit-align-items: center;

    &:focus {
      outline: none;
    }
  }
`
export const Button = styled.button`
  display: none;

  @media all and (max-width: ${small}) {
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    font-size: 1em;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 50px;
    color: #fff;
    border: none;
    height: 100%;
    padding: 15px 45px 15px;
    background-color: ${colors.action};

    &:focus {
      outline: none;
    }
  }
`
export const MobileIncrement = styled.button`
  height: 100%;
  width: 70px;
  font-size: 1em;
  color: #fff;
  border-radius: 50%;
  background-color: ${colors.action};
  border: none;

  &:focus {
    outline: none;
  }
`
export const MobileDecrement = styled(MobileIncrement)``
