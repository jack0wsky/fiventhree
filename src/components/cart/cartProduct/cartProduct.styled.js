import styled from 'styled-components'

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
`
export const Data = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 20px;
`
export const Name = styled.h4`
  font-size: 1em;
  font-family: 'Aktiv Grotesk Ex', sans-serif;
`
export const Price = styled.p`
  font-size: 1em;
`
export const Quantity = styled.div`
  width: 5vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
`
export const Decrement = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const Increment = styled(Decrement)``
export const Value = styled.p`
  margin: 0;
`
export const Remove = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
`
export const RemoveBtn = styled.button``
