import styled from 'styled-components'
import { small } from '../../breakpoints'

export const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  margin: 0 0 2px;
`
export const Preview = styled.div`
  width: 100px;
  height: 100%;
  background-color: #ccc;
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
  }
`
export const Data = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 0 20px 0;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Name = styled.h4`
  font-size: 1em;
  font-family: 'Aktiv Grotesk Ex', sans-serif;

  @media all and (max-width: ${small}) {
    font-size: 0.8em;
  }
`
export const Price = styled.p`
  font-size: 1em;
  @media all and (max-width: ${small}) {
    font-size: 0.8em;
  }
`
export const Size = styled.p`
  font-size: 1em;
  text-transform: uppercase;
  @media all and (max-width: ${small}) {
    font-size: 0.8em;
  }
`
export const Quantity = styled.div`
  width: 5vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    width: 50%;
  }
`
export const Decrement = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  border: none;
  background: transparent;
  font-size: 1em;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const Increment = styled(Decrement)``
export const Value = styled.p`
  margin: 0;
`
export const Remove = styled.div`
  height: max-content;
  width: 20%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
`
export const RemoveBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  color: #5b5b5b;

  &:focus {
    outline: none;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
