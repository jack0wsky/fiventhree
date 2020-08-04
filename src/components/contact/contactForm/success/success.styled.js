import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const Container = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  flex-flow: column;
  -webkit-flex-flow: column;

  a {
    padding: 15px 30px 15px;
    width: max-content;
    background-color: #000;
    color: #fff;
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
  }
`
export const Status = styled.h3`
  font-size: 1.5em;
`
export const Feedback = styled.p`
  font-size: 1em;
  font-weight: 500;
`
