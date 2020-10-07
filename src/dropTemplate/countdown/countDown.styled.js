import styled from 'styled-components'
import { medium, large } from '../../components/breakpoints'

export const Wrapper = styled.div`
  width: 20vw;
  height: 15vh;
  background-color: #ffffff;
  position: fixed;
  top: 35vh;
  right: 5vw;
  padding: 10px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  @media all and (max-width: ${medium}) {
    position: relative;
    width: 90vw;
    top: 0;
    right: 0;
    margin: 3vh 0 3vh;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    position: relative;
    width: 70vw;
    top: 0;
    right: 0;
    margin: 3vh 0 3vh;
  }
`
export const Title = styled.h3`
  font-size: 0.9em;
`
export const Counter = styled.p`
  font-size: 1.4em;
`
