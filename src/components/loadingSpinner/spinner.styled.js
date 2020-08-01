import styled, { keyframes } from 'styled-components'

const spinMeRoundBaby = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
  transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const Loading = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid ${({ borderColor }) => borderColor};
  position: relative;

  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 60%;
    height: 60%;
    transform-origin: 0 0;
    background-color: ${({ color }) => color};
    left: 50%;
    top: 50%;
    animation: 0.8s ${spinMeRoundBaby} infinite linear;
  }
`
