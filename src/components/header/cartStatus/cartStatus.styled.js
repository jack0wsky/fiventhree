import styled from 'styled-components'

export const Wrapper = styled.section`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Length = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.toggle ? '#000' : '#fff')};
  margin: 0 0 0 20px;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-content: center;
  -webkit-align-items: center;
  font-size: 1em;
  font-weight: 600;
  color: ${(props) => (props.toggle ? '#fff' : '#000')};
  transition: 0.3s ease-in-out;
`
export const Cart = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
