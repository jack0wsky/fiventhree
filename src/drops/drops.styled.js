import styled from 'styled-components'

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
  height: auto;
  padding: 20px;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
