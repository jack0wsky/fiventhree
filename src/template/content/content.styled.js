import styled from 'styled-components'
import { colors } from '../../theme'
import { small, medium, large, xlarge } from '../../components/breakpoints'

export const ContentWrapper = styled.section`
  width: 30%;
  height: 100vh;
  padding: 0 2vw 2vw;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: fixed;
  right: 0;
  top: 0;

  @media all and (max-width: ${small}) {
    position: relative;
    width: 100%;
    padding: 0 5vw 5vw;
    height: 80vh;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    position: relative;
    width: 100%;
    height: 50%;
    padding: 5vw;
  }
  & > a {
    text-decoration: none;
    color: #000;
    transition: 0.3s ease-in-out;
    &:hover {
      transition: 0.3s ease-in-out;
      color: ${colors.action};
    }
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
export const CartHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  & > a {
    text-decoration: none;
    color: #000;
    transition: 0.3s ease-in-out;
    &:hover {
      transition: 0.3s ease-in-out;
      color: ${colors.action};
    }
  }

  @media all and (max-width: ${small}) {
    display: none;
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
  width: 80%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 60%;
  }
`
export const Error = styled.p`
  font-size: 0.8em;
  color: #ff0043;
`
export const DescriptionHead = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  & > button:nth-child(1) {
    ${(props) => {
      if (!props.switch) {
        return `
      &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #000;
      margin: 2px 0 0;
    }
        `
      }
    }};
    }
    }
    & > button:nth-child(2) {
    ${(props) => {
      if (props.switch) {
        return `
        &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #000;
      margin: 2px 0 0;
    }
        `
      }
    }};

`
export const Description = styled.section`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  width: 100%;
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
export const ToggleBtn = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background-color: #000;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const Icon = styled.div`
  display: none;

  span:nth-child(2) {
    position: absolute;
    transform: rotate(90deg);
  }

  @media all and (max-width: ${small}) {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    position: relative;
  }
`
export const Line = styled.span`
  display: none;

  @media all and (max-width: ${small}) {
    display: block;
    height: 3px;
    border-radius: 20px;
    width: 100%;
    background-color: #fff;
  }
`
export const Title = styled.button`
  font-size: 1.1em;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 600;
  position: relative;

  &:focus {
    outline: none;
  }
`
export const Text = styled.p`
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  transition: 0.3s ease-in-out;
  height: 100px;
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
export const MobileAddToCart = styled.section`
  display: none;

  @media all and (max-width: ${small}) {
    display: flex;
    width: 90%;
    height: 70px;
    position: absolute;
    left: 50%;
    margin: -35px 0 0 -45%;
    top: 0;
    border: none;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
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
    height: 70px;
    width: 70px;
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
