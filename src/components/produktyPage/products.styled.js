import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100vw;
  height: auto;
  padding: 15vh 5vw 0;
`
export const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const Categories = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const External = styled.a`
  font-size: 1em;
  text-decoration: none;
  color: #fff;
  height: max-content;
  width: max-content;
  padding: 10px 20px 10px;
  background-color: #000;
`
export const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  margin: 0 0 10px;
`
