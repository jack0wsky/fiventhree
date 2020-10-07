import styled from 'styled-components'
import { small } from '../components/breakpoints'

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 15vh 5vw 0;
`
export const Grid = styled.section`
  width: 100%;
  height: max-content;
  padding: 15vh 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

  a {
    text-decoration: none;
    color: #000;
  }
`
export const Drop = styled.div`
  width: 100%;
  height: 8vh;
  padding: 20px;
  background-color: #eeeeee;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    align-items: flex-start;
    -webkit-align-items: flex-start;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    height: 15vh;
  }
`
export const Info = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: ${({ opened }) => (opened ? 'space-between' : 'center')};
  -webkit-justify-content: ${({ opened }) =>
    opened ? 'space-between' : 'center'};

  a {
    background-color: #000;
    color: #fff;
    padding: 10px 20px 10px;
  }

  @media all and (max-width: ${small}) {
    width: 100%;
  }
`
