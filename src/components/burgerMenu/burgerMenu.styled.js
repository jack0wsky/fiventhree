import styled from 'styled-components'
import { small, medium } from '../breakpoints'

export const Button = styled.button`
  display: none;
  @media all and (max-width: ${medium}) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #000;
    position: fixed;
    z-index: 50;
    bottom: 5vw;
    right: 5vw;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    border: none;

    &:focus {
      outline: none;
    }
  }
`
export const Container = styled.div`
  width: 40%;
  height: 30%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  transition: 0.2s ease-in-out;
  //transform: rotate(${(props) => (props.toggle ? '-45deg' : 0)});

  ${(props) => {
    if (props.toggle) {
      return `
            span:nth-child(1) {
              transform: translateY(10px) rotate(45deg);
            }
            span:nth-child(3) {
              transform: translateY(-10px) rotate(-45deg);
            }
        `
    }
  }};
  span:nth-child(2) {
    transform-origin: center center;
  }
`
export const Line = styled.span`
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: 0.3s ease-in-out;
`
