import styled from 'styled-components'

export const ReviewWrapper = styled.div`
  width: 100%;
  height: 15vh;
  min-height: 15vh;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 30px;
`
export const ReviewImage = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
export const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Author = styled.h4``
export const Rate = styled.div`
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  width: 30%;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Caption = styled.p``
export const CreatedDate = styled.p`
  opacity: 0.6;
`
