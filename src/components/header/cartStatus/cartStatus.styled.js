import styled from 'styled-components'
import { small, medium } from '../../breakpoints'
import { colors } from '../../../theme'

export const Wrapper = styled.section`
  width: auto;
  height: min-content;
  padding: 15px 30px 15px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: relative;
  overflow: hidden;

  @media all and (max-width: ${medium}) {
    padding: 0;
    overflow: initial;
  }
`
export const Length = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 0 0 20px;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  color: #000;
  transition: 0.3s ease-in-out;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const Cart = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }
`
export const Value = styled.p`
  font-size: 1em;
  font-weight: 600;
  margin: 0;
`
export const MobileStatus = styled.div`
  display: none;

  @media all and (max-width: ${medium}) {
    width: auto;
    height: auto;
    padding: 5px 10px 5px;
    border-radius: 50%;
    position: absolute;
    top: -30%;
    right: -30%;
    background-color: ${colors.action};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const MobileValue = styled.p`
  color: #fff;
`
