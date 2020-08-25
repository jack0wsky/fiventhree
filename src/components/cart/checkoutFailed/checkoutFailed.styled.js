import styled from 'styled-components'
import { small } from '../../breakpoints'

export const Wrapper = styled.div`
  display: none;

  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    position: fixed;
    z-index: 150;
    top: 100px;
    width: 100%;
    height: auto;
    padding: 20px;
  }
`
export const BackgroundFade = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 101;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.82);
`
export const TextWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  background-color: #000;
  position: relative;
  z-index: 110;
`
export const Header = styled.div`
  display: none;

  @media all and (max-width: ${small}) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    align-items: center;
    -webkit-align-items: center;
  }
`
export const CloseBtn = styled.button`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }
`
export const Text = styled.p`
  color: #fff;
  height: 25vh;
  font-weight: 500;
  padding: 20px;
  position: relative;
  z-index: 102;
`
export const Highlight = styled.span`
  font-weight: 600;
  color: #0b94ff;
`
