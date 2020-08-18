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
  -webkit-justify-content: space-betwen;
  position: fixed;
  right: 0;
  top: 0;

  @media all and (max-width: ${small}) {
    position: relative;
    width: 100%;
    padding: 0 5vw 10vh;
    height: auto;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    position: relative;
    width: 100%;
    height: 50%;
    padding: 5vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 50%;
    height: 100vh;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 35%;
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
export const BasicsWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const CartHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: relative;
  z-index: 100;
  margin: 10vh 0 0;

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
    height: auto;
    margin: 3vh 0 0;
  }
`
export const Head = styled.div`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
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
  height: auto;

  p:nth-child(2),
  p:nth-child(4),
  p:nth-child(6) {
    margin: 25px 0 0;
  }
  p:nth-child(2),
  p:nth-child(4) {
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: -30%;
      width: 100%;
      height: 2px;
      background-color: #e2e2e2;
    }
  }
  ul {
    margin: 0 0 0 20px;
    li {
      list-style-type: none;
      position: relative;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -5%;
        height: 6px;
        width: 6px;
        margin: -3px 0 0;
        border-radius: 50%;
        background-color: ${colors.action};
      }
    }
  }
`
export const AddToCart = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  width: calc(100% - 120px);
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
    width: 100%;
    border: none;
    flex-flow: column;
    -webkit-flex-flow: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    -webkit-align-items: center;
    height: 140px;
    position: fixed;
    z-index: 50;
    bottom: 0;
    left: 0;
    background-color: #fff;

    &:focus {
      outline: none;
    }
  }
`
export const MobileButton = styled.button`
  width: 65%;
  border: none;
  height: 50%;
  background-color: ${colors.action};
  color: #fff;
  padding: 20px 40px 20px;
  transition: 0.3s ease-in-out;
  position: absolute;
  right: 0;
  bottom: 0;
`
export const MobileQuantity = styled.section`
  width: 35%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
`
export const MobileDecrement = styled.button`
  height: 100%;
  font-size: 1.2em;
  width: 30%;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`
export const MobileValue = styled.p``
export const MobileIncrement = styled(MobileDecrement)``
export const MobileSizes = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  a {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000;
  }
`
