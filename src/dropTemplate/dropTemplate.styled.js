import styled from 'styled-components'

export const TemplateWrapper = styled.main`
  width: 100vw;
  height: ${({ opened }) => (opened ? 'auto' : '100vh')};
  display: flex;
  padding: ${({ opened }) => (opened ? '10vh 0 10vh' : '10vh 0 0')};
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  justify-content: space-between;
  background-color: #efefef;
  position: relative;
`
export const CollectionImage = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
export const CurrentClientsAmount = styled.div`
  display: flex;
  padding: 0 5vw 0;
`
export const OpenCountdown = styled.section`
  width: 100vw;
  height: 80%;
  background-color: #000;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
`
export const Counter = styled.h3`
  font-size: 2em;
  color: #fff;
`
export const Title = styled.h3`
  color: #fff;
  margin: 0 0 5vh;
`
export const JoinBtn = styled.button`
  border: none;
  padding: 10px 20px 10px;
  color: #000;
  background-color: #fff;
  font-size: 1em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 5vh 0 0;
  cursor: pointer;
`
