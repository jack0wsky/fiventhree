import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 30%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 120;
  padding: 20px;
`
export const Header = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  align-items: center;
  -webkit-align-items: center;
`
export const ReturnBtn = styled.button``
export const ReviewsGrid = styled.section`
  width: 100%;
  height: auto;
  min-height: 40%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2vw;
`
