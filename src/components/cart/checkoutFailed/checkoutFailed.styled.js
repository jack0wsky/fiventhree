import styled from 'styled-components'
import { small } from '../../breakpoints'

export const Wrapper = styled.div`
  display: none;

  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    position: fixed;
    top: 100px;
    width: 100%;
    height: auto;
    background-color: #000000;
    padding: 20px;
  }
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
  height: auto;
  font-weight: 500;
`
export const Highlight = styled.span`
  font-weight: 600;
  color: #0b94ff;
`
