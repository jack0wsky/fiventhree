import styled from 'styled-components'
import { colors } from '../../../theme'

export const PointWrapper = styled.div`
  width: 100%;
  height: ${({ toggle }) => (toggle ? '15vh' : '10vh')};
  padding: 20px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`
export const Address = styled.h3`
  font-size: 1em;
`
export const Description = styled.p`
  font-size: 0.8em;
  font-family: 'Helvetica Neue', sans-serif;
`
export const ChooseBtn = styled.button`
  width: max-content;
  padding: 10px 20px 10px;
  cursor: pointer;
  border: 1px solid ${colors.action};
  color: ${colors.action};
  background: transparent;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    border: 3px solid ${colors.action};
    transition: 0.3s ease-in-out;
  }
`
export const IconWrapper = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const DataWrapper = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const OpeningHours = styled.p``
