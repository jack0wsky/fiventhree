import styled from 'styled-components'
import { small } from '../breakpoints'

export const Wrapper = styled.main`
  width: 30%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 120;
  padding: 20px;

  @media all and (max-width: ${small}) {
    width: 100%;
  }
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
export const ReturnBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`

export const ReviewsGrid = styled.section`
  width: 100%;
  height: auto;
  min-height: 40%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2vw;
  overflow: auto;
  padding: 0 0 5vw;
`
export const IfNoReviews = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
`
export const Text = styled.p`
  margin: 0 0 40px;
`
export const AddReview = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  padding: 20px 40px 20px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
